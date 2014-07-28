//load DOM
$(document).ready(function(){
  $('.wrapper-dropdown-1').hover(function(){
    //alert('clicked');
    $(this).toggleClass('active');

    $(this).find('ul.dropdown>li').on('click',function(){
      // $(this).toggleClass('active');
      $(this).toggleClass('active');
      $(this).parent().parent().css("background","#4cbeff");
      $(this).parent().parent().css("color","#FFF");
      var text = $(this).text();
      $(this).parent().parent().text('You selected: ' + text);
      //wtf this does not work..
      $(this).removeClass('active');
      console.log($(this));
    });
  });
});

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