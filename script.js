// Mobile navigation toggle + active-link highlighting on scroll.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  var anchors = links.querySelectorAll('a[href^="#"]');
  var sections = Array.prototype.map.call(anchors, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the mobile menu after choosing a link.
  anchors.forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  function updateActive() {
    var offset = 80;
    var current = 0;
    sections.forEach(function (sec, i) {
      if (sec && sec.getBoundingClientRect().top - offset <= 0) current = i;
    });
    anchors.forEach(function (a, i) {
      a.classList.toggle('active', i === current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();
