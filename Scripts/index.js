const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var randomimages = Array.from(document.getElementsByTagName('img'));
randomimages.forEach(function ( x, i ){
  x.src = x.src + "&" + i;
})

var l = Array.from(document.getElementsByClassName('list-head'));
l.forEach(function( elem ){elem.addEventListener('click', async function(){
  var x = elem.nextElementSibling;
  x.classList.toggle("hide");
  x.classList.toggle("shrink");
})});

function findFirstPositive(b, a, i, c) {
  c=(d,e)=>e>=d?(a=d+(e-d)/2,0<b(a)&&(a==d||0>=b(a-1))?a:0>=b(a)?c(a+1,e):c(d,a-1)):-1
  for (i = 1; 0 >= b(i);) i *= 2
  return c(i / 2, i)|0
}

var dpi = findFirstPositive(x => matchMedia(`(max-resolution: ${x}dpi)`).matches)

console.log(dpi)
