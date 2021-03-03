class Bob {
  constructor(x, y,) {
    var options = {
      isStatic:false,
      restitution : 0.3,
      density : 1.2,
      friction : 0.5
    }
    this.body = Bodies.circle(x,y,30,options);
   // this.radius = 21; 
    World.add(world, this.body);

    //var Bobdiameter  = this.body.radius*2
   
   // this.image = loadImage("sprites/base.png");
  };
  
  display(){
    var  paperpos = this.body.position;

    push();
    translate(paperpos.x,paperpos.y);
    ellipseMode(RADIUS);
    
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(0,0,40);
    pop();
  };
};