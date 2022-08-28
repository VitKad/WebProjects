$(function () {
    
    $('.reviews__link, .portfolio__box-img').on("click", function(){
        $('.header__top').removeClass('compensate-for-scrollbar');
        $('.header__top').addClass('compensate-for-scrollbar');
    });
   
    $('.header__bars-btn, .menu__link').on('click', function(e){
        e.preventDefault();
        $('.menu').toggleClass('menu--active');
    });
    

    $('.reviews__items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 32.351562 50.023438 L 75.808594 6.570312 C 77.3125 5.0625 77.3125 2.628906 75.808594 1.125 C 74.304688 -0.375 71.867188 -0.375 70.367188 1.125 L 24.191406 47.304688 C 22.6875 48.804688 22.6875 51.242188 24.191406 52.742188 L 70.367188 98.921875 C 71.898438 100.398438 74.332031 100.351562 75.808594 98.824219 C 77.25 97.335938 77.25 94.96875 75.808594 93.476562 Z M 32.351562 50.023438 "/></g></svg> </button>',
nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 75.863281 47.257812 L 29.609375 1.132812 C 28.09375 -0.378906 25.640625 -0.375 24.128906 1.140625 C 22.617188 2.65625 22.621094 5.109375 24.136719 6.621094 L 67.636719 50 L 24.132812 93.378906 C 22.617188 94.890625 22.617188 97.34375 24.125 98.859375 C 24.886719 99.621094 25.878906 100 26.875 100 C 27.863281 100 28.851562 99.625 29.609375 98.867188 L 75.863281 52.742188 C 76.59375 52.015625 77.003906 51.03125 77.003906 50 C 77.003906 48.96875 76.59375 47.984375 75.863281 47.257812 Z M 75.863281 47.257812 "/></g></svg> </button>',
responsive: [
  {
    breakpoint: 1201,
    settings: {
      slidesToShow: 2
    }
  },
  {
      breakpoint: 901,
      settings: {
          slidesToShow: 1,
      }
  },
  {
      breakpoint: 571,
      settings: {
        slidesToShow: 1,
          arrows: false,
          dots: true
      }
  },
  

]

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
        
    });



  
   
  $('.menu a, .logo').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1000);
  });




    const scene = document.querySelectorAll('.header__parallax');
    
  
    window.addEventListener("scroll", function(){
       
        scene.forEach(function(userItem) {
           
            let offset = this.window.pageYOffset;
            userItem.style.backgroundPositionY = offset * 0.5 + "px";
          });
       
    });

    if (window.matchMedia('screen and (max-width: 1000px)').matches) {
        const scene = document.querySelectorAll('.header__parallax');
    window.addEventListener("scroll", function(){
        scene.forEach(function(userItem) {
            let offset = this.window.pageYOffset;
            userItem.style.backgroundPositionY = offset * 0 + "px";
          });
       
    });
     
      }
  

    new WOW().init();
    

  


});
