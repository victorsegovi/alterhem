const services = document.querySelectorAll('.service');

services.forEach(service=>{
    service.addEventListener('click', ()=>{
        if(service.className == 'service'){
            service.setAttribute('class', 'dropdown')
        }else{
            service.setAttribute('class','service')
        }
    })
})