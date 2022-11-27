console.log(`🔇 Por conta das novas políticas, os navegadores baseados em Chromium não reproduzem aúdio sem haver a interação do usuário antes, Infelizmente. Caso não receba o alarme, tente favoritar a página inicial.`)

console.log(`Due to the new policies, Chromium-based browsers will not play audio without user interaction first, unfortunately. If you don't get the alarm, try bookmarking the homepage.`)

function sound() {
     clockSound = new Audio('https://noproblo.dayjo.org/ZeldaSounds/MM/MM_ClockTower_Bell.wav');
        clockSound.play();
};

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
                        let clockSpeed = document.querySelector('.slowerClock')
                            clockSpeed.classList.add('fasterClock')
                                // Gives a strange bug... clockSpeed.classList.remove('slowerClock')
                                    wiggle = document.querySelector('#timer').classList.add('wiggleTimer');

                        if (timer === 0) {
                            sound()
                        }
                    };
                    
    }, 1000)
};



window.onload = function () {
    userTimer = 5;
    var duration = 60 * userTimer;
    var display = document.querySelector('#timer');
    startTimer(duration, display);
    console.log('If you liked that little project, and is hiring a junior who whants to learn and make things perfectly, mail-me: zcry.games@gmail.com 😎');
};


