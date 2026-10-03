/* Case pages enter with a short fade and slide. Press feedback is CSS. */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("motion");

  function play() {
    if (!document.querySelector("[data-enter]")) {
      document.documentElement.classList.remove("motion");
      return;
    }
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
