'use strict()';

const menuShow = document.querySelectorAll('.mobile-menu-view'),
      menuClick = document.querySelector('.burger-icon-click');

console.log(menuShow);

document.querySelector('.burger-icon-click').addEventListener('click', () => {
    menuShow.forEach(e => {
        e.classList.toggle('mobile-menu-show');

    });
    document.querySelector('.nav-mobile-close-btn').classList.toggle('nav-mobile-close-btn-show');
});

document.querySelector('.burger-icon-click-close').addEventListener('click', () => {
    menuShow.forEach(e => {
        e.classList.toggle('mobile-menu-show');

    });
    document.querySelector('.nav-mobile-close-btn').classList.toggle('nav-mobile-close-btn-show');
});

/*--окно волонтерство */
// document.querySelector('.volunteering-open').addEventListener('click', () => {
//     document.querySelector('.modal-windows__volunteering').classList.toggle('modal-window-active');
//     document.body.style.overflow = 'hidden';
// });

document.querySelector('.volunteering-close-window').addEventListener('click', () => {
    document.querySelector('.modal-windows__volunteering').classList.toggle('modal-window-active');
    document.body.style.overflow = '';
});

function showModal (classClick, classWindow, classToggle) {
    document.querySelector(classClick).addEventListener('click', () => {
        document.querySelector(classWindow).classList.toggle(classToggle);
        document.body.style.overflow = 'hidden';
    });
}

showModal('.volunteering-open', '.modal-windows__volunteering', 'modal-window-active');