class Paper {
    constructor(x,y,r) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(this.x, this.body, this.r/2, options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display() {
        var paperpos = this.body.postion;
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        fill("white");
        ellipse(0,0, this.r);
        pop();
    }
}