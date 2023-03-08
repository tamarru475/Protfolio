const carousel = document.querySelector('.projects__container');
const figure = carousel.querySelector('.projects__figure');
const btnBox = carousel.querySelector('.projects__btns-box');
const card = carousel.querySelector('.card');
const numImg = 5;
const theta = 2 * Math.PI / numImg;

const prevBtn = carousel.querySelector('.projects__btn-prev');
const nextBtn = carousel.querySelector('.projects__btn-next');

const navButton = document.querySelector(".popupnav__button");
const navBackground = document.querySelector(".popupnav__background");
const navList = document.querySelector(".popupnav__nav");

let currImg = 0;

function slideCard() {
    figure.style.transform = `rotateY(${currImg * - theta}rad)`
}

function prev() {
    currImg--;
    slideCard();
}

function next() {
    currImg++;
    slideCard();
}

function togglePopupNav(button, background, list) {
    button.classList.toggle("popupnav__button_active");
    background.classList.toggle("popupnav__background_active");
    list.classList.toggle("popupnav__nav_active");
}

function closePopupNav(button, background, list) {
    button.classList.remove("popupnav__button_active");
    background.classList.remove("popupnav__background_active");
    list.classList.remove("popupnav__nav_active");
}


navButton.addEventListener("click", () => togglePopupNav(navButton, navBackground, navList));
navList.addEventListener("click", () => closePopupNav(navButton, navBackground, navList));

prevBtn.addEventListener('click', () => prev());
nextBtn.addEventListener('click', () => next());

