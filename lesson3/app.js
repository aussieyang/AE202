// Declare all variables at the top (elevation of scope)
var canvas;
var ctx;
// Variables to hold some coordinates
var x = 600;
var y = 300;
// Hold onto the magnitude of our movement
var mx = 2;
var my = 4;
// Keep track of the height and width of canvas
var width = 600;
var height= 300;

// Initialises animation - entry point function
function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10); //every 10ms, we run the function draw()
}

// Function to clear our canvas
function clear() {

}

// Defining draw function
function draw(){

}

init();
