let inputs, clock, alarm, hours, minutes, seconds, repeater; 

window.addEventListener('load', () => { 
    inputs = Array.from(document.getElementsByClassName('number')); 
    clock = document.querySelector('#temporizador'); 
    alarm = new Audio('--'); 
});


function startTimer() {
    parseTime();
    setTimer();  
    countdown();
    
    document.getElementById('play').disabled = true;  // Desactiva el botón de inicio
    document.getElementById('pause').disabled = false;  // Desactiva el botón de pausa
}

function setTimer() {
    inputs[0].value = hours > 9 ? hours : ('0' + hours);
    inputs[1].value = minutes > 9 ? minutes : ('0' + minutes);
    inputs[2].value = seconds > 9 ? seconds : ('0' + seconds);

    inputs.forEach(input => input.disabled = true);  // Desactiva los inputs mientras corre el temporizador
}


function parseTime() {
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function countdown() {
    repeater = setInterval(runner, 1000);
}

function runner() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
            }
        }
    }

    setTimer();
}

function pauseTimer() {
    clearInterval(repeater);  // Detiene la cuenta regresiva sin reiniciar valores
    document.getElementById('play').disabled = false;  // Reactiva el botón de inicio para continuar
    document.getElementById('pause').disabled = true;  // Desactiva el botón de inicio
}


function stopTimer() {
    clearInterval(repeater);
    inputs.forEach(input => input.disabled = false);  // Reactiva los inputs al detener el temporizador
    document.getElementById('play').disabled = false;  // Reactiva el botón de inicio
    document.getElementById('pause').disabled = false;  // Desactiva el botón de pausa
    location.reload();
}