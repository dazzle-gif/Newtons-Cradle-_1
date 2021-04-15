const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var roof;
var bgColor;
var rope1, rope2, rope3, rope5;

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas( windowWidth,windowHeight );
  //creating bobs
  bob1 = new Bob(width/2, 200+height/2, 80,);
  bob2 = new Bob(width/2+90, 200+height/2, 80,);
  bob3 = new Bob(width/2+90+90, 200+height/2, 80,);
  bob4 = new Bob(width/2-90, 200+height/2, 80,);
  bob5 = new Bob(width/2-90-90, 200+height/2, 80,);

  roof = new Roof(width/2, height/2-300, 800, 20);
  rope1 = new Rope(bob5.body, roof.body, -90*2-120,0);
  rope2 = new Rope(bob4.body, roof.body, -90*2+20,0)
  rope3 = new Rope(bob1.body, roof.body, -90*2+180,0)
  rope4 = new Rope(bob2.body, roof.body, -90*2+320,0)
  rope5 = new Rope(bob3.body, roof.body, -90*2+470,0)
  bgColor = color(random(0,50), random(0,50), random(0, 50));
  //rope
}

function draw() {
  Engine.update(engine);
  background(bgColor);  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope4.display();
  rope5.display();
  rope3.display();
  roof.display();
  drawSprites();
}
function keyPressed() {
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-200,y:-100});
}
}