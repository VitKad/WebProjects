$(function(){


  $('.menu a, .logo').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1500);
  });

  $('.blog__slider').slick({
   arrows:false,
   dots: true
  });



  $(".menu__btn, .menu__link").on("click", function(){
    $(".menu").toggleClass("menu--active");
  
  });


  var mixer = mixitup('.gallery__content');


});
  

