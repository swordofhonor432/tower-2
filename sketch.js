const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var ground;
var sling;
 var player;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground();
  b1 = new Block(330,235,30,40); 
  b2 = new Block(360,235,30,40);
  b3 = new Block(390,235,30,40);
  b4 = new Block(420,235,30,40);
  b5 = new Block(450,235,30,40);
  b6 = new Block(360,195,30,40);
  b7 = new Block(390,195,30,40);
  b8 = new Block(420,195,30,40);
  b9 = new Block(390,155,30,40);
  var player = new Player(200,200,50,50)

}
sling = new Slingshot(player.body,{x:200,y:200});


function draw() {
  background(255,255,255);  
  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  slingShot.fly();
  
  }