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
