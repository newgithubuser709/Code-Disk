const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 600,
    loop: true,
    effect: "coverflow",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    parallax: true,
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        400: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        // when window width is >= 500px
        500: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 650px
        650: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});