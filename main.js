$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    });
  });

  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    });
  });

  $('.collapsible').on('click', function () {
    var distance = $('#portfolio').offset().top
    $('html,body').animate({
      scrollTop:distance
    },650);
    $(this).toggleClass('active');
    $('.portfolio-item-extra').toggleClass('item-hidden');
    $('.portfolio-item-extra').toggleClass('slide-down');
    $('#coll-btn-icon').toggleClass('fa-chevron-down');
    $('#coll-btn-icon').toggleClass('fa-chevron-up');
  });

  AOS.init({
    easing: 'ease',
    duration: 1800
  })
/*
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      //this.firstChild.classList.toggle("fa-chevron-down");
      //this.firstChild.classList.toggle("fa-chevron-up");
      var content = this.previousElementSibling;
      for (i = 0; i < 2; i++){
        if (content.style.display === "flex") {
          content.style.display = "none";
        } else {
          content.style.display = "flex";
        }
        content = content.previousElementSibling;
      }

    });
  }
*/
});
