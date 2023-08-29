// class blusterway behind the car
class Blusterway {
    constructor(imageSrc, position, scale, framesMax, currentFrame, framesEllapsed, framesHold) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = position;
        this.width = 20;
        this.height = 50;
        this.scale = scale;
        this.framesMax = framesMax;
        this.currentFrame = currentFrame;
        this.framesEllapsed = framesEllapsed;
        this.framesHold = framesHold;
    }
    draw() {
        ctx.drawImage(
            this.image, 
            this.currentFrame * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x, 
            this.position.y, 
            (this.image.width / this.framesMax) * this.scale, 
            this.image.height * this.scale,
            );
    }
    animateFrames() {
        this.framesEllapsed++;
        if (this.framesEllapsed % this.framesHold == 0) {
            (this.currentFrame < this.framesMax - 1) ? this.currentFrame++ : this.currentFrame = 0;
        }
    }
    update() {
        this.draw();
        this.animateFrames();
    }
}