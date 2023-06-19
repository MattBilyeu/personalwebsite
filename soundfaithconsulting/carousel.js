var allCarouselItems = document.querySelectorAll('.slide');
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var index = 0;

nextSlide.onclick = function () {
    next('next');
    clearInterval(carouselInterval);
}

prevSlide.onclick = function () {
    next('prev');
    clearInterval(carouselInterval);
}

function next(direction) {
    if (direction == 'next') {
        if(index == allCarouselItems.length-1) {
            index = 0;
        } else {
            index++;
        }
    } else if(direction == 'prev') {
        if(index == 0) {
            index = allCarouselItems.length - 1;
        } else {
            index--;
        }
    }
    for(i = 0; i < allCarouselItems.length; i++) {
        allCarouselItems[i].classList.remove('active');
    }
    allCarouselItems[index].classList.add('active');
}

const carouselInterval = setInterval(()=> {
    next('next')
}, 3000);