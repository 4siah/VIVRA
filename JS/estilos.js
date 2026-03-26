
/* INICIO. */

let text = "  VIVRA - Residencia + Cultura ";
let i = 0;

setInterval(() => {
  document.title = text.substring(i) + text.substring(0, i);
  i = (i + 1) % text.length;
}, 200);

/* MAPA PERSONALIZADO GOOGLE MAPS */

function initMap() {

  const markers = [
    {
      locationName: 'Universidad UMH, Miguel Hernández.',
      lat: 38.27518005595439,
      lng: -0.6840738313469786,
      address: 'Avinguda de la Universitat de Elx, s/n, 03202 Elx, Alicante.'
    },
    {
      locationName: 'Universidad CEU, Cardenal Herrera.',
      lat: 38.26011439427001,
      lng: -0.7011642093164693,
      address: 'Pl. Reis Catòlics, 19, 03204 Elx, Alicante'
    },
    {
      locationName: 'UNED, Centre Associat Elx.',
      lat: 38.27086472695614,
      lng: -0.6932946478583667,
      address: 'Avinguda de Candalix, s/n, 03202 Elx, Alicante'
    }
  ];

  const fehMarker = {
    url: './img/logo_sinfondo.png',
    scaledSize: new google.maps.Size(40, 40)
  };

  const centerMap = { lat: 38.2699, lng: -0.7126 };

 
  const mapStyle = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        { "color": "#e9e9e9" },
        { "lightness": 17 }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f5f5f5" },
        { "lightness": 20 }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 17 }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 29 },
        { "weight": 0.2 }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 18 }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 16 }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f5f5f5" },
        { "lightness": 21 }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        { "color": "#dedede" },
        { "lightness": 21 }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "on" },
        { "color": "#ffffff" },
        { "lightness": 16 }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        { "saturation": 36 },
        { "color": "#333333" },
        { "lightness": 40 }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f2f2f2" },
        { "lightness": 19 }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#fefefe" },
        { "lightness": 20 }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#fefefe" },
        { "lightness": 17 },
        { "weight": 1.2 }
      ]
    }
  ];

  const mapOptions = {
    center: centerMap,
    zoom: 10,
    disableDefaultUI: true,
    styles: mapStyle 
  };

  const map = new google.maps.Map(
    document.getElementById("google-map"),
    mapOptions
  );

  const infoWindow = new google.maps.InfoWindow({
    minWidth: 200,
    maxWidth: 200
  });

  for (let i = 0; i < markers.length; i++) {

    const marker = new google.maps.Marker({
      position: { lat: markers[i].lat, lng: markers[i].lng },
      map: map,
      icon: fehMarker
    });

    const infoWindowContent = `
      <div class="feh-content">
        <h3>${markers[i].locationName}</h3>
        <p>${markers[i].address}</p>
      </div>
    `;

    marker.addListener('click', () => {
      infoWindow.setContent(infoWindowContent);
      infoWindow.open(map, marker);
    });
  }
}