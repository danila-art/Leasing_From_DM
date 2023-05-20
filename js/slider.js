let eventClickSlider = document.getElementById('eventClickSlider')
let sliderContainer = document.getElementById('sliderContainer')
let sliderBox1 = document.getElementById('sliderBox1')
let sliderBox2 = document.getElementById('sliderBox2')
let sliderBox3 = document.getElementById('sliderBox3')
let sliderBox4 = document.getElementById('sliderBox4')

// Button slider
let sliderButton1 = document.getElementById('sliderButton1')
let sliderButton2 = document.getElementById('sliderButton2')
let sliderButton3 = document.getElementById('sliderButton3')
let sliderButton4 = document.getElementById('sliderButton4')
sliderButton1.addEventListener('click', () => {
    translate = 0
    sliderContainer.style.transform = 'translate(' + translate + '%)';
    sliderButton1.classList.add('slider-button__active')
    sliderButton2.classList.remove('slider-button__active')
    sliderButton3.classList.remove('slider-button__active')
    sliderButton4.classList.remove('slider-button__active')
})
sliderButton2.addEventListener('click', () => {
    translate = -25
    sliderContainer.style.transform = 'translate(' + translate + '%)';
    sliderButton2.classList.add('slider-button__active')
    sliderButton1.classList.remove('slider-button__active')
    sliderButton3.classList.remove('slider-button__active')
    sliderButton4.classList.remove('slider-button__active')
})
sliderButton3.addEventListener('click', () => {
    translate = -50
    sliderContainer.style.transform = 'translate(' + translate + '%)';
    sliderButton3.classList.add('slider-button__active')
    sliderButton2.classList.remove('slider-button__active')
    sliderButton1.classList.remove('slider-button__active')
    sliderButton4.classList.remove('slider-button__active')
})
sliderButton4.addEventListener('click', () => {
    translate = -75
    sliderContainer.style.transform = 'translate(' + translate + '%)';
    sliderButton4.classList.add('slider-button__active')
    sliderButton2.classList.remove('slider-button__active')
    sliderButton3.classList.remove('slider-button__active')
    sliderButton1.classList.remove('slider-button__active')
})
let translate = 0
let mouseStartX = 0
eventClickSlider.addEventListener('mousedown', () => {
    // alert("Кнопка мыши нажата")
    mouseStartX = event.clientX
    document.addEventListener('mousemove', translateX)
})
window.addEventListener('mouseup', () => {
    console.log("Кнопка отжата")
    console.log("После отжатия translate = " + translate)
    // Если переведено больше на 2 слайд
    if (translate < -12 && translate > -35) {
        console.log("Применен 1 блок")
        translate = -25
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderButton2.classList.add('slider-button__active')
        sliderButton1.classList.remove('slider-button__active')
        sliderButton3.classList.remove('slider-button__active')
        sliderButton4.classList.remove('slider-button__active')
    } else if (translate >= -12 && translate > -35) {
        console.log("Применен 1.1 блок")
        translate = 0
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderButton1.classList.add('slider-button__active')
        sliderButton2.classList.remove('slider-button__active')
        sliderButton3.classList.remove('slider-button__active')
        sliderButton4.classList.remove('slider-button__active')
    }
    // Если переведено больше на 3 слайд
    else if (translate < -35 && translate > -60) {
        console.log("Применен 2 блок")
        translate = -50
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderButton3.classList.add('slider-button__active')
        sliderButton2.classList.remove('slider-button__active')
        sliderButton1.classList.remove('slider-button__active')
        sliderButton4.classList.remove('slider-button__active')
    } else if (translate >= -35 && translate > -60) {
        console.log("Применен 2.1 блок")
        translate = -25
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderButton2.classList.add('slider-button__active')
        sliderButton1.classList.remove('slider-button__active')
        sliderButton3.classList.remove('slider-button__active')
        sliderButton4.classList.remove('slider-button__active')
    }
    // Если переведено больше на 4 слайд
    else if (translate < -60) {
        console.log("Применен 2 блок")
        translate = -75
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        sliderButton4.classList.add('slider-button__active')
        sliderButton2.classList.remove('slider-button__active')
        sliderButton3.classList.remove('slider-button__active')
        sliderButton1.classList.remove('slider-button__active')
    } else if (translate >= -60) {
        console.log("Применен 2.1 блок")
        translate = -50
        sliderButton3.classList.add('slider-button__active')
        sliderButton2.classList.remove('slider-button__active')
        sliderButton1.classList.remove('slider-button__active')
        sliderButton4.classList.remove('slider-button__active')
    }
    document.removeEventListener('mousemove', translateX)

})




function translateX(event) {
    setTimeout(() => mouseStartX = event.clientX, 100)
    if (mouseStartX > event.clientX) {
        if (translate == -75.) {
            console.log('Нельзя');
        } else {
            translate = translate - .3
            sliderContainer.style.transform = 'translate(' + translate + '%)';
            console.log(translate)
        }
    } else {
        if (translate == 0) {
            console.log('Нельзя');
        } else {
            translate = translate + .3
            sliderContainer.style.transform = 'translate(' + translate + '%)';
            console.log(translate)
        }
    }

}