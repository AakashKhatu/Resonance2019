var xhr = new XMLHttpRequest();
var jsondata, interEvents, intraEvents;

var sc = document.getElementById("scope");
var na = document.getElementById("na");
var image = document.getElementById("image");
var description = document.getElementById("description");

xhr.open('GET', '../returnJson/');
xhr.send();

xhr.onload = function () {
  json = JSON.parse(xhr.responseText);
  interEvents = JSON.parse(json.inter);
  intraEvents = JSON.parse(json.intra);
};

function fillOverlay( ce ){
  var even, s;
  id = ce.id
  if(id[3] == 'r')
    s = intraEvents;
  else
    s = interEvents;
  pk = id[5];
  for (var key in s) {
    if(s[key].pk == pk){
        even = s[key].fields;
        break;
    }
  }
  console.log(even);
  sc.innerHTML = even["scope"];
  na.innerHTML = even["name"];
  image.innerHTML = even["image"];
  description.innerHTML = even["description"];
}
