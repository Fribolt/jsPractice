const sliderItems = document.querySelectorAll('.slider-item');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
let currentSlideNumber = 1;

const next = () => {
    switchActiveElement();
    ++currentSlideNumber;
    isLast();
    switchActiveElement();
};

const prev = () => {
    switchActiveElement();
    --currentSlideNumber;
    isFirst();
    switchActiveElement();
};

const switchActiveElement = () => {
    sliderItems[currentSlideNumber -1].classList.toggle('active-slide');
};

const isLast = () => currentSlideNumber > sliderItems.length ? currentSlideNumber = 1 : false;
const isFirst = () => currentSlideNumber < 1 ? currentSlideNumber = sliderItems.length : false;

nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);