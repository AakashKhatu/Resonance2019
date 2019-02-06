var iid = document.getElementById('id');
var il = document.getElementById("id-lab");
var clg = document.getElementById('college-name');
var clgl = document.getElementById("clg-nam-lab");
var aa = document.getElementById('aadhar');
var aal = document.getElementById('aa-lab');

console.log(iid);
console.log(clg);

function radioSelect( s ){
  if(s.value=='TEC'){
    iid.classList.toggle("hide");
    clg.classList.toggle("hide");
    aa.classList.toggle("hide");
    aal.classList.toggle("hide");
    clgl.classList.toggle("hide");
    il.classList.toggle("hide");
  }
  else{
    iid.classList.toggle("hide");
    clg.classList.toggle("hide");
    aa.classList.toggle("hide");
    aal.classList.toggle("hide");
    clgl.classList.toggle("hide");
    il.classList.toggle("hide");
  }
}
