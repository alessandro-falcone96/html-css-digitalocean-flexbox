$(document).ready(function() {

  $('.squaletto img').hover(function() {
    $('.contenitore-supporto .scritta').toggle();
  });

  // Azioni finto carousel

  $(".terza-sezione .fa-caret-down").click(
    function() {
      var divActive = $('.finto-carousel div.active');
      var listActive = $('.terza-sezione .contenitore-sinistra ul li.activeBorderColor');
      var anchorActive = $('.terza-sezione .contenitore-sinistra ul li a.activeColor')

      $(divActive).removeClass("active");
      $(listActive).removeClass("activeBorderColor");
      $(anchorActive).removeClass("activeColor");

      if (divActive.is('.last')) {
        $('.finto-carousel div.first').addClass("active");
        $('.terza-sezione .contenitore-sinistra ul li.first').addClass("activeBorderColor");
        $('.terza-sezione .contenitore-sinistra ul li a.first').addClass("activeColor");
      } else {
        $(divActive).next().addClass("active");
        $(listActive).next().addClass("activeBorderColor");
        $(anchorActive).parent().next().children().addClass("activeColor");
      }
    }
  );

  $(".terza-sezione .fa-caret-up").click(
    function() {
      var divActive = $('.finto-carousel div.active');
      var listActive = $('.terza-sezione .contenitore-sinistra ul li.activeBorderColor');
      var anchorActive = $('.terza-sezione .contenitore-sinistra ul li a.activeColor');

      $(divActive).removeClass("active");
      $(listActive).removeClass("activeBorderColor");
      $(anchorActive).removeClass("activeColor");

      if (divActive.is('.first')) {
        $('.finto-carousel div.last').addClass("active");
        $('.terza-sezione .contenitore-sinistra ul li.last').addClass("activeBorderColor");
        $('.terza-sezione .contenitore-sinistra ul li a.last').addClass("activeColor");
      } else {
        $(divActive).prev().addClass("active");
        $(listActive).prev().addClass("activeBorderColor");
        $(anchorActive).parent().prev().children().addClass("activeColor");
      }
    }
  );

  // Azioni primo carousel
  $(".primo-carousel .fa-chevron-right").click(
    function() {
      var imgActive = $('.primo-carousel .box-img div.active');
      var circleActive = $('.quarta-sezione .nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active fas");
      $(circleActive).addClass("far");

      if (imgActive.is('.last')) {
        $('.primo-carousel .box-img div.first').addClass("active");
        $('.quarta-sezione .nav i.first').removeClass("active far");
        $('.quarta-sezione .nav i.first').addClass("active fas");
      } else {
        $(imgActive).next().addClass("active");
        $(circleActive).next().removeClass("active far");
        $(circleActive).next().addClass("active fas");
      }
    }
  );

  // $('html').keydown(function(evento){
  //   if ((evento.which) == 39) {    //39 freccia destra
  //     {
  //       var imgActive = $('.primo-carousel .box-img div.active');
  //       var circleActive = $('.quarta-sezione .nav i.active');
  //
  //       $(imgActive).removeClass("active");
  //       $(circleActive).removeClass("active fas");
  //       $(circleActive).addClass("far");
  //
  //       if (imgActive.is('.last')) {
  //         $('.primo-carousel .box-img div.first').addClass("active");
  //         $('.quarta-sezione .nav i.first').removeClass("active far");
  //         $('.quarta-sezione .nav i.first').addClass("active fas");
  //       } else {
  //         $(imgActive).next().addClass("active");
  //         $(circleActive).next().removeClass("active far");
  //         $(circleActive).next().addClass("active fas");
  //       }
  //
  //     }
  //   }
  // });

  $(".primo-carousel .fa-chevron-left").click(
    function() {
      var imgActive = $('.primo-carousel .box-img div.active');
      var circleActive = $('.quarta-sezione .nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active fas");
      $(circleActive).addClass("far");

      if (imgActive.is('.first')) {
        $('.primo-carousel .box-img div.last').addClass("active");
        $('.quarta-sezione .nav i.last').removeClass("active far");
        $('.quarta-sezione .nav i.last').addClass("active fas");
      } else {
        $(imgActive).prev().addClass("active");
        $(circleActive).prev().removeClass("active far");
        $(circleActive).prev().addClass("active fas");
      }
    }
  );

  // $('html').keydown(function(evento){
  //   if ((evento.which) == 37) {    //37 freccia sinistra
  //     {
  //       var imgActive = $('.primo-carousel .box-img div.active');
  //       var circleActive = $('.quarta-sezione .nav i.active');
  //
  //       $(imgActive).removeClass("active");
  //       $(circleActive).removeClass("active fas");
  //       $(circleActive).addClass("far");
  //
  //       if (imgActive.is('.first')) {
  //         $('.primo-carousel .box-img div.last').addClass("active");
  //         $('.quarta-sezione .nav i.last').removeClass("active far");
  //         $('.quarta-sezione .nav i.last').addClass("active fas");
  //       } else {
  //         $(imgActive).prev().addClass("active");
  //         $(circleActive).prev().removeClass("active far");
  //         $(circleActive).prev().addClass("active fas");
  //       }
  //     }
  //   }
  // });

  // Azioni secondo carousel
  $(".secondo-carousel .fa-chevron-right").click(
    function() {
      var imgActive = $('.settima-sezione div.active');
      var circleActive = $('.settima-sezione .nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active fas");
      $(circleActive).addClass("far");

      if (imgActive.is('.last')) {
        $('.settima-sezione div.first').addClass("active");
        $('.settima-sezione .nav i.first').removeClass("active far");
        $('.settima-sezione .nav i.first').addClass("active fas");
      } else {
        $(imgActive).next().addClass("active");
        $(circleActive).next().removeClass("active far");
        $(circleActive).next().addClass("active fas");
      }
    }
  );

  // $('html').keydown(function(evento){
  //   if ((evento.which) == 39) {    //39 freccia destra
  //     {
  //       var imgActive = $('.secondo-carousel div.active');
  //       var circleActive = $('.settima-sezione .nav i.active');
  //
  //       $(imgActive).removeClass("active");
  //       $(circleActive).removeClass("active fas");
  //       $(circleActive).addClass("far");
  //
  //       if (imgActive.is('.last')) {
  //         $('.secondo-carousel div.first').addClass("active");
  //         $('.settima-sezione .nav i.first').removeClass("active far");
  //         $('.settima-sezione .nav i.first').addClass("active fas");
  //       } else {
  //         $(imgActive).next().addClass("active");
  //         $(circleActive).next().removeClass("active far");
  //         $(circleActive).next().addClass("active fas");
  //       }
  //
  //     }
  //   }
  // });

  $(".secondo-carousel .fa-chevron-left").click(
    function() {
      var imgActive = $('.secondo-carousel div.active');
      var circleActive = $('.settima-sezione .nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active fas");
      $(circleActive).addClass("far");

      if (imgActive.is('.first')) {
        $('.secondo-carousel div.last').addClass("active");
        $('.settima-sezione .nav i.last').removeClass("active far");
        $('.settima-sezione .nav i.last').addClass("active fas");
      } else {
        $(imgActive).prev().addClass("active");
        $(circleActive).prev().removeClass("active far");
        $(circleActive).prev().addClass("active fas");
      }
    }
  );

  // $('html').keydown(function(evento){
  //   if ((evento.which) == 37) {    //37 freccia sinistra
  //     {
  //       var imgActive = $('.secondo-carousel div.active');
  //       var circleActive = $('.settima-sezione .nav i.active');
  //
  //       $(imgActive).removeClass("active");
  //       $(circleActive).removeClass("active fas");
  //       $(circleActive).addClass("far");
  //
  //       if (imgActive.is('.first')) {
  //         $('.secondo-carousel div.last').addClass("active");
  //         $('.settima-sezione .nav i.last').removeClass("active far");
  //         $('.settima-sezione .nav i.last').addClass("active fas");
  //       } else {
  //         $(imgActive).prev().addClass("active");
  //         $(circleActive).prev().removeClass("active far");
  //         $(circleActive).prev().addClass("active fas");
  //       }
  //     }
  //   }
  // });

});
