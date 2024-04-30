let font;
let points = [];
let r = 2;
let angle = 0;

function preload() {
  font = loadFont("font/Caudex-BoldItalic.ttf");
}

function setup() {
  createCanvas(1000, 600);

  points = font.textToPoints("FLO", 30, 300, 280, {
    sampleFactor: 0.3,
    simplifyThreshold: 0,
  });
  print(points);

  angleMode(DEGREES);
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    ellipse(
      points[i].x + r * sin(angle + i * 30),
      points[i].y + sin(angle + i * 60),
      10,
      10
    );
  }
  angle += 6;
}
