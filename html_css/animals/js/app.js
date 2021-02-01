/* eslint-disable indent */
/* eslint-disable one-var */
/* eslint-disable semi */
'use strict()';

const menuShow = document.querySelectorAll('.mobile-menu-view'),
      // eslint-disable-next-line no-unused-vars
      menuClick = document.querySelector('.burger-icon-click'),
      modalActive = 'modal-window-active'; // класс с display: block

// *--открытие мобильного меню--//

document.querySelector('.burger-icon-click').addEventListener('click', () => {
    menuShow.forEach(e => {
        e.classList.toggle('mobile-menu-show');
    });
    document.querySelector('.burger-icon-click').classList.toggle('burger-icon-click--active');
    document.querySelector('.burger-icon').classList.toggle('burger-icon--bg');
    document.querySelector('.mobile-social-header-links').classList.toggle('mobile-social-header-links--hide');
    if (document.body.style.overflow != 'hidden') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    if (document.querySelector('.menu').style.position != 'fixed') {
        document.querySelector('.menu').style.position = 'fixed'
    } else {
        document.querySelector('.menu').style.position = '';
    }
});

// document.querySelector('.burger-icon-click-close').addEventListener('click', () => {
//     menuShow.forEach(e => {
//         e.classList.toggle('mobile-menu-show');

//     });
//     document.querySelector('.nav-mobile-close-btn').classList.toggle('nav-mobile-close-btn-show');
// });

// *-----------------------окно волонтерство */
// document.querySelector('.volunteering-open').addEventListener('click', () => {
//     document.querySelector('.modal-windows__volunteering').classList.toggle('modal-window-active');
//     document.body.style.overflow = 'hidden';
// });

// document.querySelector('.volunteering-close-window').addEventListener('click', () => {
//     document.querySelector('.modal-windows__volunteering').classList.toggle('modal-window-active');
//     document.body.style.overflow = '';
// });

function showModal (classClick, classWindow) {
    document.querySelector(classClick).addEventListener('click', () => {
        document.querySelector(classWindow).classList.toggle(modalActive);
        document.body.style.overflow = 'hidden';
    });
}

function closeModal (classClick, classWindow) {
    document.querySelector(classClick).addEventListener('click', () => {
        document.querySelector(classWindow).classList.toggle(modalActive);
        document.body.style.overflow = '';
    });
}

showModal('.volunteering-open', '.modal-windows__volunteering');
closeModal('.volunteering-close-window', '.modal-windows__volunteering');

showModal('.home__send-btn', '.modal-windows__home');
closeModal('.home-close-window', '.modal-windows__home');

showModal('.overexposure__send-btn', '.modal-windows__overexposure');
closeModal('.overexposure-close-window', '.modal-windows__overexposure');

showModal('.transfer-btn-open', '.modal-windows__transfer');
closeModal('.transfer-close-window', '.modal-windows__transfer');


// transfer-btn-open
// modal-windows__transfer
// transfer-close-window
// closeModal('.volunteering-close-window', '.modal-windows__home');