const carousel = document.querySelector('.projects__container');
const figure = carousel.querySelector('.projects__figure');
const btnBox = carousel.querySelector('.projects__btns-box');
const card = carousel.querySelector('.card');
const numImg = 5;
const theta = 2 * Math.PI / numImg;

const prevBtn = carousel.querySelector('.projects__btn-prev');
const nextBtn = carousel.querySelector('.projects__btn-next');

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

prevBtn.addEventListener('click', () => prev());
nextBtn.addEventListener('click', () => next());

