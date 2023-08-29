// connect canvas 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// draw car 
const car = new Delorian(
    position = {
        x: 100,
        y: 70, 
    },
    dimensions = {
        w: 50, 
        h: 18,
    }, 
    velocity = {
        x: 2,
        y: 2,
        gravity: 0.5,
    },
    rotation = 0,
    imageSrc = '/BTTF_Game/img/Delorian_small-Sheet.png',
    health = 100,
    frameX = 0,
);


// condition of controlling the Car 
const pressed = {};
document.addEventListener('keydown', (e) => {
    pressed[e.code] = true;
});
document.addEventListener('keyup', (e) => {
    pressed[e.code] = false;
});

// shooting 
// massive of shots to create new shots
const shots = [];

const shot = new Shoot(
    position = {
        x: (car.position.x + car.dimensions.w) + 3,
        y: (car.position.y + car.dimensions.h) - 8,
    },
    dimensions = {
        w: 8,
        h: 4,
    },
    velocity = {
        x: 0,
        y: 0,
    },
    imageSrc = '/BTTF_Game/img/Blast_shot.png',
);

// blusterway 
const blusterway = new Blusterway(
    imageSrc = '/BTTF_Game/img/blusterway-Sheet.png', 
    position = {
        x: `${car.position.x - 32}`,
        y: `${car.position.y + 8}`,
    }, 
    scale = .4, 
    framesMax = 3, 
    currentFrame = 0, 
    framesEllapsed = 0, 
    framesHold = 5,
);

// blackhole 
const blackhole = new BlackHole(
    imageSrc = '/BTTF_Game/img/BlackHole-Sheet.png', 
    position = {
        x: getRandom(0, canvas.width),
        y: getRandom(0, canvas.height),
    }, 
    velocity = {
        x: getRandom(1, 2),
        y: getRandom(1, 2),
    },
    dimensions = {
        w: 20,
        h: 15, 
    },
    scale = 1, 
    framesMax = 8, 
    currentFrame = 0, 
    framesEllapsed = 0, 
    framesHold = 10,
);

// bonus heal 
const bonus = new Bonus(
    imageSrc = '/BTTF_Game/img/Fuel-Sheet.png', 
    position = {
        x: getRandom(250, 300),
        y: getRandom(0, canvas.height),
    }, 
    velocity = {
        x: getRandom(2, 3),
        y: getRandom(2, 3),
    },
    dimensions = {
        w: 11,
        h: 20, 
    },
    scale = 1, 
    framesMax = 5, 
    currentFrame = 0, 
    framesEllapsed = 0, 
    framesHold = 10,
);

// Pepsi can 
const pepsiCan = new Pepsi(
    imageSrc = '/BTTF_Game/img/SpritePepsi_explose-Sheet.png',
    position = {
        x: getRandom(350, 400),
        y: getRandom(250, 300),
    },
    dimensions =  {
        w: 30,
        h: 26,
    },
    velocity =  {
        x: getRandom(1, 2),
        y: getRandom(1, 2),
    },
    frameX = 0,
    angle = getRandom(0, 360),
)

// Asteroid
const asteroid = new Asteroid(
    imageSrc = '/BTTF_Game/img/Asteroid-Sheet.png',
    position = {
        x: getRandom(250, 300),
        y: getRandom(-50, 0),
    },
    dimensions =  {
        w: 40,
        h: 40,
    },
    velocity =  {
        x: getRandom(1, 2),
        y: getRandom(1, 2),
    },
    frameX = 0,
)


// star
const star = new Stars(
    position = {
        x: 20,
        y: 50,
    },
    dimensions = {
        r: .5,
    },
    velocity = {
        x: 1,
        y: 4,
    }
)
const arrStars = [];
for (i = 0; i < 100; i++) {
    arrStars.push(new Stars(
        position = {
            x: getRandom(0, canvas.width),
            y: getRandom(0, canvas.height),
        },
        dimensions = {
            r: getRandom(0.2, 0.8),
        },
        velocity = {
            x: 1,
            y: 4,
        },
    ))
}

// timing
let lastTime = 0;

// lives
const lives = document.querySelector('.score__car-lives');

// Game conditions
function movement(timeStamp) {
    deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(movement); 
    // background moving stars
    star.update(); 
    // multiple stars
    for (i = 0; i < arrStars.length; i++) {
        arrStars[i].update();
    }
    // falling stars
    for (i = 1; i < arrStars.length; i+=50) {
        arrStars[i].position.y += arrStars[i].velocity.y;
        arrStars[i].update();
    }
    // blackhole
    blackhole.update();
    // car
    car.update();
    shots.forEach((shot, i) => { // should find out forEach method detaily
        if (shot.position.x + shot.dimensions.w >= canvas.width) {
            shots.splice(i, 1); // should find out splice options
        } else {
            shot.update();
        }
        if (rectCollision(shot, pepsiCan) && pepsiCan.spriteUpdate) {
            shots.splice(i, 1); // ?
            pepsiCan.frameX++;
        }
        if (rectCollision(shot, asteroid) && asteroid.spriteUpdate) {
            shots.splice(i, 1); // ?
            asteroid.frameX++;
        }
        if (rectCollision(shot, blackhole)) {
            shot.position.x = getRandom(0, canvas.width);
            shot.position.y = getRandom(0, canvas.height);
        }
    })
    // flying Pepsi can
    pepsiCan.update(deltaTime);
    // flying sneaker Nike
    // sneaker.update(deltaTime);
    // flying asteroid
    asteroid.update();
    // controll the car
    if (pressed['ArrowUp'] && (car.position.y >= 0)) {
        car.position.y -= car.velocity.y;
    }
    if (pressed['ArrowDown'] && (car.position.y + car.dimensions.h <= canvas.height)) {
        car.position.y += car.velocity.y;
    }
    if (pressed['ArrowLeft'] && (car.position.x >= 0)) {
        car.position.x -= car.velocity.x;
        car.rotation = -0.03;
    } else if (pressed['ArrowRight'] && (car.position.x + car.dimensions.w <= canvas.width)) {
        car.position.x += car.velocity.x;
        car.rotation = 0.03;
    } else {
        car.rotation = 0;
    }
    // blusterway
    if (pressed['ShiftLeft'] || pressed['ShiftRight']) {
        blusterway.position = {
            x: car.position.x - 32,
            y: car.position.y + 8, 
        };
        blusterway.update();
    }
    // attacks
    if (pressed['Space']) {
        shots.push(new Shoot(
            position = {
                x: (car.position.x + car.dimensions.w) + 3,
                y: (car.position.y + car.dimensions.h) - 8,
            },
            dimensions = {
                w: 8,
                h: 4,
            },
            velocity = {
                x: 0,
                y: 0,
            },
            imageSrc = '/BTTF_Game/img/Blast_shot.png',
        ))
    }

    // damage condition and lives
    const collisions = () => {
        if (rectCollision(car, pepsiCan) && timer > 0 || rectCollision(car, asteroid) && timer > 0) {
            car.health -= 1;
            lives.style.width = car.health + '%'; 
            if (car.health < 30) {
                lives.style.background = 'radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%)';
            } else {
                lives.style.background = 'linear-gradient(109.6deg, rgb(17, 151, 147) 11.2%, rgb(154, 214, 212) 55.4%, rgb(255, 233, 171) 100.2%)';
            }
        }
        // between trash
        if (rectCollision(pepsiCan, asteroid) && timer > 0 && car.health > 0) {
            pepsiCan.velocity.y *= (-1);
            asteroid.velocity.y *= (-1);
        }
        // collision with blackhole
        if (rectCollision(car, blackhole)) {
            car.position.x = getRandom(0, canvas.width);
            car.position.y = getRandom(0, canvas.height);
        }
        // heal bonus
        if (timer < 100) {
            bonus.update();
            if (rectCollision(car, bonus) && car.health < 100 && car.health >= 1 && timer > 0) {
                car.health+=1;
                lives.style.width = car.health + '%';
            }
        }
    }
    collisions();
}

// info page
const infoboard = document.querySelector('.info');
const info = document.querySelector('.info__board');

// contdown
const scoreTime = document.querySelector('.score__time-contdown');
const startend = document.querySelector('.gameover');
const restartLink = document.querySelector('.gameover__restart');
const endWindow = document.querySelector('.gameover__window');
// set Contdonw timer
let timer = 150;
let timerId;
function time() {
    if (timer >= 0) {
        timerId = setTimeout(time, 1000);
        timer--;
        scoreTime.innerHTML = timer;
        if (pressed['ShiftLeft'] || pressed['ShiftRight']) {
            timer--;
        }
    }
    // set determination of Game over and Won
    if (car.health <= 0) {
        clearTimeout(timerId);
        startend.style.display = 'flex';
        endWindow.innerHTML = 'Game Over';
        infoboard.style.opacity = 1;
        car.frameX = 2;
        setTimeout(() => {
            car.frameX = 0;
        }, 2000);
        restartLink.addEventListener('click', () => {
            window.location.reload();
        })
    } else if (timer == 0) {
        clearTimeout(timerId);
        startend.style.display = 'flex';
        endWindow.innerHTML = 'You win!'; 
        infoboard.style.opacity = 1;
        restartLink.addEventListener('click', () => {
            window.location.reload();
        })
    }
    if (timer < 100) {
        pepsiCan.velocity.x = getRandom(2, 3);
        pepsiCan.velocity.y = getRandom(2, 3);
        asteroid.velocity.x = getRandom(2, 3);
        asteroid.velocity.y = getRandom(2, 3);
    }
    if (timer < 50) {
        pepsiCan.velocity.x = getRandom(3, 4);
        pepsiCan.velocity.y = getRandom(3, 4);
        asteroid.velocity.x = getRandom(3, 4);
        asteroid.velocity.y = getRandom(3, 4);
    }
}

// start game
document.addEventListener('DOMContentLoaded', () => {
    movement(0);
    time();
})