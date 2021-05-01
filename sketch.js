const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;
var gameState = "start";
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);



  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }

  //check = new Particle(780,760,10,10);

}


function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  text("500", 20, 700);
  text("500", 100, 700);
  text("500", 180, 700);
  text("500", 260, 700);
  text("500", 340, 700);
  text("500", 420, 700);
  text("500", 500, 700);
  text("500", 580, 700);
  text("500", 660, 700);
  text("500", 750, 700);

  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {
 
    plinkos[i].display();

  }
  /*if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
    score++;
  }*/

  /*for (var j = 0; j < particles.length; j++) {

    particle[j].display();
  }*/
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 780) {
        score += 500;
        particle = null;
      }
    }
  }

  if(turn >= 5){
    gameState = "end";
    push();
    textSize(50);
    fill("blue");
    text("Game Over", 400, 400);
    pop()
  }

  //check.display();
}

function mousePressed() {
  if (gameState !== "end") {
    //score++;
    //particles.push(new Particle(mouseX, 10, 10));
    particle = new Particle(mouseX, 10, 10);
    turn += 1;

  }
}