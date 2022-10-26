document.addEventListener("DOMContentLoaded", function(event) {
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        // breakpoints: {
        //   // when window width is >= 320px
        //   320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        //   }
        // }
      })
});