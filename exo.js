console.log ()

/*
function loadimage
<body onload="myFunction()"> function loadImage() {
    alert("Image is loaded");
  }

function replace(string)
{
    string.replace(searchvalue, newvalue)
    var searchvalue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    var newvalue = "Hello World";
}rr
*/
window.onload = function ()
{
document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerHTML="Hello World";
};