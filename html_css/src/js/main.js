/* eslint-disable indent */
/* eslint-disable one-var */
/* eslint-disable semi */
import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

'use strict()';

window.addEventListener('DOMContentLoaded', () => {

  const menuShow = document.querySelectorAll('.mobile-menu-view'),
        // eslint-disable-next-line no-unused-vars
      //   menuClick = document.querySelector('.burger-icon-click'),
        homeBtn = document.querySelectorAll('.home__send-btn'),
        overexposureBtn = document.querySelectorAll('.overexposure__send-btn'),
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

  // const homeBtn = document.querySelectorAll('.home__send-btn'),
  //       overexposureBtn = document.querySelectorAll('.overexposure__send-btn');
  // console.log(homeBtn);

  homeBtn.forEach(btn => {
      // showModal('.home__send-btn', '.modal-windows__home');
      btn.addEventListener('click', () => {
          document.querySelector('.modal-windows__home').classList.toggle(modalActive);
          document.body.style.overflow = 'hidden';
      });
  });

  // showModal('.home__send-btn', '.modal-windows__home');
  closeModal('.home-close-window', '.modal-windows__home');

  overexposureBtn.forEach(btn => {
      // showModal('.home__send-btn', '.modal-windows__home');
      btn.addEventListener('click', () => {
          document.querySelector('.modal-windows__overexposure').classList.toggle(modalActive);
          document.body.style.overflow = 'hidden';
      });
  });

  // showModal('.overexposure__send-btn', '.modal-windows__overexposure');
  closeModal('.overexposure-close-window', '.modal-windows__overexposure');

  showModal('.transfer-btn-open', '.modal-windows__transfer');
  closeModal('.transfer-close-window', '.modal-windows__transfer');

  showModal('.autohelp__send-btn', '.modal-window__autohelp');
  closeModal('.autohelp-close-window', '.modal-window__autohelp');

  showModal('.about-pet__open-btn', '.modal-windows__about-pet');
  closeModal('.about-pet-close-window', '.modal-windows__about-pet');

  showModal('.all-ward-animals__open-btn', '.modal-windows__all-ward-animals');
  closeModal('.all-ward-animals__close-window', '.modal-windows__all-ward-animals');

  showModal('.all-news__open-btn', '.modal-windows__news');
  closeModal('.modal-windows__close-btn', '.modal-windows__news');
});


// all-ward-animals__close-btn
// all-ward-animals__open-btn
// modal-windows__all-ward-animals
// about-pet__open-btn
// modal-windows__about-pet
// about-pet-close-window
// autohelp__send-btn
// modal-window__autohelp
// transfer-btn-open
// modal-windows__transfer
// transfer-close-window
// closeModal('.volunteering-close-window', '.modal-windows__home');