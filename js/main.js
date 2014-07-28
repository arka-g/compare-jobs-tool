//load DOM
$(document).ready(function() {
  var $groupTag
  , $groupSvg
  , $groupPos
  , $curGroupNum = 0
  , $preGroupNum = 0
  , a = 0
  , p = Math.PI
  , t = 30;

  function drawforward() {
    a++;
    a %= 360;
    var colorchange = 239 - a / 10;
    $($groupSvg.parentNode.parentElement).css('background-color', 'rgb('+colorchange+','+colorchange+','+colorchange+')');
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
    $($groupSvg.parentNode.parentElement).css('background-color', 'rgb('+colorchange+','+colorchange+','+colorchange+')');
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
    if (EleRad < 0) {
      gobackwardPie(EleId, -EleRad);
    } else {
      $groupSvg = document.getElementById(EleId);
      for (var j = 0; j < EleRad; ++j) {
        setTimeout(drawforward, j*3);
      }
    }
  };
  function gobackwardPie(EleId, EleRad) {
    $groupSvg = document.getElementById(EleId);
    for (var j = 0; j < EleRad; ++j) {
      setTimeout(drawbackward, j*3);
    }
  };
  function updatePieChart(Ele) {
    var $CurrentGroup = $('.dropdown-button', Ele.parent().parent().parent());
    $preGroupNum = $curGroupNum;
    $curGroupNum = 0;
    $CurrentGroup.each(function() {
      if ($(this).hasClass('dropdown-selected')) {
        $curGroupNum++;
      } else {
      }
    });
    goforwardPie($('path', Ele.parent().parent().parent().parent()).attr('id'), 360 * ($curGroupNum - $preGroupNum) / $CurrentGroup.length);
  }
  $('.dropdown-button').on(
    'mouseenter', function() {
    $(this).toggleClass('dropdown-active');
  });
  $('.dropdown-button').on(
    'mouseleave', function() {
      if ($(this).hasClass('dropdown-active')) {
        $(this).toggleClass('dropdown-active');    
      } else {

      }
  });
  $('.dropdown-button .dropdown-list li').on(
    'click', function() {
      var $CurrentDropdown = $(this).parent().parent();
      $CurrentDropdown.toggleClass('dropdown-active');
      if ($CurrentDropdown.hasClass('dropdown-selected')) {
      } else {
        $CurrentDropdown.toggleClass('dropdown-selected');
      };
      
      $('span', $CurrentDropdown).text('You selected: ' + $(this).text());
      updatePieChart($(this));
    });

    $('.show-menu').on(
    'click', function(){
      if($('ul.nav-menu').css("display","none")){
        $('ul.nav-menu').css("display","block");
      }
      else{
        $('ul.nav-menu').css("display","none");
      }
      
    });

});

