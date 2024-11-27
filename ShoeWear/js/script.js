const slide = document.querySelectorAll('.slide');
const slides_length = slide.length;
const carousel = document.getElementById('carousel');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
let currentSlide =0;
leftArrow.addEventListener('click', () => {

    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slides_length-1;
    }
    updateSlide();
    
})

rightArrow.addEventListener('click', () => {
    currentSlide++;
    if(currentSlide >= slides_length-1){
        currentSlide = 0;
    }
    updateSlide();
    
})

function updateSlide(){
    carousel.style.transform = `translateX(-${currentSlide *slide[0].offsetWidth}px)`;
    document.body.style.backgroundColor = `#${slide[currentSlide].getAttribute('data-bg') }`;

}