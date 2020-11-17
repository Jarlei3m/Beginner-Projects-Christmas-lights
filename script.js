const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const timeInput = document.querySelector('.time');
const allLights = document.querySelectorAll('.light')

let intervalControl ='';

startBtn.addEventListener('click', () => {

    let timer = 0;
    clearInterval(intervalControl);

    allLights.forEach(light => 
        light.classList.add('on')
    )

    timer = timeInput.value*1000 || 1000;
    intervalControl = setInterval(allLightsBright, timer);
})

function allLightsBright() {

    allLights.forEach(light => 
        light.classList.toggle('bright')
    )
}

stopBtn.addEventListener('click', () => {

    allLights.forEach(light => 
        light.classList.remove('on')
    )

    timeInput.value = '';
    clearInterval(intervalControl);
    intervalControl = 0;
})
