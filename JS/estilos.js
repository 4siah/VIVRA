
let text = "  VIVRA - Residencia + Cultura ";
let i = 0;

setInterval(() => {
  document.title = text.substring(i) + text.substring(0, i);
  i = (i + 1) % text.length;
}, 200);



/* MAPA PERSONALIZADA GOOGLE MAPS */

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.3851, lng: 2.1734 },
      zoom: 10,
    });
  }

