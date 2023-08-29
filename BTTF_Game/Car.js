// class Car
class Delorian {
    constructor(position, dimensions, velocity, rotation, imageSrc, health, frameX) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = position;
        this.dimensions = dimensions;
        this.velocity = velocity;
        this.rotation = rotation;
        this.health = health;
        this.frameX = frameX;
        this.frameY = 0;
        this.spriteTimer = 0;
        this.spriteInterval = 70;
        this.spriteUpdate = false;
    }
    // draw car 
    draw() {
        ctx.save();
        ctx.translate(this.position.x + this.dimensions.w/2, this.position.y + this.dimensions.h/2);
        ctx.rotate(this.rotation);
        ctx.translate(-this.position.x - this.dimensions.w/2, -this.position.y - this.dimensions.h/2);
        ctx.drawImage(this.image, this.frameX * this.dimensions.w, this.frameY * this.dimensions.h, this.dimensions.w, this.dimensions.h, this.position.x, this.position.y, this.dimensions.w, this.dimensions.h);
        ctx.restore();
    }
    // update drawing of car 
    update() {
        this.draw();
        // sprite timing
        if (this.spriteTimer > this.spriteInterval) {
            this.spriteUpdate = true;
            this.spriteTimer = 0;
        } else {
            this.spriteUpdate = false;
            this.spriteTimer += deltaTime;
        }
    }
}