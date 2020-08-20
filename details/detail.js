$(document).ready(function (){
  AOS.init({
    easing: 'ease',
    duration: 1800
  })
  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    });
  });
})
