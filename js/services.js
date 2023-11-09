const services = document.querySelectorAll('.service')

services.forEach((service)=>{
    service.addEventListener('click', ()=>{
        service.setAttribute('class', 'dropdown')
    })
})