const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var l = Array.from(document.getElementsByClassName('list-head'));
l.forEach(function( elem ){elem.addEventListener('click', async function(){
  var x = elem.nextElementSibling;
  x.classList.toggle("hide");
  x.classList.toggle("shrink");
})});
