document.addEventListener('DOMContentLoaded', function () {
  var splash = document.getElementById('intro-splash');
  if (splash) {
    if (sessionStorage.getItem('introShown')) {
      splash.remove();
    } else {
      document.body.classList.add('intro-active');
      sessionStorage.setItem('introShown', '1');
      splash.addEventListener('animationend', function (e) {
        if (e.animationName === 'splash-slide-up') {
          document.body.classList.remove('intro-active');
          splash.remove();
        }
      });
    }
  }

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
});
