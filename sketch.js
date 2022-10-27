let img = [];

function preload() {
  for (let i = 0; i <= 8; i++) {
    img[i] = loadImage("assets/" + i + ".png");
  }
}

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 8, 0, 1);
  slider.position(10,10);
  slider.style('width','180px');
}

function draw() {
  background(125);

  image(img[ slider.value() ], 10, 40, 128, 128);
}
