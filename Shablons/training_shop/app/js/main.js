$(function(){

  $('.blog-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"> <path  d="M 5.25 12.25 C 5.027344 12.25 4.800781 12.164062 4.632812 11.992188 L 0.257812 7.617188 C -0.0859375 7.277344 -0.0859375 6.722656 0.257812 6.382812 L 4.632812 2.007812 C 4.972656 1.664062 5.527344 1.664062 5.867188 2.007812 C 6.210938 2.347656 6.210938 2.902344 5.867188 3.242188 L 2.113281 7 L 5.871094 10.757812 C 6.210938 11.097656 6.210938 11.652344 5.871094 11.996094 C 5.699219 12.164062 5.472656 12.25 5.25 12.25 Z M 5.25 12.25 "/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><path  d="M 1.75 12.25 C 1.527344 12.25 1.300781 12.164062 1.132812 11.992188 C 0.789062 11.652344 0.789062 11.097656 1.132812 10.757812 L 4.890625 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.367188 2.003906 L 6.742188 6.378906 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.617188 L 2.367188 11.992188 C 2.199219 12.164062 1.972656 12.25 1.75 12.25 Z M 1.75 12.25 "/> </svg></button>',
    infinite: false
  });

  $('.tabs-product__link').on('click', function(e){
    e.preventDefault();
    $('.tabs-product__link').removeClass('tabs-product__link--active');
    $(this).addClass('tabs-product__link--active');

    $('.tabs-product__content-item').removeClass('tabs-product__content-item--active');
    $($(this).attr('href')).addClass('tabs-product__content-item--active');
  });

  $('.slide-product__mini').slick({
    asNavFor: '.slide-product__full',
    vertical: true,
    focusOnSelect: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  $('.slide-product__full').slick({
    asNavFor: '.slide-product__mini',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.shop-content__btn').on('click', function(){
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
  });

  $("[type='number']").keypress(function (e) {
    e.preventDefault();
});

  $('.secelt-style, .description-product__num').styler();

    $(".js-range-slider").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.filter-price__text-from').text(data.from);
        $('.filter-price__text-to').text(data.to);
      },
      onChange: function (data) {
        $('.filter-price__text-from').text(data.from);
        $('.filter-price__text-to').text(data.to);
    },
  });


    $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade:true,
      autoplay: true,
      autoplaySpeed: 10000
    }
    );

    $(".star").rateYo({
      starWidth: "20px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true

    });

    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }
    
    function initializeClock(id, endtime) {
      const clock = document.querySelector('.promo__timer');
      const daysSpan = clock.querySelector('.promo__days');
      const hoursSpan = clock.querySelector('.promo__hours');
      const minutesSpan = clock.querySelector('.promo__minutes');
      const secondsSpan = clock.querySelector('.promo__seconds');
    
      function updateClock() {
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    
    const deadline = $('.promo__timer').attr('data-time');
    initializeClock('promo__timer', deadline);

});
  

