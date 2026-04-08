
/* OPCIONES EXPANDIBLES */
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.option').forEach(o => o.classList.remove('active'));
        option.classList.add('active');
    });
});

/* TITULO ANIMADO */


let text = "  VIVRA - Residencia + Cultura ";
let i = 0;

setInterval(() => {
  document.title = text.substring(i) + text.substring(0, i);
  i = (i + 1) % text.length;
}, 200);







/* MAPA GOOGLE MAPS

INSPIRADO EN ESTE TUTORIAL: https://youtu.be/6Tl3ROOgvgw?si=79uyuQfqPu1-4Sjo SOLO QUE LO HICE CON GOOGLE MAPS, Y LUEGO DE UNOS 4-5 DÍAS LO TUVE QUE QUITAR POR SEGURIDAD.

*/


const apiKey = 'wElMx3wa8vzAbg5xhMzB';
  const map = L.map('google-map').setView([38.2699, -0.7126], 13);

  L.tileLayer(
  'https://api.maptiler.com/maps/dataviz-v4-light/{z}/{x}/{y}.png?key=Zt76kWR3LMnw6cRITH2c',
  {
    attribution:
      '<a href="https://www.maptiler.com/">MapTiler</a> | <a href="https://www.openstreetmap.org/">OSM</a>',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

  const markers = [
    {
      locationName: 'Universidad UMH, Miguel Hernández.',
      lat: 38.27518005595439,
      lng: -0.6840738313469786,
      address: 'Avinguda de la Universitat de Elx, s/n, 03202 Elx, Alicante.',
    },
    {
      locationName: 'Universidad CEU, Cardenal Herrera.',
      lat: 38.26011439427001,
      lng: -0.7011642093164693,
      address: 'Pl. Reis Catòlics, 19, 03204 Elx, Alicante',
    },
    {
      locationName: 'UNED, Centre Associat Elx.',
      lat: 38.27086472695614,
      lng: -0.6932946478583667,
      address: 'Avinguda de Candalix, s/n, 03202 Elx, Alicante',
    },
  ];

  const fehIcon = L.icon({
    iconUrl: './IMG/logo_sinfondo.png',
    iconSize: [40, 40],
  });

  markers.forEach((m) => {
    L.marker([m.lat, m.lng], { icon: fehIcon })
      .addTo(map)
      .bindPopup(`
        <div style="max-width:200px;">
          <h3>${m.locationName}</h3>
          <p>${m.address}</p>
        </div>
      `);
  });

const track = document.querySelector('.values-track');
const btnLeft = document.querySelector('.arrow.left');
const btnRight = document.querySelector('.arrow.right');

btnRight.addEventListener('click', () => {
  track.scrollBy({
    left: 340,
    behavior: 'smooth'
  });
});

btnLeft.addEventListener('click', () => {
  track.scrollBy({
    left: -340,
    behavior: 'smooth'
  });
});