$(function () {


   
    $('.header__bars-btn, .menu__link').on('click', function(e){
        e.preventDefault();
        $('.menu').toggleClass('menu--active');
    });
    
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        
        prevArrow: '<svg class="slick-left" width="50" height="50" version="1.1" id="Capa_1" xmlns' +
                '="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" fill' +
                '="white" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:' +
                'new 0 0 443.52 443.52;" xml:space="preserve"><path d="M143.492,221.863L336.226' +
                ',29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-' +
                '204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6' +
                '.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></svg>',
        nextArrow: '<svg class="slick-right" width="50" height="50" version="1.1" id="Capa_1" xmln' +
                's="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill' +
                '="white" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-backgroun' +
                'd:new 0 0 512.002 512.002;" xml:space="preserve"><path d="M388.425,241.951L151' +
                '.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28' +
                '.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883' +
                ',3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.15' +
                '5c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"></svg>',
        responsive:[
            {
                breakpoint: 501,
                settings: {
                    arrows: false
                }
            }
           
        ]
    });

    //$('.popup-link').magnificPopup();


  
   
  $('.menu a, .logo').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1000);
  });



   // $('.popup-slider').slick('reinit');

   /*  $('.reviews__slider').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 10000,
 
    }); */
    

    const scene = document.querySelectorAll('.header__parallax');
    
  
    window.addEventListener("scroll", function(){
        /* scene.forEach(function(userItem) {
            let positionBg = userItem.style.backgroundPositionY;
            console.log(positionBg);
        }); */
        scene.forEach(function(userItem) {
           
            let offset = this.window.pageYOffset;
            userItem.style.backgroundPositionY = offset * 0.5 + "px";
          });
       
    });
/* 
    const folio = document.querySelector('.portfolio');
    window.addEventListener("scroll", function(){
    let offset = this.window.pageYOffset;
    folio.style.backgroundPositionY = offset * 0.8 + "px";
      
       
    }); */
    if (window.matchMedia('screen and (max-width: 1000px)').matches) {
        const scene = document.querySelectorAll('.header__parallax');
    window.addEventListener("scroll", function(){
        scene.forEach(function(userItem) {
            let offset = this.window.pageYOffset;
            userItem.style.backgroundPositionY = offset * 0 + "px";
          });
       
    });
       /*  $('.header__slider-img').removeClass('header__parallax'); */// ... действия, если устройство отвечает медиа-запросу
      }
   /*  $(window).on('resize', function(){
        if (window.width()< 1001) { $('.header__slider-img').removeClass('header__parallax'); }
   });
       */



    new WOW().init();
    

  


});
