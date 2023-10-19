const bars = document.querySelector('.bars')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const linksMobile = document.getElementById('links-mobile')
const body = document.getElementById('body')

function barsManagement(){
    if(bars.className == 'bars'){
        bars.setAttribute('class', 'close')
        second.style.transform = 'translateX(100%)'
        first.style.transform = 'rotate(-45deg)'
        third.style.transform = 'rotate(45deg)'
        first.style.top = '45%'
        third.style.bottom = '45%'
        linksMobile.style.top = '0'
        body.style.overflow = 'hidden'
    }else if(bars.className == 'close'){
        bars.setAttribute('class', 'bars')
        second.style.transform = 'translateY(-50%)'
        first.style.transform = 'unset'
        third.style.transform = 'unset'
        first.style.top = '0'
        third.style.bottom = '0'
        linksMobile.style.top = '-100vh'
        body.style.overflow = 'auto'
    }
}


bars.addEventListener('click', barsManagement)