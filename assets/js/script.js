$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navigation").addClass("sticky");
      $(".navigation").addClass("sticky-shadow");
    } else {
      $(".navigation").removeClass("sticky");
      $(".navigation").removeClass("sticky-shadow");
    }
  });

  // var owl = $(".club-carousel");
  // owl.owlCarousel({
  //   items: 1,
  // });

  // // owl carousel script
  // $(".club-carousel").owlCarousel({
  //   // margin: 20,
  //   loop: true,
  //   autoplayTimeOut: 2000,
  //   autoplayHoverPause: true,
  //   Responsive: {
  //     0: {
  //       items: 1,
  //       nav: false,
  //     },
  //     600: {
  //       items: 2,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 3,
  //       nav: false,
  //     },
  //   },
  // });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
  // $(".owl-carousel").owlCarousel({
  //   loop: true,
  //   margin: 20,
  //   autoplayTimeOut: 2000,
  //   autoplayHoverPause: true,
  //   responsiveClass: true,
  //   Responsive: {
  //     0: {
  //       items: 1,
  //       nav: false,
  //     },
  //     600: {
  //       items: 2,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 3,
  //       nav: true,
  //     },
  //   },
  // });
  // $('.owl-carousel').owlCarousel();
});

// ======================= TYPING ANIMATION ======================

var typed = new Typed(".typing", {
  strings: [
    "InSync",
    "Fourthwall",
    "Rang&Pixels",
    "Literati",
    "StyleUp",
    "ComedyCons",
    "Roots",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

