// Burger menu
const brg_menu = document.querySelector('.menu__burger');

brg_menu.addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.toggle('active');
    document.querySelector('.menu__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});


// Change images and articles
const chImg = document.getElementById('info_img');
const chInf = document.getElementById('person_info');
const chName = document.getElementById('person_name');

chImg.addEventListener('click', () => {
    if (chImg.src.match('/img/Marty_McFly_1955.png')) {
        chImg.src = '/img/Doc_Emmett.png';
        chName.innerHTML = 'Dr.Emmet Brown';
        chInf.innerHTML = "He appears to possess great admiration for scientists from previous eras, naming successive pet dogs Copernicus and Einstein, and having portraits of Isaac Newton, Benjamin Franklin, Thomas Edison and Albert Einstein in his laboratory. His favorite author is Jules Verne and his family name was originally 'von Braun' prior to World War I. Emmett's family moved to Hill Valley from Germany in 1908. Although initially wealthy because of his inheritance, he spent his entire family fortune on his time travel project. When the Brown mansion was destroyed by fire in 1962 and the property sold to developers, Doc subsequently resided in the mansion's garage. Once broke, he established a privately owned business to offer 24-hour scientific services, building ingenious devices for his customers."
    } else if (chImg.src.match('/img/Doc_Emmett.png')) {
        chImg.src = '/img/Biff_Tannen.png';
        chName.innerHTML = 'Biff Tannen';
        chInf.innerHTML = "Biff was born in Hill Valley, California. He is the great-grandson of Buford 'Mad Dog' Tannen, son of Irving 'Kid' Tannen and grandfather of Griff Tannen. He bullied George McFly into doing his homework for him while he drank and hung out with his friends. Feared by most of his schoolmates, he was less brave without his gang (Match, Skinhead, and 3-D). The only person at Hill Valley High School that Biff fears is Mr. Strickland. Biff lives with his grandmother, Gertrude Tannen, at 1809 Mason Street. In 1955, Biff proudly owned a black 1946 Ford Deluxe convertible which he drove around Hill Valley. He has a particular dislike for manure, displayed when he is shoved into large quantities of it at multiple points during the films.";
    } else if (chImg.src.match('/img/Biff_Tannen.png')) {
        chImg.src = '/img/Lorraine_McFly.png';
        chName.innerHTML = 'Lorraine McFly';
        chInf.innerHTML = "In Back to the Future, Lorraine is initially portrayed in 1985 as middle-aged and unhappy. After Marty changes the timeline, she is shown to be fit and happily married to George in 1985. In Part II, Lorraine is still happily married to George in 2015 but they are constantly disappointed in Marty for giving in to peer pressures that make his life difficult. In the alternate 1985 timeline, she is widowed and married to Biff Tannen.";
    } else if (chImg.src.match('/img/Lorraine_McFly.png')) {
        chImg.src = '/img/George_Mcfly.png';
        chName.innerHTML = 'George McFly';
        chInf.innerHTML = "George is Lorraine Baines's husband and Marty, Linda and Dave's father. In the original timeline, he is Biff Tannen's employee. When the history was rewritten, he became Biff's boss instead of him. We also know that he loves science-fiction by writing his own stories and watching TV programs on it.";
    } else {
        chImg.src = '/img/Marty_McFly_1955.png';
        chName.innerHTML = 'Marty McFly';
        chInf.innerHTML = "Marty McFly is the Back to the Future protagonist who was born in Hill Valley, California to the McFlys, a family of Irish descent. Little is known about the character's life prior to the first Back to the Future film, except for the fact that he set fire to the living-room rug when he was 8 years old (in a statement of Marty's to his future parents). Despite never explicitly being explained in the film, Bob Zemeckis confirmed that Marty met his friend Dr. Emmett 'Doc' Brown when he was around 14 after hearing that Brown was a dangerous lunatic. Marty wanted to go and see what it was all about for himself. He snuck into Doc's lab and was fascinated by all his inventions. When Doc caught him, he was glad to have someone interested in his work and their friendship began.";
    }
}
)

// second film-block Swiper-Slider
new Swiper ('.film-slider', {   
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',

    },
    // Управление клавиатурой 
    keyboard: {
        //  Включить/Выключить
        enabled: true, 
        // Включить/Выключить 
        // только когла слайдер 
        // в пределах вьюпорта
        onlyInViewport: true, 
        // Включить/Выключить 
        // управление клавишаши
        // pageUp, pageDown
        pageUpDown: true,
    },

    // автовысота
    autoHeight: true,
    // кол-во слайдов для показа
    slidesPerView: 1,
    // потоковый слайдер
    // effect: 'coverflow',
    // настройки потокового слайдера
    // mousewheel: {
    //     // чувствительность колеса 
    //     sensitivity: 1, 
    //     // Класс объекта на котором
    //     // будет срабатывать прокрутка мышью
    //     eventTarget: '.film-slider',
    // }, 
    // бесконечная прокрутка
    // loop: true,
    
    // паралакс эффект
    parallax: true,
    speed: 2000,
});

// применяем opacity при disabled class для навигации
const nxtBtn = document.getElementById('nxt_btn');
const prevBtn = document.getElementById('prev_btn');

//  при смене слайда
//  костыльное решение (при движении мыши срабатывает функция)
document.addEventListener('mousemove', () => {
    if (prevBtn.classList.contains('swiper-button-disabled')) {
        prevBtn.classList.add('first-last-slide');
    } else if (nxtBtn.classList.contains('swiper-button-disabled')) {
        nxtBtn.classList.add('first-last-slide');
    } else {
        nxtBtn.classList.remove('first-last-slide');
        prevBtn.classList.remove('first-last-slide');
    }
});

// Lego block 
// наведение на изображение - свой текст
const img1 = document.querySelector('.info-media__img-1');
const img2 = document.querySelector('.info-media__img-2');
const img3 = document.querySelector('.info-media__img-3');
const txtLego = document.querySelector('.info-lego__text');

// при наведении на картинки
img1.addEventListener('mouseover', () => {
    txtLego.innerHTML = "It’s an instantly recognizable and iconic car that’s amazingly brought to life in the new LEGO® Back to the Future Time Machine set. This set is like a time machine itself. Just one look at it and you’ll travel back in time to the moment when you saw the iconic movie for the first time, met Marty, Doc, George and Biff and went on one of the greatest journeys in film history.";
});
img1.addEventListener('mouseout', () => {
    txtLego.innerHTML = "In 1985, Californian teenager Marty McFly met scientist Emmet “Doc” Brown for the first time, and one of the all-time great movie friendships was born. But equally as famous as the dynamic duo was the car that sped them off on their adventures through time.";
});

img2.addEventListener('mouseover', () => {
    txtLego.innerHTML = "Interestingly, in early drafts of the Back to the Future script the time travel device used by Marty and Doc was actually a fridge! Perhaps, if it hadn’t been re-written, we would be releasing a Time Travel Fridge set. We’ll have to go back in time to find out.";
});
img2.addEventListener('mouseout', () => {
    txtLego.innerHTML = "In 1985, Californian teenager Marty McFly met scientist Emmet “Doc” Brown for the first time, and one of the all-time great movie friendships was born. But equally as famous as the dynamic duo was the car that sped them off on their adventures through time.";
});

img3.addEventListener('mouseover', () => {
    txtLego.innerHTML = "The set also includes two new designs of minifigures Marty McFly and Doc Brown. Marty even comes with the iconic pink hoverboard featured in Back to the Future Part II.";
});
img3.addEventListener('mouseout', () => {
    txtLego.innerHTML = "In 1985, Californian teenager Marty McFly met scientist Emmet “Doc” Brown for the first time, and one of the all-time great movie friendships was born. But equally as famous as the dynamic duo was the car that sped them off on their adventures through time.";
})

// доступная ширина и высота экрана
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

// количество пикселей прокрутки страницы 
// только для чтения, а не для задания значений
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

// привязка к объекту по управлению скроллом
const movieBtn = document.getElementById('movie_btn');

movieBtn.addEventListener('click', () => {
    let movieBlock = document.querySelector('.swiper__container');
    movieBlock.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
    });
});

// movie btn in burger menu. Close burger menu after click 
movieBtn.addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.remove('active');
    document.querySelector('.menu__body').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

const legoBtn = document.getElementById('lego_btn');
const legoBlock = document.querySelector('.lego-info__container');

// lego btn in burger menu. Close burger menu after click 
legoBtn.addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.remove('active');
    document.querySelector('.menu__body').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

legoBtn.addEventListener('click', ()=> {
    legoBlock.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
    });
});

const gameBtn = document.getElementById('game_btn');
const gameBlock = document.querySelector('.game-block');

// game btn in burger menu. Close burger menu after click 
gameBtn.addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.remove('active');
    document.querySelector('.menu__body').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

gameBtn.addEventListener('click', ()=> {
    gameBlock.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
    });
});

const homeBtn = document.getElementById('home_btn');

homeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0, 
        behavior: 'smooth',
    });
});

// home btn in burger menu. Close burger menu after click 
homeBtn.addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.remove('active');
    document.querySelector('.menu__body').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
})

// Animation scroll
// header logo
const headerLogo_1 = document.querySelector('.header__logo');

// смена logo при скроле
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        // укороченная запись ? : вместе if...else...
        (scrollTop > 50) ? headerLogo_1.classList.add('logoTopButton') && headerLogo_1.classList.remove('header__logo'): headerLogo_1.classList.remove('logoTopButton');
    });
});

// push new logo to the top
// привязываем нажатие к старому лого, так как контейнер не менялся, только содержимое
headerLogo_1.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0, 
            behavior: 'smooth',
        });
    });

// header move 
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let legoPos = legoBlock.getBoundingClientRect().top;
    if (legoPos < 260) {
        img1.classList.add('animation_scroll_img1');
        img2.classList.add('animation_scroll_img2');
        img3.classList.add('animation_scroll_img3');
    } else {
        img1.classList.remove('animation_scroll_img1');
        img2.classList.remove('animation_scroll_img2');
        img3.classList.remove('animation_scroll_img3');
    }
});

// play link to new open window
const play = document.querySelector('.game-media__play');
/* contdown before start the game */
const contdown = document.querySelector('.game-media__contdown');

let countBeforeGame2 = 4;
let timerId2;
play.addEventListener('click', () => {
    play.classList.add('hidden');
    // open in another window
    timerId2 = setInterval(() => {
        if (countBeforeGame2 > 0) {
            contdown.classList.add('show');
            countBeforeGame2--;
            contdown.innerHTML = countBeforeGame2;
        } else {
            contdown.innerHTML = '';
        }
    }, 1000);
    setTimeout(() => {
        window.open('http://127.0.0.1:5500/BTTF_Game/game.html', '_blank', 'toolbar=no, location=no, resizable=no, scrollbars=no, width=1020, height=520, top=100, left=250');
        play.classList.remove('hidden');
        window.location.reload();
    }, 4500);
});

// footer hover animation 
// hover icon show caption of icon
const footerSocial = document.getElementById('footer__title-p');
const youtube = document.getElementById('youtube-btn');
const instagram = document.getElementById('inst-btn');
const facebook = document.getElementById('facebook-btn');


youtube.addEventListener('mouseover', () => {
    footerSocial.innerHTML = 'YouTube';
    footerSocial.style.color = '#eb2632';
    footerSocial.style.transition = 'all 0.3s ease 0s';
});
youtube.addEventListener('mouseout', () => {
    footerSocial.innerHTML = '';
});
instagram.addEventListener('mouseover', () => {
    footerSocial.innerHTML = 'Instagtam';
    footerSocial.style.color = '#f76b8a';
    footerSocial.style.transition = 'all 0.3s ease 0s';
});
instagram.addEventListener('mouseout', () => {
    footerSocial.innerHTML = '';
});
facebook.addEventListener('mouseover', () => {
    footerSocial.innerHTML = 'Facebook';
    footerSocial.style.color = '#5585b5';
    footerSocial.style.transition = 'all 0.3s ease 0s';
});
facebook.addEventListener('mouseout', () => {
    footerSocial.innerHTML = '';
});

// animation scroll 
const footer = document.querySelector('.footer__container');
const footerLogo = document.querySelector('.footer__logo');

window.addEventListener('scroll', () => {
    let gameBlockPos = gameBlock.getBoundingClientRect().top;
    if (gameBlockPos < 100) {
        footer.classList.add('showFooter');
        footerLogo.classList.add('rotateFooterLogo');
    } else {
        footer.classList.remove('showFooter');
        footerLogo.classList.remove('rotateFooterLogo');
    }
});