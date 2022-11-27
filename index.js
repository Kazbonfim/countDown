const buttonPressed = document.querySelector('.button-style');
buttonPressed.addEventListener('click', fadeOut);

function fadeOut() {
    console.log('Debug Only: changing classes')
    const fadeOutEffect = document.querySelector('.onLoad')
    fadeOutEffect.classList.add('onPress')
    fadeOutEffect.classList.remove('onLoad')
    setTimeout(function () {
        const loadingAlert = document.querySelector('.button-style')
        loadingAlert.innerText = 'Loading, please wait'
        setTimeout(() => {
            console.log('Be ready!')
            window.location.href = './countDown.html'
        }, 3000)
    }, 500)
};