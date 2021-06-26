
const calcBtn = document.getElementById('calcBtn')
const result = document.getElementById('result')

calcBtn.addEventListener('click', () => {
    const yourName = document.getElementById('yourName').value
    const loveName = document.getElementById('loveName').value
    let loveData = Math.floor(Math.random() * 100)

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
        result.value = 'Calculating....'
        setTimeout(() => {
            result.value = loveData + '%'
        }, 3000)

    }

})

const times = document.getElementById('times')
const errorBox = document.getElementById('errorBox')
const errorText = document.getElementById('error-text')


function displayBlock(box) {
    box.style.display = 'block'
}
function displayNone(box) {
    box.style.display = 'none'
}

times.addEventListener('click', () => {
    displayNone(errorBox)
})