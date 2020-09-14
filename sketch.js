var ground ;



function setup() {
  var canvas = createCanvas(480,800);
  ground = new Ground(200, 760, 400, 20);
}

function draw() {
  background(255,255,255);  

  ground.display();
  drawSprites();
}