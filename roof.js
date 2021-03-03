class Flyoor{
    constructor(x,y,width,height){

       var options = {
        isStatic :true,
        friction : 0.5,
        density: 1.3
       }
        this.width = width;
        this.height = height;
       

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill(105,105,105);
        rectMode(CENTER);
            
        rect(pos.x, pos.y, this.width, this.height);
    }
}