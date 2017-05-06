console.log("Yang is awesome")

//First shape
var c = document.getElementById('one');
var ctx = c.getContext('2d');
ctx.fillStyle = "rgb(100, 0, 100)";
ctx.fillRect(100, 100, 100, 100);
ctx.strokeStyle = "rbg(100, 0, 100)";
ctx.strokeRect(80, 80, 140, 140);
ctx.clearRect(120, 120, 60, 60);

//Second shape
var c2 = document.getElementById('two');
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(100, 0, 100)";
ctx2.fillRect(0, 0, 300, 300);
ctx2.clearRect(20, 20, 120, 120);
ctx2.clearRect(20, 160, 120, 120);
ctx2.clearRect(160, 20, 120, 120);
ctx2.clearRect(160, 160, 120, 120);

//Third shape
var c3 = document.getElementById('three');
var ctx3 = c3.getContext('2d');
ctx3.fillStyle = "rgb(100, 0, 100)";
ctx3.fillRect(0, 0, 100, 100);
ctx3.fillRect(200, 0, 100, 100);
ctx3.fillRect(100, 100, 100, 100);
ctx3.fillRect(0, 200, 100, 100);
ctx3.fillRect(200, 200, 100, 100);

//Fourth shape
var c4 = document.getElementById('four');
var ctx4 = c4.getContext('2d');
ctx4.fillStyle = "rgb(100, 0, 100)";
var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx4.fillRect(x, y, width, height);
while (width > 0){
  x += 10;
  y += 10;
  width -= 20;
  height -= 20;
  ctx4.clearRect(x, y, width, height);
  x += 10;
  y += 10;
  width -= 20;
  height -= 20;
  ctx4.fillRect(x, y, width, height);
}

//First custom shape
var c5 = document.getElementById('five');
var ctx5 = c5.getContext('2d');
ctx5.beginPath();
ctx5.strokeStyle = "tomato";
ctx5.moveTo(75, 0);
ctx5.lineTo(150, 100);
ctx5.lineTo(75, 200);
ctx5.lineTo(0, 100);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "linen";
ctx5.fill();

//Second custom shape
var c6 = document.getElementById('six');
var ctx6 = c6.getContext('2d');
ctx6.beginPath();
ctx6.strokeStyle = "tomato";
ctx6.moveTo(0,0);
ctx6.lineTo(300, 300);
ctx6.lineTo(300, 0);
ctx6.lineTo(0, 300);
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle = "magenta";
ctx6.fill();

//Third custom shape
var c7 = document.getElementById('seven');
var ctx7 = c7.getContext('2d');
ctx7.beginPath();
ctx7.strokeStyle = "tomato";
ctx7.moveTo(0,0);
ctx7.lineTo(300,300);
ctx7.lineTo(300, 150);
ctx7.lineTo(0, 150);
ctx7.lineTo(0,0);
ctx7.moveTo(150, 150);
ctx7.lineTo(150,300);
ctx7.lineTo(0, 300);
ctx7.lineTo(300, 0);
ctx7.lineTo(150,0);
ctx7.closePath();
ctx7.stroke();
ctx7.fillStyle = "cyan";
ctx7.fill();

//Last custom shape (circle)
var c8 = document.getElementById('eight');
var ctx8 = c8.getContext('2d');
ctx8.beginPath();
ctx8.arc(150, 150, 50, 0, 6.28);
ctx8.closePath();
ctx8.stroke();
ctx8.fillStyle = "darkkhaki";
ctx8.fill();

//Scenery
var c9 = document.getElementById('scene');
var scene = c9.getContext('2d');
//Sky and land
scene.fillStyle = "green";
scene.fillRect(0, 350, 800, 150);
scene.fillStyle = "cyan";
scene.fillRect(0, 0, 800, 350);
//Sun
scene.beginPath()
scene.arc(100, 100, 50, 0, 6.28)
scene.closePath();
scene.stroke();
scene.fillStyle = "yellow";
scene.fill();
//Building
scene.fillStyle = "grey";
scene.fillRect(100, 250, 200, 100);
scene.clearRect(130, 310, 20, 20);
scene.clearRect(170, 310, 20, 20);
scene.clearRect(210, 310, 20, 20);
scene.clearRect(250, 310, 20, 20);
scene.clearRect(130, 270, 20, 20);
scene.clearRect(170, 270, 20, 20);
scene.clearRect(210, 270, 20, 20);
scene.clearRect(250, 270, 20, 20);
//Road
scene.beginPath();
scene.moveTo(300, 500);
scene.lineTo(350, 350);
scene.lineTo(400, 350);
scene.lineTo(450, 500);
scene.fill();
scene.moveTo(375, 500);
scene.lineTo(375, 350);
scene.stroke();





//
