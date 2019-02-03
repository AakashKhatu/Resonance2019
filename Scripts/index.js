var ovset = false;
var listitems = Array.from(document.getElementsByTagName('li'));
listitems.forEach(function(lElem) {
  if (lElem.parentElement.classList.contains("eventslist")){
  lElem.setAttribute('data-aos', "fade-left");
  lElem.setAttribute('data-aos-easing', "ease");
  lElem.addEventListener('click', function() {
    if (ovset) {
      ov.classList.toggle("closed");
      ov.classList.toggle("opened");
    } else {
      ov.classList.toggle("opened");
      ovset = true;
    }
  });
}
});

var l = Array.from(document.getElementsByClassName('list-head'));
l.forEach(function(elem) {
  elem.addEventListener('click', async function() {
    var x = elem.nextElementSibling;
    x.classList.toggle("hide");
    elem.classList.toggle("arrow");
    AOS.refresh();
    setTimeout(function() {
      AOS.refresh();
    }, 2000);
  })
});

function findFirstPositive(b, a, i, c) {
  c = (d, e) => e >= d ? (a = d + (e - d) / 2, 0 < b(a) && (a == d || 0 >= b(a - 1)) ? a : 0 >= b(a) ? c(a + 1, e) : c(d, a - 1)) : -1
  for (i = 1; 0 >= b(i);) i *= 2
  return c(i / 2, i) | 0
}

var dpi = findFirstPositive(x => matchMedia(`(max-resolution: ${x}dpi)`).matches)

console.log(dpi * 4)

var sheet = document.createElement('style')
sheet.innerHTML = ".eventslist > li {width: " + dpi * 4.3 + "px;}";
document.body.appendChild(sheet);

var clov = document.getElementById('ovcl');
var ov = document.getElementById('ov');
clov.addEventListener('click', function() {
  ov.classList.toggle("closed");
  ov.classList.toggle("opened");
});
