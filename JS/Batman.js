class Batman{
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        //this.image = addAnimation("images/Walkingframe/walking_1.png,images/Walkingframe/walking_2.png,images/Walkingframe/walking_3.png,images/Walkingframe/walking_4.png,images/Walkingframe/walking_5.png,images/Walkingframe/walking_6.png,images/Walkingframe/walking_7.png,images/Walkingframe/walking_8.png");
        this.image = loadImage("images/Walkingframe/walking_5.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        this.visiblity = 0;
        pop();
    }
}