'use strict';

let burgerMenu = document.querySelector('.header__burger');
let menuMobile = document.querySelector('.major__navbar');

burgerMenu.addEventListener('click', function () {
    menuMobile.classList.toggle('active');
    document.body.classList.toggle('lock');
});