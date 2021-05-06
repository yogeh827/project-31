const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var division1;







function setup() {
  var canvas =  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(240,760,800,15);
    division1 = new Division(240,760,800,15);
}
function draw() {
  background(0,0,0);  
  drawSprites();
}