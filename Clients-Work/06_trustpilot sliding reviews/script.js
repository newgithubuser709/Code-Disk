const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    speed: 800,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {

        // when window width is >= 780px
        100: {
            slidesPerView: 1,
            spaceBetween: 0
        },


        // when window width is >= 991px
        830: {
            slidesPerView: 2,
            spaceBetween: 0
        },

    }

});