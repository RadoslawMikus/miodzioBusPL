// POLYFILL SCROLL
// -----------------------------

document.querySelector("html").style.scrollBehavior = "auto";
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  header: "[data-scroll-header]",
});
