// class Asteroid
class Asteroid {
    constructor(imageSrc, position, dimensions, velocity, frameX) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = position;
        this.dimensions = dimensions;
        this.velocity = velocity;
        this.frameX = frameX;
        this.frameY = 0;
        this.spriteTimer = 0;
        this.spriteInterval = 70;
        this.spriteUpdate = false;
    }
    draw() {
        ctx.drawImage(this.image, this.frameX * this.dimensions.w, this.frameY * this.dimensions.h, this.dimensions.w, this.dimensions.h, this.position.x, this.position.y, this.dimensions.w, this.dimensions.h);
    }
    update() {
        if (this.position.x < 0) {
            this.position.x = getRandom(250, 300);
            this.position.y = getRandom(-50, 0);
            this.velocity.x = getRandom(1, 3);
            this.velocity.y = getRandom(1, 3);
            this.frameX = 0;
        }
        // sprite timing
        if (this.spriteTimer > this.spriteInterval) {
            this.spriteUpdate = true;
            this.spriteTimer = 0;
        } else {
            this.spriteUpdate = false;
            this.spriteTimer += deltaTime;
        }
        // shift pressed
        if (pressed['ShiftLeft'] || pressed['ShiftRight']) {
            this.velocity.x++;
        }
        this.position.x -= this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
    }
}