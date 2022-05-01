// POLYFILL SCROLL
// -----------------------------

document.querySelector("html").style.scrollBehavior = "auto";
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  header: "[data-scroll-header]",
});

// $(window).scroll(function(e) {

//   var scroll = $(window).scrollTop();
//   if (scroll >= 150) {
//       $('.navbar').addClass("navbar-hide");
//       $('.logo').addClass("logo-hide");
//   } else {
//       $('.navbar').removeClass("navbar-hide");
//       $('.logo').removeClass("logo-hide");
//   }

// });
