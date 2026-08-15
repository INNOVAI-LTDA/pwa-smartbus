const CACHE_NAME = 'smartbus-pdr-v3';
const ASSETS = [
  '/pwa-smartbus/',
  '/pwa-smartbus/index.html',
  '/pwa-smartbus/manifest.json',
  '/pwa-smartbus/js/routesData.js',
  '/pwa-smartbus/js/app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
