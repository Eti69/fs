const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var f,fImage
var s,sImage,sBody
var sky,skyImage
var world;
var engine; 


function preload()
{
 fImage=loadAnimation("images/fairy1.png","images/fairy2.png");
 sImage=loadImage("images/star.png");
 skyImage=loadImage("images/starnight.png");

}

function setup() {
	createCanvas(800, 750);

  //create engine 
  engine = Engine.create()

  //create world 
  world = engine.world; 
  
  //adding background 
  sky=createSprite(400,375,2019,2103);
  sky.addImage("i",skyImage);

  //adding fairy
  f=createSprite(100,600,40,40);
  f.addAnimation("e",fImage);
  f.scale=0.3;
  
  //creating star sprite 
  s=createSprite(750,100,20,20);
  s.addImage("a",sImage);
  s.scale=0.3;

  //creating star body 
  var star_options = {
    isStatic=true, 
    restitution: 0.5
  }
    
  sBody=Bodies.circle(star.x,star.y,5,star_options);
  World.add(world,sBody);
  
  
}


function draw() {
  Engine.update(engine);
  if (keyDown("a")){
  f.position.x=f.position.x-1;
  }

  if (keyDown("d")){
  f.position.x=f.position.x+1;
  }
  if (keyDown("s")){
  Matter.Body.setStatic(sBody,false)
  }
  background("black");
  drawSprites();

}
