$(function(){
  
  $('.menu a, .go-top, .logo').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1500);
  });

  $('.header__scroll').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 20000);
  });



  $('.slider-blog__inner').slick({
   dots:true,
   prevArrow:'<button type="button" class="slick-prev"><img src="images/prev-arrow.svg" alt="prev"></button>',
   nextArrow:'<button type="button" class="slick-next"><img src="images/next-arrow.svg" alt="next"></button>',
   responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false
      }
    }
  ]
  });
    

  $('.menu__btn, .menu__link').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });


  var mixer = mixitup('.portfolio__content');



});