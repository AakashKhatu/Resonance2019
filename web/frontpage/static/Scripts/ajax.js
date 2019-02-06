var xhr = new XMLHttpRequest();
var jsondata, interEvents, intraEvents;
var na = document.getElementById("na");
var image = document.getElementById("image");
var description = document.getElementById("description");
var entryfee = document.getElementById("entryfee");
var prize = document.getElementById("prize");
var members = document.getElementById("members");
var date = document.getElementById("date");
var starttime = document.getElementById("starttime");
var endtime = document.getElementById("endtime");
var loc = document.getElementById("location");

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
  na.innerHTML = even["name"];
  image.innerHTML = even["image"];
  description.innerHTML = even["description"];
  entryfee.innerHTML = even["entry_fee"];
  prize.innerHTML = even["prize"];
  members.innerHTML = even["members"];
  date.innerHTML = even["date"];
  starttime.innerHTML = even["starttime"];
  endtime.innerHTML = even["endtime"];
  loc.innerHTML = even["location"];
}
