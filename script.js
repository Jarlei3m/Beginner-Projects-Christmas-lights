const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const header = document.querySelector('header');
const timeInput = document.querySelector('.time');


let intervalControl ='';

startBtn.addEventListener('click', () => {
    let timer = 0;
    clearInterval(intervalControl);

    header.classList.add('on');
    timer = timeInput.value*1000 || 1000;
    
    intervalControl = setInterval(lights, timer);

})

function lights() {
    const allLights = document.querySelectorAll('.light');

    allLights.forEach(light =>
        light.classList.toggle('bright')
    )
}

stopBtn.addEventListener('click', () => {
    header.classList.remove('on');

    timeInput.value = '';
    clearInterval(intervalControl);
    intervalControl = 0;

})

// Allow user to change colors
const colors = document.querySelectorAll('.color');

colors.forEach(color => {
    color.addEventListener('input', (event) => {
        const inputColorContainer = event.target;
        console.log(color)
        const inputColorValue = color.value;
    
        console.log(color.value)
        // changing bg-color of the circle
        inputColorContainer.parentNode.style.backgroundColor=`${inputColorValue}`;
        
        // changing box-shadow
        // const colorOnBright = document.querySelector('.bright');
        // console.log(colorOnBright)
        // const shadowColor = document.querySelectorAll('light')
        // inputColorContainer.parentNode.style.boxShadow=`0px 0px 60px rgba(250, 250, 250, 0.8), 0px 0px 40px ${inputColorValue}`;
    })
})