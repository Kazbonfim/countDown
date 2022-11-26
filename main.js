// Por conta das novas políticas, os navegadores baseados em Chromium não reproduzem aúdio sem haver a interação do usuário antes, Infelizmente.
function clockSound() {
     clockSound = new Audio('https://noproblo.dayjo.org/ZeldaSounds/MM/MM_ClockTower_Bell.wav')
        clockSound.play();
}

function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function(){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

                if(--timer < 0){
                    timer = duration;
                    timer = ''
                };

                    // Efeitos de balanço no contador. Para acrescentar urgência.
                    if(minutes <= '0' + 0){
                        wiggle = document.querySelector('#timer').classList.add('wiggleTimer');
                            clockSound();
                    };
                    
    }, 50)
};



window.onload = function () {
    userTimer = prompt('Please, chose a time above 1');
    var duration = 60 * userTimer;
    var display = document.querySelector('#timer');
    startTimer(duration, display);
    console.log('We dont have bugs in here 😎');
};


