// POLYFILL SCROLL
// ----------------------------------

document.querySelector("html").style.scrollBehavior = "auto";
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
  offset: 30,
});

// SCROLL TO HIDE LOGO
// ----------------------------------

const logo = document.querySelector(".logoImage");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    logo.classList.add("hideLogo");
  } else {
    logo.classList.remove("hideLogo");
  }
});
