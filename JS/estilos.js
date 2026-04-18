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

/* MAPA */
if (document.getElementById('google-map')) {
  const map = L.map('google-map').setView([38.2699, -0.7126], 13);

  L.tileLayer(
    'https://api.maptiler.com/maps/dataviz-v4-light/{z}/{x}/{y}.png?key=Zt76kWR3LMnw6cRITH2c',
    {
      attribution: '<a href="https://www.maptiler.com/">MapTiler</a> | <a href="https://www.openstreetmap.org/">OSM</a>',
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
}


const track = document.querySelector('.s-6-info-tarjeta');
const btnLeft = document.querySelector('.flecha-izquierda');
const btnRight = document.querySelector('.flecha-derecha');

if (track && btnLeft && btnRight) {
  btnRight.addEventListener('click', () => {
    track.scrollBy({ left: 340, behavior: 'smooth' });
  });
  btnLeft.addEventListener('click', () => {
    track.scrollBy({ left: -340, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var videoPlayButton,
      videoWrapper = document.querySelector('.video-wrapper'),
      video = document.querySelector('.video-custom');

  if (videoWrapper && video && videoWrapper.contains(video)) {
    const videoMethods = {
      renderVideoPlayButton: function() {
        this.formatVideoPlayButton();
        video.classList.add('has-media-controls-hidden');
        videoPlayButton = document.querySelector('.video-overlay-play-button');
        videoPlayButton.addEventListener('click', this.hideVideoPlayButton);
      },
      formatVideoPlayButton: function() {
        videoWrapper.insertAdjacentHTML('beforeend', `
          <svg class="video-overlay-play-button" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#ed832b"/>
            <polygon points="70, 55 70, 145 145, 100" fill="#ed832b"/>
          </svg>
        `);
      },
      hideVideoPlayButton: function() {
        video.play();
        videoPlayButton.classList.add('is-hidden');
        video.classList.remove('has-media-controls-hidden');
        video.setAttribute('controls', 'controls');
      }
    };
    videoMethods.renderVideoPlayButton();
  }
});

const s6track = document.querySelector('.s-6-track');
const flecha1 = document.querySelector('.flecha1');
const flecha2 = document.querySelector('.flecha2');

if (s6track && flecha1 && flecha2) {
  const ancho = () => s6track.querySelector('.s-6-card').offsetWidth + 16;
  flecha1.addEventListener('click', () => {
    s6track.scrollBy({ left: -ancho(), behavior: 'smooth' });
  });
  flecha2.addEventListener('click', () => {
    s6track.scrollBy({ left: ancho(), behavior: 'smooth' });
  });
}

const footer = document.querySelector('.footer');

if (footer) {
  function mostrarFooter() {
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < window.innerHeight) {
      footer.classList.add('visible');
    }
  }

  window.addEventListener('scroll', mostrarFooter);
  window.addEventListener('load', mostrarFooter);
  document.addEventListener('DOMContentLoaded', mostrarFooter);
  mostrarFooter();
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.s-2, .s-3, .s-4, .s-5-cards, .card, .s-6-info, .video-wrapper, .caja')
  .forEach(el => observer.observe(el));

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

const slides = document.querySelectorAll('.p-1 .slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

const collabSlides = document.querySelectorAll('.collab-slide');
const collabTextos = document.querySelectorAll('.collab-slide-texto');
const collabDots = document.querySelectorAll('.collab-dot');

if (collabSlides.length && collabDots.length) {
  let collabCurrent = 0;

  function goTo(index) {
    collabSlides.forEach(s => s.classList.remove('active'));
    collabTextos.forEach(t => t.classList.remove('active'));
    collabDots.forEach(d => d.classList.remove('active'));
    collabSlides[index].classList.add('active');
    collabTextos[index].classList.add('active');
    collabDots[index].classList.add('active');
    collabCurrent = index;
  }

  collabDots.forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
  });

  setInterval(() => {
    goTo((collabCurrent + 1) % collabSlides.length);
  }, 3000);
}