class Drop {
    constructor(x, y,radius) {
        var options = {
            friction: 0.01,
            restitution: 0.05,
            density:1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);

    }
    update() {
        if (this.body.position.y > height||this.body.position.x > width) {
            Matter.Body.setPosition(this.body, { x: random(0,600), y:random(0,20)});
            this.body.speed = 0;
        }
    }
    display() {

        fill("lightblue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);


    }
}