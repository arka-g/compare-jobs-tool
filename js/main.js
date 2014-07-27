function DropDown(el) {
  console.log(el);
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text(obj.val);
      $(this).parent().parent().css("background","#4cbeff");
      $(this).parent().parent().css("color","#FFF");
    });
  },
  getValue : function() {
    return this.val;
  },
  getIndex : function() {
    return this.index;
  }
}

$(function() { 
        //how to find element that got clicked?

        $('.wrapper-dropdown-1').on(
          'click',function() {

            var dd = new DropDown($(this));
            console.log(dd);
            $('.wrapper-dropdown-1').removeClass('active');
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