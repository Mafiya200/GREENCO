'use strict';

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

let num = 0;

const animItems = document.querySelectorAll(`._anim-item`);

if (animItems.length > 0) {
    animItemsCheck();
    window.addEventListener(`scroll`, animItemsCheck);



    function animItemsCheck() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemStart = 4;
            const animItemPage = animItemRect(animItem).top;
            const windowHeight = window.innerHeight;
            const animItemHeight = animItem.offsetHeight;

            let animItemPoint = windowHeight - (animItemHeight / animItemStart);
            if (animItemHeight > windowHeight) {
                animItemPoint = windowHeight - (windowHeight / animItemStart);
            }
            if ((pageYOffset > (animItemPage - animItemPoint)) && (pageYOffset < (animItemPage + animItemHeight))) {
                animItem.classList.add(`_active`);
            }
            else {
                if (!animItem.classList.contains(`_anim-no-hide`)) {
                    animItem.classList.remove(`_active`);

                }
            }

        }


    }
    function animItemRect(item) {
        const rect = item.getBoundingClientRect();
        const scrollPageX = scrollX || window.pageXOffset || document.documentElement.scrollLeft;
        const scrollPageY = scrollY || window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollPageY, left: rect.left + scrollPageX };
    }
}
let word = "1 wor1ld 1";
let wordFinish = "";
let space = 0;

if (word.length > 0) {

    /* !(word[word.length - 1] === " ") */
    if (1) {
        dance:
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];


            if ((letter === " ")) {
                if (!(i === word.length - 1)) {
                    if (!(word[i + 1] === " ")) {

                        space = i;

                    }



                }


            }


        }
        for (let i = space; i < word.length; i++) {
            const letter = word[i];
            if (!(letter === " ")) {
                wordFinish += letter;
            }

        }



    }
    /*  else{
         for (let i = word.length - 1; i >= 0; i--) {
             const letter = word[i-1];
             if(!(letter===" ")){
                 wordFinish += letter;
             }
             else{
                 break;
             }
 
         }
         
     } */


}


window.addEventListener(`resize`, function () {
    mySliderText.params.observer = {
        enabled: true,
    };

});


let mySliderText = new Swiper(`.potted-item__swiper`, {

    /* wrapperClass: `potted-item__swiper-wrapper`, */ /// переназначение класса wrapper
    /*  slideClass: `potted-item__swiper-slide`, *//// переназначение класса slide

    observer: true,//true-вкл/false-выкл обновление свайпера при изменении элементов слайдера

    // обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,//true-вкл/false-выкл обновление свайпера при изменении родительских элементов слайдера

    // обновить свайпер
    // при изменении дочерних
    // элементов слайдера
    observeSlideChildren: true, //true-вкл/false-выкл обновление свайпера при изменении дочерних элементов слайдера
    /* 
        simulateTouch: false,
        allowTouchMove: false, */
    slidesPerView: 1,
    effect: `fade`,
    fadeEffect: {
        crossFade: true,//true-вкл/false-выкл паралельной смены прозрачности
    },

    scrollbar: {
        el: `.potted-item__swiper-scrollbar`,
        dragClass: `page__drag-scroll`,///new меняет класс стилей на нужный
        draggable: true,
    },
    spaceBetween: 10, //Пространство между слайдами отступ
    breakpoints: {
        320: {// ширина экрана от
            autoHeight: true,
        },
        /* 576: {// ширина экрана от
            autoHeight: false,
        }, */
    },
    navigation: {
        nextEl: `.potted-item__swiper-button-next`,
        prevEl: `.potted-item__swiper-button-prev`,/* CSS=.swiper-button-prev/-next::after{
            font-size:80px; color:red;} */
    },
});







let mySliderImage = new Swiper(`.swiper__images`, {
    /* wrapperClass: `potted-item__swiper-wrapper`, */ /// переназначение класса wrapper
    /*  slideClass: `potted-item__swiper-slide`, *//// переназначение класса slide

    observer: true,//true-вкл/false-выкл обновление свайпера при изменении элементов слайдера

    // обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,//true-вкл/false-выкл обновление свайпера при изменении родительских элементов слайдера

    // обновить свайпер
    // при изменении дочерних
    // элементов слайдера
    observeSlideChildren: true, //true-вкл/false-выкл обновление свайпера при изменении дочерних элементов слайдера
    simulateTouch: false,//true-вкл/false-выкл возможности перетаскивание на ПК(ХВАТЬ И ДВИГАТЬ)
    allowTouchMove: false,//true-вкл/false-выкл возможности перетаскивани для всех устройств (ХВАТЬ И ДВИГАТЬ)
    grabCursor: false,
    loop: true,
    effect: `fade`,
});

mySliderImage.controller.control = mySliderText;
mySliderText.controller.control = mySliderImage;





const lazyImages = document.querySelectorAll(`img[data-src], source[data-srcset]`);
let imagePositions = [];
const windowHeight = document.documentElement.clientHeight;
window.addEventListener(`scroll`, function () {
    if (document.querySelectorAll(`[data-src], [data-srcset]`).length > 0) {
        checkImage();

    }
});


if (lazyImages.length > 0) {
    lazyImages.forEach(item => {
        if (item.dataset.src || item.dataset.srcset) {
            imagePositions.push(`${scrollY + item.getBoundingClientRect().top}`);
            checkImage();
        }
    });
}

function checkImage() {
    let imgIndex = imagePositions.findIndex(item => {
        return pageYOffset > (item - windowHeight);
    });

    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute(`data-src`);
        }
        else if (lazyImages[imgIndex].dataset.srcset) {
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute(`data-srcset`);
        }
        delete imagePositions[imgIndex];
    }
}





///////burger

const menuBurger = document.querySelector(`.menu__burger`);
const body = document.querySelector(`body`);
const greeencoMenu = document.querySelector(`.greeenco__menu`);
const wrapper = document.querySelector(`.wrapper`);
const windowScroll = window.innerWidth - wrapper.offsetWidth;

menuBurger.addEventListener(`click`, function (e) {
    openBurger();
});
/* window.addEventListener(`resize`,closeBurger); */


function openBurger() {
    greeencoMenu.classList.toggle(`_active`);
    menuBurger.classList.toggle(`_active`);
    body.classList.toggle(`_close`);
    greeencoMenu.addEventListener(`click`, function (e) {

        if (!(e.target.closest(`.menu-greenco__list`))) {
            closeBurger();
        }
    });
    body.style.paddingRight = `${windowScroll}px`;

}
function closeBurger() {
    greeencoMenu.classList.remove(`_active`);
    menuBurger.classList.remove(`_active`);
    body.classList.remove(`_close`);

    body.style.paddingRight = `0px`;
}


const roseBigBackground = document.querySelector(`.rose-open__big`);

const rosesContent = document.querySelector(`.roses__content`);

rosesContent.addEventListener(`click`, function (e) {

    const itemRose = e.target.closest(`.roses__item`);

    if (itemRose) {
        body.style.paddingRight = `${windowScroll}px`;

        body.classList.add(`_close`);
        const addOpenRose = document.querySelector(`.rose-open`);

        /*         addOpenRose.querySelector(`.rose-open__content`).insertAdjacentHTML(`beforeend`, `${itemRose.innerHTML}`);
         */

        const bigBlockRose = document.querySelector(`.rose-open`);


        








        

    }

});



const allRoses = document.querySelectorAll(`.roses__content .roses__item`);

for (let i = 0; i < allRoses.length; i++) {
    const roseItem = allRoses[i];

    const roseItemContent = roseItem.querySelector(`.roses__body`).outerHTML;

    roseItem.id = `#rose-${i + 1}`;

    roseBigBackground.insertAdjacentHTML(`beforeend`, `<div id="rose-${i + 1}" class="rose-open">
    <div class="rose-open__body">
        <div class="rose-open__content">
            <span></span>
                ${roseItemContent}
            </div>
    </div>
    </div>`);



}







rosesContent.addEventListener(`click`, function (e) {

    if (e.target.closest(`.roses__item`)) {
        const item = e.target.closest(`.roses__item`);
        const itemId = item.id.replace(`#`, ``);

        const blockRoseOpen = document.getElementById(itemId);

        blockRoseOpen.classList.add(`_active`);
        roseBigBackground.classList.add(`_active`);
        const span = blockRoseOpen.querySelector(`span`);

        span.addEventListener('click', function () {
            closeBurger();
            roseBigBackground.classList.remove(`_active`);
            blockRoseOpen.classList.remove(`_active`);



        }, { once: true, });
        blockRoseOpen.addEventListener(`click`, function (e) {

            if (!(e.target.closest(`.rose-open__content`))) {
                closeBurger();

                roseBigBackground.classList.remove(`_active`);

                blockRoseOpen.classList.remove(`_active`);



            }
        });
    }

});



