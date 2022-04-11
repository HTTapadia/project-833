cann = document.getElementById("myCanvas");
cannreff = cann.getContext("2d");
var mouseevent = ""
var color="violet";
var width=3;
var lastpositionx=0;
var lastpositiony=0;
var currentpositionx=0;
var currentpositiony=0;

cann.addEventListener("mousedown", mousedown);

function mousedown(e) {
mouseevent = "mousedown";
color = document.getElementById("color").value;
width = document.getElementById("width").value;
}
cann.addEventListener("mouseup", mouseup);

function mouseup(e) {
mouseevent = "mouseup";
}
cann.addEventListener("mouseleave", mouseleave);

function mouseleave(e) {
mouseevent = "mouseleave";
}
cann.addEventListener("mousemove", mousemove);

function mousemove(e) {
    currentpositionx=e.clientX - cann.offsetLeft;
    currentpositiony=e.clientY - cann.offsetTop;
if (mouseevent == "mousedown") {
    cannreff.beginPath();
    cannreff.strokeStyle=color;
    cannreff.lineWidth=width;

    cannreff.moveTo(lastpositionx, lastpositiony);
    cannreff.lineTo(currentpositionx, currentpositiony);
    cannreff.stroke();  
    console.log("the mouse down has now started working");
}
lastpositionx=currentpositionx;
lastpositiony=currentpositiony;
}

function clearthething() {
    console.log("The Clearing Function is working");
    cannreff.clearRect(0, 0, 800, 600);
}

if(screen.width < 992) {
    document.getElementById("myCanvas").width=screen.width - 70;
    document.getElementById("myCanvas").height=screen.height - 300;
    document.body.style.overflow = "hidden";   // unscrollable
}   

cann.addEventListener("touchstart", touchstart);

function touchstart(e) {
    lastpositionx=e.touches[0].clientX - cann.offsetLeft;
    lastpositiony=e.touches[0].clientY - cann.offsetTop;
}
cann.addEventListener("touchmove", touchmove);
function touchmove(e) {

    currentpositionx=e.touches[0].clientX - cann.offsetLeft;
    currentpositiony=e.touches[0].clientY - cann.offsetTop;

    cannreff.beginPath();
    color=document.getElementById("color").value;
    cannreff.strokeStyle=color;
    width=document.getElementById("width").value;
    cannreff.lineWidth=width;
    cannreff.moveTo(lastpositionx, lastpositiony);
    cannreff.lineTo(currentpositionx, currentpositiony);
    cannreff.stroke();
    console.log("the mouse down has now started working");
    lastpositionx=currentpositionx;
    lastpositiony=currentpositiony;
}