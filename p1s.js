var sound;

function preload() {
  sound = loadSound("food.mp3");
  sound.setVolume(0.5);
  // img = loadImage("caldera-5.jpg");
}



function draw() {
  background(220);
  // image( img, 0, 0, 400, 400);
}

function mousePressed () {
  sound.play();
}
