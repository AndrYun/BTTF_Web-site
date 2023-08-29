// Shoot class
class Shoot {
    constructor(position, dimensions, velocity, imageSrc) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = position;
        this.dimensions = dimensions;
        this.velocity = velocity;
    }

    // attacks
    attack() {
        ctx.beginPath();
        ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.w, this.dimensions.h);
        ctx.closePath();
    }
    update() {
        this.velocity.x += 2;
        this.position.x += this.velocity.x;
        this.attack();
    }
}