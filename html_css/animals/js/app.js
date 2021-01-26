const menuShow = document.querySelectorAll('.mobile-menu-view'),
      menuClick = document.querySelector('.burger-icon-click');

console.log(menuShow);

document.querySelector('.burger-icon-click').addEventListener('click', () => {
    menuShow.forEach(e => {
        e.classList.toggle('mobile-menu-show');

    });
});
