const ball = document.querySelector('.ball')
const imgMoon = document.querySelector('.img-moon')
const imgSun = document.querySelector('.img-sun')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

function eventClick(nameProperty) {
    nameProperty.addEventListener('click', () => {

        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')        
            header.style.color = 'black'
            footer.style.color = 'black'
            ball.style.transform = ''
            ball.style.transform = 'translate(0)'
        } else {
            document.body.classList.add('dark')
            ball.style.transform = 'translate(-13.6rem)'
            header.style.color = 'white'
            footer.style.color = 'white'
        }
    })
}

eventClick(ball)
eventClick(imgSun)
eventClick(imgMoon)
