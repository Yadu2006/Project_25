
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin1, bin2, bin3, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Objects of bin

	bin2 = new Bin(530, 600, 150, 150);
	bin3 = new Bin2(570, 480, 20, 70); 
	bin4 = new Bin2(550, 450, 290, 20)
	 
	//ground
	ground1 = new Ground(600, height, 1200, 20);
	
	//paper
	paper = new Paper(50, 640, 30, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  //Displaying
  ground1.display();
  paper.display();
  bin2.display();
  
  //Calling the keypressed function
  keypressed();	

  drawSprites();
 
}

function keypressed()
{

	//Condition when the up arrow is pressed
	if(keyCode === UP_ARROW)
	{

		Matter.Body.applyForce(paper.body, paper.body.position,{x:2, y:-7.60});

	}

}


