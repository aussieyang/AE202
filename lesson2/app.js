console.log("Hey hey I am loaded")

// Load the sprites
var bg = new Image();
bg.src = "city.png"
var flash = new Image();
flash.src = "flash.png"
var revflash = new Image();
revflash.src = "revflash.png"

// Set up the canvas
var s = document.getElementById("scene");
var scene = s.getContext("2d");

bg.onload = function(){
  scene.drawImage(bg, 0, 0, 800, 500)
  scene.drawImage(flash, 100, 300, 50, 150)
  scene.drawImage(revflash, 350, 300, 70, 150)
}
