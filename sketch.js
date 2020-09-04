var dustbin, paper;
var ground, groundSprite;
var lid, lidIMG;
var value;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	lidIMG = loadImage("lid.png");
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	lid = createSprite(665,132,10,10);
	lid.addImage("lid", lidIMG);
	lid.scale = 0.725;
	lid.visible = false;

	groundSprite = createSprite(width/2, height-20, width, 40);
	groundSprite.shapeColor = color("#7C4700");

	ground = Bodies.rectangle(width/2, 375, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	dustbin = new Bin(800,417);
	paper = new Ball(200,350,70);

	Engine.run(engine);  
}

function draw() {
	background(200);
	rectMode(CENTER);

	if(paper.body.position.x > 580 && paper.body.position.y > 200){
		value = 1;
	}
	if(value==1){
		fill("white");
		textSize(40);
		textStyle(BOLD);
		text("Success!",510,100);
		lid.visible = true;
	}
  
  drawSprites();

  paper.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:665,y:-1000});
	}
}
