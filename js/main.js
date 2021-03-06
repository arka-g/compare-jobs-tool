/*
Authors: 
Mingyao Liu
Arka Ganguli 
*/

$(document).ready(function() {
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
      if ($('.nav-menu').css('display') == 'none'){
        $('.nav-menu').slideDown(500);
        $('.show-menu').css("background", "#ffcd00");

      }
      else{
        $('.nav-menu').slideUp(500);
        $('.show-menu').css("background", "#333");
        setTimeout(function() {
          $('.nav-menu').removeAttr('style');
        }, 550);
      }
    });

  $('#career-dept li').on
  ('click', function(){
    var textTitle = $(this).text();
    $('.title h1').html(textTitle);
    $('.title').css("margin-top", "20px");
    return false;
  });

  switchLanguageToFrom = function(toType, fromType) {
    $("." + fromType).each(function() {
      $(this).removeClass(fromType);
      $(this).addClass(toType);
    })
  };

  if ($('html').hasClass('ie9') || $('html').hasClass('ie8') || $('html').hasClass('ie7') || $('html').hasClass('ie6')) {
    $('.desktop').hide();
  } else {
    $('.ie').hide();
    if (jQuery.browser.mobile == true) {
      switchLanguageToFrom('mobile', 'desktop');
    } else {
      switchLanguageToFrom('desktop', 'mobile');
    };
  }
  

  
});

