document.addEventListener('DOMContentLoaded', function () {
  var splash = document.getElementById('intro-splash');
  if (splash) {
    document.body.classList.add('intro-active');

    var particleHost = document.getElementById('intro-particles');
    if (particleHost) {
      var count = 26;
      for (var i = 0; i < count; i++) {
        var p = document.createElement('span');
        p.className = 'intro-particle';
        var size = 2 + Math.random() * 3;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.setProperty('--drift', (Math.random() * 40 - 20) + 'px');
        p.style.animationDuration = (3 + Math.random() * 2.5) + 's';
        p.style.animationDelay = (Math.random() * 3) + 's';
        particleHost.appendChild(p);
      }
    }

    splash.addEventListener('animationend', function (e) {
      if (e.animationName === 'splash-slide-up') {
        document.body.classList.remove('intro-active');
        splash.remove();
      }
    });
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
