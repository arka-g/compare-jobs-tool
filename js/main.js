//load DOM
$(document).ready(function() {
  var $groupSvg
  , $groupPos
  , a = 0
  , p = Math.PI
  , t = 30
  , i = 0;

  function drawforward() {
    a++;
    a %= 360;
    var colorchange = 239 - a / 10;
    $('#group1').parent().parent().css('background-color', 'rgb('+colorchange+','+colorchange+','+colorchange+')');
    var r = ( a * p / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( a > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
    + mid + ' 1 ' 
    +  x  + ' ' 
    +  y  + ' z';
    $groupSvg.setAttribute( 'd', anim );
  };

  function drawbackward() {
    a--;
    a %= 360;
    var colorchange = 239 - a / 10;
    $('#group1').parent().parent().css('background-color', 'rgb('+colorchange+','+colorchange+','+colorchange+')');
    var r = ( a * p / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( a > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
    + mid + ' 1 ' 
    +  x  + ' ' 
    +  y  + ' z';
    $groupSvg.setAttribute( 'd', anim );
  };

  function goforwardPie(EleId, EleRad) {
    $groupSvg = document.getElementById(EleId);
    for (var j = 0; j < EleRad; ++j) {
      setTimeout(drawforward, j*3);
    }
  };
  function gobackwardPie(EleId, EleRad) {
    $groupSvg = document.getElementById(EleId);
    for (var j = 0; j < EleRad; ++j) {
      setTimeout(drawbackward, j*3);
    }
  };

  goforwardPie("group1",120);

  $('.wrapper-dropdown-1').on(
    'mouseenter', function() {
    $(this).toggleClass('active');
  });
  $('.wrapper-dropdown-1').on(
    'mouseleave', function() {
      if ($(this).hasClass('active')) {
        $(this).toggleClass('active');    
      } else {

      }
  });
  $('.wrapper-dropdown-1 .dropdown li').on(
    'click', function() {
      $(this).parent().parent().toggleClass('active');
      $(this).parent().parent().css("background","#4cbeff");
      $(this).parent().parent().css("color","#FFF");
      var text = $(this).text();
      $('span', $(this).parent().parent()).text('You selected: ' + text);
    });
});

