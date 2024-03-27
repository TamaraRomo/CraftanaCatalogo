const imagenes = document.querySelectorAll('.foto-tarjeta');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const iconmenu1 = document.querySelector('.iconmenu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src')) 
    })
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        iconmenu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    iconmenu1.style.opacity = '0'
}

const video = document.querySelectorAll('.video-caja');

video.forEach(video =>{
    video.addEventListener('click',()=>{
        aparecerVideo(video.getAttribute('poster'))
        
    })
})

const aparecerVideo = (video) =>{
    imagenesLight.src = video;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    iconmenu1.style.opacity = '0'
}