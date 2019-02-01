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
