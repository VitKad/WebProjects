$(function(){



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
  

