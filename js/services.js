const services = document.querySelectorAll('.service')

services.forEach((service)=>{
    service.addEventListener('click', ()=>{
        if(service.className == 'service'){
            service.removeAttribute('class', 'service')
            service.setAttribute('class', 'dropdown')
        }else if(service.className == 'dropdown'){
            service.removeAttribute('class', 'dropdown')
            service.setAttribute('class', 'service')
        }
    })
})