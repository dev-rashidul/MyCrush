// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100)

})

// Slider JavaScript

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      2000: {
        items: 2,
      },
    },
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
  });