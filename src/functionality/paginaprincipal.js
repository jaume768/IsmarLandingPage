document.addEventListener('DOMContentLoaded', function () {
  // Función para determinar si un elemento está en la mitad de la ventana
  function isElementInViewport(el) {
    if (!el) {
      return false;
    }
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
  }

  // Función para iniciar el video en el scroll
  function startVideo() {
    var video = document.getElementById('miVideo');
    if (!video) {
      return;
    }

    window.addEventListener('scroll', function () {
      if (isElementInViewport(video)) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  // Función para manejar el cambio de título según la visibilidad
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      document.title = '¡Vuelve pronto!';
    } else {
      document.title = 'Transforma tu Vida Fitness';
    }
  });

  // Función para manejar animaciones de fade-up
  document.addEventListener('aos:in', function (event) {
    var detail = event.detail;
    if (detail.classList.contains('fade-up')) {
      detail.classList.remove('aos-init', 'fade-up');
      setTimeout(function () {
        detail.classList.add('aos-init', 'fade-up');
      }, 100);
    }
  });

  // Función para aplicar efectos de scroll a los beneficios
  var benefits = document.querySelectorAll('.benefits');
  function handleScroll() {
    benefits.forEach(function (benefit) {
      if (isElementInViewport(benefit)) {
        benefit.style.backgroundColor = 'hsla(217, 89%, 51%, 0.5)';
        benefit.style.borderRadius = '50%';
      } else {
        benefit.style.backgroundColor = 'transparent';
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  // Iniciar la función para comenzar el video
  startVideo();

  // Más lógica y eventos según sea necesario...
});
