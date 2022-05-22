$(function () {
  $('.product__slider').slick({
    arrows: false,
    dots: true,
  });
  $('.bikes__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.menu, .product__content').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
  });
});
