$(function () {
    $('.mainVisual').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.list_txt').slick({
        arrows: true,
        fade: true,
        asNavFor: ".list_img",
    });
    $('.list_img').slick({
        arrows: false,
        asNavFor: ".list_txt",
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 962,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $('.mopen').on('click', function (e) {
        e.preventDefault();
        $('.header .inner .main_menu').toggleClass('on');
    });
});