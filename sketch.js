
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
var base1,base2,base3,base4,base5;

function preload(){
	
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ball1 = new Ball(125,255);
  ball2 = new Ball(175,225);
  ball3 = new Ball(225,230);
  ball4 = new Ball(275,225);
  ball5 = new Ball(325,230);

  base1 = new Base(150,220);
  base2 = new Base(250,320);
  base3 = new Base(350,520);
  base4 = new Base(450,620);
  base5 = new Base(550,670);
  
  string1 = new String(base1,ball1);
  string2 = new String(base2,ball2);
  string3 = new String(base3,ball3);
  string4 = new String(base4,ball4);
  string5 = new String(base5,ball5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}



