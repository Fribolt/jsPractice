const sliderItems = document.querySelectorAll('.slider-item');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
let currentSlideNumber = 1;

//          Листнер должен вызывать функцию - в которой будет реализация next()
nextButton.addEventListener('click', function () {
    sliderItems[currentSlideNumber -1].classList.toggle('active-slide');
    ++currentSlideNumber;
    //          Условие нужно вынести в метод, например isLast()
    if (currentSlideNumber >= sliderItems.length) {
        currentSlideNumber = 1;
    }
    //      Тоглы выглядят как дулирование кода- вынести в функцию
    sliderItems[currentSlideNumber -1].classList.toggle('active-slide');
});
//          Ситуация повторяется)
prevButton.addEventListener('click', function () {
    sliderItems[currentSlideNumber -1].classList.toggle('active-slide');
    --currentSlideNumber;
    if (currentSlideNumber <= 1) {
        currentSlideNumber = sliderItems.length;
    }
    sliderItems[currentSlideNumber -1].classList.toggle('active-slide');
});