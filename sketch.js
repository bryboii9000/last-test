
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobOb1,bobOb2,bobOb3,bobOb4,bobOb5;
var roof;
var rope,rope1,rope2,rope3,rope4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

  /// var Bobdiameter  = this.body.radius*2
   

	roof = new Flyoor(345,170,470,35);
  bobOb1 =  new Bob(530,470);
  bobOb2 =  new Bob(446,470);
  bobOb3 =  new Bob(358,470);
  bobOb4 =  new Bob(274,470);
  bobOb5 =  new Bob(150,470);
  rope = new Sline(bobOb1.body,roof.body,85*2,0);
  rope1 = new Sline(bobOb2.body,roof.body,45*2,0);
  rope2 = new Sline(bobOb3.body,roof.body,5*2,0);
  rope3 = new Sline(bobOb4.body,roof.body,-37*2,0);
  rope4 = new Sline(bobOb5.body,roof.body,-78*2,0);
}


function draw() {
  rectMode(CENTER);
  background(176,196,222);


  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  roof.display();
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();
 

  
  drawSprites();
 
}



