var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 70,
    centeredSlides: true,
    grabCursor: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Midd Content
var TIMEOUT = 6000;
 
var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
 
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
 
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;
 
  $radios
    .attr('checked', false);
 
  if (currentIndex >= radiosLength - 1) {
 
    $radios
      .first()
      .attr('checked', true);
 
  } else {
 
    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);
 
  }
 
}