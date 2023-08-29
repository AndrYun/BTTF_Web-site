const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// random function 
function getRandom(min, max) {
    return Math.random()*(max - min) + min;
};

// prev game animation 
class PrevGame {
    constructor(position, dimensions, velocity) {
        this.position = position;
        this.dimensions = dimensions;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = 'yellow';
        ctx.arc(this.position.x, this.position.y, this.dimensions.r, 0, 2*Math.PI);
        ctx.stroke();
    }
    update() {
        this.draw();
        this.position.x -= this.velocity.x;
        if (this.position.x < 0) {
            this.position.x = getRandom(300, 350);
            this.position.y = getRandom(0, canvas.height);
            this.velocity.x = getRandom(1, 3);
        }
    }
}

const starArr = [];
const prevgame = new PrevGame(
    position = {
        x: getRandom(250, 300),
        y: getRandom(0, canvas.height),
    },
    dimensions = {
        r: getRandom(0.2, 0.5),
    },
    velocity = {
        x: getRandom(1, 3),
        y: getRandom(1, 3),
    }
)
for (i = 0; i < 150; i++) {
    starArr.push(new PrevGame(
        position = {
            x: getRandom(0, canvas.width),
            y: getRandom(0, canvas.height),
        },
        dimensions = {
            r: getRandom(0.2, 0.3),
        },
        velocity = {
            x: getRandom(1, 3),
            y: getRandom(1, 3),
        }
    ))
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    prevgame.update();
    // multipy stars
    for (i = 0; i < starArr.length; i++) {
        starArr[i].update();
    }
    // falling star
    for (i = 1; i < starArr.length; i+=50) {
        starArr[i].position.y += prevgame.velocity.y;
        starArr[i].update();
    }
}
animate();