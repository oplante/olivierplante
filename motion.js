/* Hero entrance, plus compact carousels. Press feedback is CSS. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduce) {
    document.documentElement.classList.add("motion");

    function play() {
      var nodes = document.querySelectorAll("[data-enter]");
      nodes.forEach(function (el, i) {
        el.style.transitionDelay = (i * 40) + "ms";
      });
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          document.documentElement.classList.add("ready");
        });
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", play);
    } else {
      play();
    }
  }

  function show(root, index) {
    var slides = root.querySelectorAll(".carousel-frame img");
    var dots = root.querySelectorAll(".carousel-nav button");
    var cap = root.querySelector("figcaption");
    var count = slides.length;
    if (!count) return;
    index = (index + count) % count;
    root.setAttribute("data-index", String(index));
    slides.forEach(function (img, i) {
      var on = i === index;
      img.classList.toggle("is-on", on);
      img.setAttribute("aria-hidden", on ? "false" : "true");
    });
    dots.forEach(function (btn, i) {
      if (i === index) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
    if (cap && slides[index]) {
      var text = slides[index].getAttribute("data-caption");
      if (text) cap.textContent = text;
    }
  }

  function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach(function (root) {
      var slides = root.querySelectorAll(".carousel-frame img");
      show(root, 0);
      root.querySelectorAll(".carousel-nav button").forEach(function (btn, i) {
        btn.addEventListener("click", function () {
          show(root, i);
        });
      });
      root.querySelectorAll(".carousel-arrow").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var current = parseInt(root.getAttribute("data-index") || "0", 10);
          var dir = parseInt(btn.getAttribute("data-dir") || "1", 10);
          show(root, current + dir);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCarousels);
  } else {
    initCarousels();
  }
})();
