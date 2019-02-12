var ovset = false;
var listitems = Array.from(document.getElementsByTagName('li'));
var elemid="not updated";
var xhr = new XMLHttpRequest();
// document.getElementById("form").width = document.clientWidth;
var currentForm = "";
xhr.onload = function () {
  ov.children[1].innerHTML = xhr.responseText;
};
listitems.forEach(function(lElem) {
  if (lElem.parentElement.classList.contains("eventslist")){
  lElem.setAttribute('data-aos', "fade-left");
  lElem.setAttribute('data-aos-easing', "ease");
  lElem.addEventListener('click', function() {
    elem = this
    xhr.open('GET', './descriptions/'+this.id+'.txt');
    xhr.send();
    currentForm = this.getAttribute('data-scope');
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

var sheet = document.createElement('style')
sheet.innerHTML = ".eventslist > li {width: " + dpi * 4.3 + "px;}";
document.body.appendChild(sheet);

var clov = document.getElementById('ovcl');
var ov = document.getElementById('ov');
clov.addEventListener('click', function() {
  ov.classList.toggle("closed");
  ov.classList.toggle("opened");
});
var regset = false;
var clreg = document.getElementById('regcl');
var reg = document.getElementById('reg');
var iform = document.getElementById('form');

clreg.addEventListener('click', function() {
    iform.hidden = !iform.hidden;
  reg.classList.toggle("closed");
  reg.classList.toggle("opened");
});

var interform="https://goo.gl/forms/4WYVjs4jYpQ8C90V2";
var intraform="https://goo.gl/forms/H60xokGc1aleBm5c2";
var edmform="https://goo.gl/forms/nm0yK7IGTtxMUGF82";

function openRegister(t) {
  if(t.getAttribute('id') == "registrationlink"){
    if(currentForm == "inter"){
      if(iform.src!=interform)
        iform.src=interform;
    }
    else if(currentForm == "intra"){
      if(iform.src!=intraform)
        iform.src=intraform;
    }
  }
  else{
    if(iform.src!=edmform)
        iform.src=edmform;
  }
  iform.hidden = !iform.hidden;
  if (regset) {
    reg.classList.toggle("closed");
    reg.classList.toggle("opened");
  } else {
    reg.classList.toggle("opened");
    regset = true;
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
