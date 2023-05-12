let eventClickSlider = document.getElementById('eventClickSlider')
let sliderContainer = document.getElementById('sliderContainer')
let sliderBox1 = document.getElementById('sliderBox1')
let sliderBox2 = document.getElementById('sliderBox2')
let sliderBox3 = document.getElementById('sliderBox3')
let sliderBox4 = document.getElementById('sliderBox4')

let translate = 0
let mouseStartX = 0
eventClickSlider.addEventListener('mousedown', () => {
    // alert("Кнопка мыши нажата")
    mouseStartX = event.clientX
    document.addEventListener('mousemove', translateX)
})
window.addEventListener('mouseup', () => {
    console.log("Кнопка отжата")
    if (translate < -12) {
        console.log("После отжатия translate = " + translate)
        translate = -25
        sliderContainer.style.transition = ".6s"
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        setTimeout(()=>{
            sliderContainer.style.transition = ".4s"
        },600)
    } else if (translate >= -12) {
        translate = 0
        sliderContainer.style.transition = ".6s"
        sliderContainer.style.transform = 'translate(' + translate + '%)';
        setTimeout(()=>{
            sliderContainer.style.transition = ".4s"
        },600)
    }
    document.removeEventListener('mousemove', translateX)

})




function translateX(event) {
    setTimeout(() => mouseStartX = event.clientX, 100)
    if (mouseStartX > event.clientX) {
        if (translate == -75.00000000000058) {
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