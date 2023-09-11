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

let num= 0;

const animItems = document.querySelectorAll(`._anim-item`);

if (animItems.length > 0) {
    animItemsCheck();
    window.addEventListener(`scroll`,animItemsCheck);



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

