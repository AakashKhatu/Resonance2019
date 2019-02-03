var xhr = new XMLHttpRequest();
var jsondata, interEvents, intraEvents;
xhr.open('GET', '../returnJson/');
xhr.send();

xhr.onload = function () {
  json = JSON.parse(xhr.responseText);
  interEvents = JSON.parse(json.inter);
  intraEvents = JSON.parse(json.intra);
};
