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

    const $spotlights = $('.spotlights');
    const $spotlights_items = $spotlights.find('.spotlights__slide');

    if ( $spotlights_items.length > 3 ) {
      $spotlights.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: false,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
            }
          },
        ],
      })
    }

})(jQuery);
  