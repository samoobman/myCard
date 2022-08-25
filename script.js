
jQuery(document).ready(function($){

  var makeItRain = function() {
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      increment += randoFiver;
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 85) + '%; animation-delay: 0.'
       + randoHundo + 's; animation-duration: 0.4' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.4'
        + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 85) + '%; animation-delay: 0.'
       + randoHundo + 's; animation-duration: 0.4' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.4'
        + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }

  function windowSize(){
    if ($(window).width() > '1280'){
      makeItRain()
    }
  }

  $(window).on('load resize',windowSize);

  $(".btn3").on('click touchstart', function(){
  $(".dropdown-menu3").toggleClass("active");
  });

  $(".back-row").on('click touchstart', function(){
    $(".dropdown-menu3").removeClass("active");
  });

  $(".containers").on('click touchstart', function(){
    $(".dropdown-menu3").removeClass("active");
  });


  function checkParams() {
        var name = $('#name1').val();
        var email = $('#email').val();

        if (name.length != 0 && email.length >= 6) {
            $('#submit').removeAttr('disabled');
        } else {
            $('#submit').attr('disabled', 'disabled');
        }
    }

  

});
