// class Pepsi can
class Pepsi {
    constructor(imageSrc, position, dimensions, velocity, frameX, angle) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = position;
        this.dimensions = dimensions;
        this.velocity = velocity;
        this.markedForDeletion = false;
        this.frameX = frameX;
        this.frameY = 0;
        this.spriteTimer = 0;
        this.spriteInterval = 70;
        this.spriteUpdate = false;
        this.angle = angle;
    }
    draw() {
        ctx.save()
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.angle * Math.PI/360);
        ctx.drawImage(this.image, this.frameX * this.dimensions.w, this.frameY * this.dimensions.h, this.dimensions.w, this.dimensions.h, 0 - this.dimensions.w, 0 - this.dimensions.h, this.dimensions.w, this.dimensions.h);
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height) - full options
        ctx.restore();
    }

    update() {
        if (this.position.x < 0) {
            this.position.x = getRandom(350, 400);
            this.position.y = getRandom(300, 350);
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
            this.velocity.y++;
            this.velocity.x++;
        }
        this.position.x -= this.velocity.x;
        this.position.y -= this.velocity.y;
        this.angle -= 5;
        this.draw();
    }
}