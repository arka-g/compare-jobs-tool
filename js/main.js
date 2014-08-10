//load DOM
$(document).ready(function() {
  var $browserType 
  , $groupTag
  , $groupSvg
  , $groupPos
  , $curGroupNum = 0
  , $preGroupNum = 0
  , a = 0
  , p = Math.PI
  , t = 30;

  if (jQuery.browser.mobile == true) {
    switchLanguageToFrom('mobile', 'desktop');
  } else {
    switchLanguageToFrom('desktop', 'mobile');
  };

  function switchLanguageToFrom(toType, fromType) {
    $(toType).css('background','E00');
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

  $('.dropdown-list-down').on(
    'click', function() {
      $('.dropdown-list-wrapper', $(this).parent()).animate({ 
        scrollTop: "200px",
        duration: 100 
      });
    });

  $('.dropdown-button .dropdown-list li').on(
    'click', function(e) {
      var $CurrentDropdown = $(this).parent().parent().parent();
      $CurrentDropdown.toggleClass('dropdown-active');
      if ($CurrentDropdown.hasClass('dropdown-selected')) {
      } 
      else {
        $CurrentDropdown.toggleClass('dropdown-selected');
      };
      
      $('span', $CurrentDropdown).text("You selected: " + $(this).text());
      e.preventDefault();
    });
    
    $('.show-menu').on(
    'click', function(){
      if (!$('ul.nav-menu').hasClass('switch')){
        $('ul.nav-menu').css("display","block");
        $('ul.nav-menu').toggleClass('switch');
      }
      else{
        $('ul.nav-menu').css("display","none");
        $('ul.nav-menu').toggleClass('switch');
      }
    });
});

