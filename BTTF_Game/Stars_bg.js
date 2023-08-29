// class Stars backgroung
class Stars {
    constructor(position, dimensions, velocity) {
        this.position = position;
        this.dimensions = dimensions;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.arc(this.position.x, this.position.y, this.dimensions.r, 0, 2*Math.PI);
        ctx.stroke();
    }
    update() {
        this.position.x -= this.velocity.x;
        if (this.position.x < 0) {
            this.position.x = canvas.width;
            this.position.y = getRandom(0, canvas.height);
        }
        this.draw();
        if (pressed['ShiftLeft'] || pressed['ShiftRight']) {
            this.velocity.x = 4;
        } else {
            this.velocity.x = 1;
        }
    }
}