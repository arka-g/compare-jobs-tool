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



var loader = document.getElementById('loader')
, border = document.getElementById('border')
, a = 0
, p = Math.PI
, t = 30
, i = 0;

function draw() {
  a++;
  a %= 360;
  var r = ( a * p / 180 )
  , x = Math.sin( r ) * 125
  , y = Math.cos( r ) * - 125
  , mid = ( a > 180 ) ? 1 : 0
  , anim = 'M 0 0 v -125 A 125 125 1 ' 
  + mid + ' 1 ' 
  +  x  + ' ' 
  +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
loader.setAttribute( 'd', anim );
border.setAttribute( 'd', anim );
console.log("drawing");
};

function gotoPie(i) {
  console.log('gottoP');
  for (var j = 0; j < i; ++j) {
    doSetTimeout(j);
    console.log('recursion');
  }

};
function doSetTimeout(j) {
  setTimeout(draw, j*20);
  console.log(j);
}
gotoPie(120);