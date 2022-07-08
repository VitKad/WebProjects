$(function(){
  

  $('.slider-blog__inner').slick({
   dots:true,
   prevArrow:'<button type="button" class="slick-prev"><img src="images/prev-arrow.svg" alt="prev"></button>',
   nextArrow:'<button type="button" class="slick-next"><img src="images/next-arrow.svg" alt="next"></button>'
  });
    

  $('.menu__btn').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });


  var mixer = mixitup('.portfolio__content');



});