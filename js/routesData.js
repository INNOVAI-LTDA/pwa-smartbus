// js/routesData.js
export const routesData = {
  rota_1: {
    id: "rota_1",
    title: "Rota 1 - PDR / Centro I (Zona Sul)",
    tripDefault: "Próxima Saída: CI3 (06:00) — Ônibus 4",
    path: [
      [-23.0001, -43.3412], // Av. das Américas 3255 (PDR)
      [-23.0008, -43.3381], // Av. das Américas 2901
      [-23.0071, -43.3082], // Av. Armando Lombardi 591
      [-22.9991, -43.2801], // Largo de São Conrado
      [-22.9882, -43.2251], // Av. Delfim Moreira (Leblon)
      [-22.9855, -43.2081], // Av. Vieira Souto (Ipanema)
      [-22.9842, -43.1901], // Av. Atlântica 3958 (Copacabana)
      [-22.9682, -43.1782], // Av. Atlântica 1500
      [-22.9551, -43.1762], // Praia de Botafogo 374
      [-22.9231, -43.1731], // Praia do Flamengo 314
      [-22.9092, -43.1755]  // Rua Araújo Porto Alegre (Centro)
    ],
    stops: [
      { name: "Av. das Américas, 3255", coords: [-23.0001, -43.3412] },
      { name: "Av. Armando Lombardi, 591", coords: [-23.0071, -43.3082] },
      { name: "Av. Atlântica, 3958", coords: [-22.9842, -43.1901] },
      { name: "Praia de Botafogo, 374", coords: [-22.9551, -43.1762] },
      { name: "Rua Araújo Porto Alegre", coords: [-22.9092, -43.1755] }
    ]
  },
  rota_2: {
    id: "rota_2",
    title: "Rota 2 - Centro I / PDR (Volta ZSul)",
    tripDefault: "Próxima Saída: CR1 (06:50) — Ônibus 6",
    path: [
      [-22.9081, -43.1761], // Av. Graça Aranha 187
      [-22.9230, -43.1730], // Praia do Flamengo 60
      [-22.9550, -43.1760], // Praia de Botafogo (FGV)
      [-22.9680, -43.1780], // Av. Atlântica 1500
      [-22.9840, -43.1900], // Av. Atlântica 3958
      [-22.9850, -43.2080], // Av. Vieira Souto
      [-22.9990, -43.2800], // Estrada da Gávea 656
      [-23.0000, -43.3410]  // Parque das Rosas (Chegada)
    ],
    stops: [
      { name: "Av. Graça Aranha, 187", coords: [-22.9081, -43.1761] },
      { name: "Praia do Flamengo, 60", coords: [-22.9230, -43.1730] },
      { name: "Av. Atlântica, 2634", coords: [-22.9750, -43.1840] },
      { name: "Parque das Rosas", coords: [-23.0000, -43.3410] }
    ]
  },
  rota_3: {
    id: "rota_3",
    title: "Rota 3 - PDR / Centro I (Jd. Botânico)",
    tripDefault: "Próxima Saída: CI1 (05:50) — Ônibus 6",
    path: [
      [-23.0001, -43.3412], // Av. das Américas 3255
      [-23.0071, -43.3082], // Av. Armando Lombardi
      [-22.9991, -43.2801], // Largo de São Conrado
      [-22.9723, -43.2241], // Pça. Santos Dumont
      [-22.9651, -43.2162], // Rua Jd. Botânico 657
      [-22.9551, -43.1922], // Rua Voluntários da Pátria 435
      [-22.9231, -43.1731]  // Praia do Flamengo 314
    ],
    stops: [
      { name: "Av. das Américas, 3255", coords: [-23.0001, -43.3412] },
      { name: "Praça Santos Dumont", coords: [-22.9723, -43.2241] },
      { name: "Rua Jd. Botânico, 657", coords: [-22.9651, -43.2162] },
      { name: "Rua Voluntários da Pátria, 231", coords: [-22.9551, -43.1922] }
    ]
  }
};