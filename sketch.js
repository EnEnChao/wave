let mic;

function setup() {
  createCanvas(800, 600);
  background(255, 0, 0);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255, 0, 0);

  let vol = mic.getLevel();
  let circleSize = map(vol, 0, 1, 0, width / 2);

  noFill();
  stroke(255);
  ellipse(width / 2, height / 2, circleSize, circleSize);
}
