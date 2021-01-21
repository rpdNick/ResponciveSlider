const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth + 12;
    sliderLine.style.width = width * images.length + 'px';
    console.log(width);
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', ()=> {
    count ++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});
document.querySelector('.slider-prev').addEventListener('click', ()=> {
    count --;
    if (count < 0){
        count = images.length -1;
    }
    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    console.log(sliderLine.style.transform = 'translate(-' + count * width + 'px)');
}