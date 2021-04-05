(function ($) {
    const $partnerships = $('.js-partnerships');

    $partnerships.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        adaptiveHeight: true,
        vertical: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ],
    });

})(jQuery);
  