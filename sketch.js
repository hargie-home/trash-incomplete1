
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(200,200,100);

	//Engine.run(engine);
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  paperball.display();
}



