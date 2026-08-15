// js/app.js
import { routesData } from './routesData.js';

class MapApp {
  constructor() {
    this.map = null;
    this.currentPolyline = null;
    this.stopMarkers = [];
    this.busMarker = null;
    this.animationInterval = null;

    this.initMap();
    this.bindEvents();
    this.renderRoute('rota_1');
  }

  initMap() {
    this.map = L.map('map', { zoomControl: false }).setView([-23.0001, -43.3412], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
  }

  bindEvents() {
    const selector = document.getElementById('routeSelect');
    if (selector) {
      selector.addEventListener('change', (e) => this.renderRoute(e.target.value));
    }
  }

  renderRoute(routeKey) {
    const route = routesData[routeKey];
    if (!route) return;

    this.updateUI(route);
    this.clearMapLayers();

    // Desenha trajeto
    this.currentPolyline = L.polyline(route.path, { color: '#0284c7', weight: 4, opacity: 0.8 }).addTo(this.map);
    this.map.fitBounds(this.currentPolyline.getBounds(), { padding: [30, 30] });

    // Desenha marcadores de paradas
    route.stops.forEach(stop => {
      const marker = L.circleMarker(stop.coords, {
        radius: 6,
        fillColor: "#38bdf8",
        color: "#0f172a",
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      }).addTo(this.map).bindPopup(`<b>${stop.name}</b>`);
      this.stopMarkers.push(marker);
    });

    // Inicia simulação de movimento
    this.startBusSimulation(route);
  }

  updateUI(route) {
    document.getElementById('displayRouteTitle').innerText = route.title;
    document.getElementById('displayTripInfo').innerText = route.tripDefault;
  }

  clearMapLayers() {
    if (this.currentPolyline) this.map.removeLayer(this.currentPolyline);
    this.stopMarkers.forEach(marker => this.map.removeLayer(marker));
    this.stopMarkers = [];
    if (this.busMarker) this.map.removeLayer(this.busMarker);
    if (this.animationInterval) clearInterval(this.animationInterval);
  }

  startBusSimulation(route) {
    let step = 0;
    this.busMarker = L.marker(route.path[0]).addTo(this.map).bindPopup("<b>Ônibus em Movimento</b>");

    this.animationInterval = setInterval(() => {
      step = (step + 1) % route.path.length;
      const currentCoord = route.path[step];
      this.busMarker.setLatLng(currentCoord);

      const currentStopName = route.stops[step % route.stops.length].name;
      document.getElementById('displayStopStatus').innerText = `A caminho de: ${currentStopName}`;
    }, 3500);
  }
}

// Registro do SW e inicialização do App
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('SW registrado com sucesso'))
    .catch(err => console.error('Erro SW:', err));
}

document.addEventListener('DOMContentLoaded', () => new MapApp());