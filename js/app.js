// ====== PRE LOADER =====
const preLoader = document.getElementById('preLoader')
function loadFunction() {
    displayNone(preLoader)
}

// ====== CALCULATING LOVE ======

const calcBtn = document.getElementById('calcBtn')
const resultValue = document.getElementById('result-value')
let myConfetti = document.getElementById('my-canvas');

calcBtn.addEventListener('click', () => {
    const yourName = document.getElementById('yourName').value
    const loveName = document.getElementById('loveName').value
    let loveData = Math.floor(Math.random() * 100 + 1)

    if(yourName == '') {
        displayBlock(errorBox)
        errorText.innerHTML = 'Please provide your name'

    } else if(yourName.length <= 2) {
        displayBlock(errorBox)
        errorText.innerHTML = 'Name is too short'

    } else if(!isNaN(yourName)) {
        displayBlock(errorBox)
        errorText.innerHTML = 'Can not use number as a Name'
    } else if(loveName == '') {
        displayBlock(errorBox)
        errorText.innerHTML = `Please provide Partner's name`

    } else if(loveName.length <= 2) {
        displayBlock(errorBox)
        errorText.innerHTML = 'Name is too short'

    } else if(!isNaN(loveName)) {
        displayBlock(errorBox)
        errorText.innerHTML = 'Can not use number as a Name'
    } else {
        displayBlock(resultBox)
        resultValue.innerHTML = 'Calculating....'
        setTimeout(() => {
            resultValue.innerHTML = loveData + '%'
            if(loveData > 59) {
                myConfetti.classList.add('active')
            }
        }, 2500)
    }

})


// =====   ERROR & RESULT ======
const times = document.getElementById('times')
const closed = document.getElementById('close')
const errorBox = document.getElementById('errorBox')
const errorText = document.getElementById('error-text')
const resultBox = document.getElementById('result')

function displayBlock(box) {
    box.style.display = 'block'
}
function displayNone(box) {
    box.style.display = 'none'
}

times.addEventListener('click', () => {
    displayNone(errorBox)
})
closed.addEventListener('click', () => {
    displayNone(resultBox)
    myConfetti.classList.remove('active')
})



var confettiSettings = {
    target: 'my-canvas',
    size: 1.8,
    colors: [
        [255, 0, 0],
        [0, 255, 0],
        [255, 255, 0],
        [0, 0, 255]
       ],
   rotate: true,
   clock: 50
   };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();