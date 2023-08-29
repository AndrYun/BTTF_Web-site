const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

class Popup extends PrevGame {
    constructor(position, dimensions, velocity) {
        super(position, dimensions, velocity)
    }
    draw() {
        ctx2.beginPath();
        ctx2.strokeStyle = 'yellow';
        ctx2.arc(this.position.x, this.position.y, this.dimensions.r, 0, 2*Math.PI);
        ctx2.stroke();
    }
    update() {
        this.draw();
        this.position.x -= this.velocity.x;
        if (this.position.x < 0) {
            this.position.x = getRandom(300, 350);
            this.position.y = getRandom(0, canvas2.height);
            this.velocity.x = getRandom(1, 3);
        }
    }
}

const starArr2 = [];
const popupBg = new Popup(
    position = {
        x: getRandom(250, 300),
        y: getRandom(0, canvas2.height),
    },
    dimensions = {
        r: getRandom(0.2, 0.5),
    },
    velocity = {
        x: getRandom(1, 3),
        y: getRandom(1, 3),
    }
);
for (i = 0; i < 150; i++) {
    starArr2.push(new Popup(
        position = {
            x: getRandom(0, canvas2.width),
            y: getRandom(0, canvas2.height),
        },
        dimensions = {
            r: getRandom(0.2, 0.5),
        },
        velocity = {
            x: getRandom(1, 3),
            y: getRandom(1, 3),
        }
    ));
};

function popupBgAnimate() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    requestAnimationFrame(popupBgAnimate);
    // multipy stars
    for (i = 0; i < starArr2.length; i++) {
        starArr2[i].update();
    };
    // falling stars
    for (i = 0; i < starArr2.length; i+=50) {
        starArr2[i].update();
        starArr2[i].position.y += popupBg.velocity.y;
    }
}
popupBgAnimate();

// popup show
const startBtn = document.getElementById('start_btn');
const popup = document.querySelector('.popup');
const popupTxt = document.querySelector('.popup__content-text');
const popupTxtAnimation = document.querySelector('.popup__content-text-gone');
const closePopup = document.querySelector('.popup__close');
const closePopup2 = document.querySelector('.popup__close span');
// play link to new open window from popup 
const popupPlay = document.querySelector('.popup__content-play');


startBtn.addEventListener('click', () => {
    popup.classList.add('startGame');
    popupTxtAnimation.style.animation = 'popupAnimationTxt 4s steps(25) forwards';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        closePopup.style.transform = 'rotate(-45deg) translateX(0px)';
        closePopup2.style.transform = 'rotate(90deg) translateX(0px)';
        popupPlay.style.transform = 'translateY(0px)';
    }, 200)
})

document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        popup.classList.remove('startGame');
        popupTxtAnimation.style.animation = '';
        closePopup.style.transform = 'rotate(-45deg) translateX(70px)';
        closePopup2.style.transform = 'rotate(90deg) translateX(-70px)';
        popupPlay.style.transform = 'translateY(-1000px)';
        document.body.style.overflowY = 'scroll';
    } 
})

// close icon popup
closePopup.addEventListener('click', () => {
    popup.classList.remove('startGame');
    popupTxtAnimation.style.animation = '';
    closePopup.style.transform = 'rotate(-45deg) translateX(70px)';
    closePopup2.style.transform = 'rotate(90deg) translateX(-70px)';
    popupPlay.style.transform = 'translateY(-1000px)';
    document.body.style.overflowY = 'scroll';
})


/* contdown before start the game in popup*/
const popupContdown = document.querySelector('.popup__content-contdown');

let countBeforeGame = 4;
let timerId;
popupPlay.addEventListener('click', () => {
    popupPlay.classList.add('popupPlayHidden');
    // open in another window
    timerId = setInterval(() => {
        if (countBeforeGame > 0) {
            popupContdown.classList.add('showPopupContdown');
            countBeforeGame--;
            popupContdown.innerHTML = countBeforeGame;
        } else {
            popupContdown.innerHTML = '';
        }
    }, 1000);
    setTimeout(() => {
        window.open('http://127.0.0.1:5500/BTTF_Game/game.html', '_blank', 'toolbar=no, location=no, resizable=no, scrollbars=no, width=1020, height=520, top=100, left=250');
        popupPlay.classList.remove('popupPlayHidden');
        window.location.reload();
    }, 4500);
});

// -------------------------popup for movie block-------------------
const popupMovie = document.querySelectorAll('.film-slider__popup-container img');
const showPopup = document.querySelector('.film-slider__popup');
const slideImg = document.querySelectorAll('.swiper-slide img');
const popupMovieZoomImg = document.querySelector('.film-slider__popup-container img');
const popupMovieClose = document.querySelector('.film-slider__popup-close');
const popupMovieClose1 = document.querySelector('.film-slider__popup-close span');


slideImg.forEach(img => {
    img.onclick = () => {
        showPopup.classList.add('showPopupMovie');
        popupMovieZoomImg.src = img.getAttribute('src');
        popupMovieClose.style.transform = 'rotate(45deg) translateX(0px)';
        popupMovieClose1.style.transform = 'rotate(-90deg) translateX(0px)';
        document.body.style.overflowY = 'hidden';
    };
});

// close movie popup
document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        showPopup.classList.remove('showPopupMovie');
        popupMovieClose.style.transform = 'rotate(45deg) translateX(170px)';
        popupMovieClose1.style.transform = 'rotate(-90deg) translateX(-170px)';
        document.body.style.overflowY = 'scroll';
    };
});
// due to close icon
popupMovieClose.addEventListener('click', () => {
    showPopup.classList.remove('showPopupMovie');
    popupMovieClose.style.transform = 'rotate(45deg) translateX(170px)';
    popupMovieClose1.style.transform = 'rotate(-90deg) translateX(-170px)';
    document.body.style.overflowY = 'scroll';
});