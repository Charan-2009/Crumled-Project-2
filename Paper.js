class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER);
        image(this.image,0,0,33,33);
        pop();
    }
}