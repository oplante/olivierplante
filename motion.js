/* Entrance for the name and the line under it. Press feedback is CSS. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

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
})();
