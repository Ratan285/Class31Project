class Drop{
    constructor(x,y){
        var options = {
            friction: 0.05
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        
        World.add(world,this.body);

    }
    update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,600)})
        }
    }
    display(){
        push();
        fill("lightblue")
        ellipseMode(CENTER)
        ellipse(this.body.postion.x,this.body.position.y,this.r);
        pop();

    }
}