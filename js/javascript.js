const iconmenu = document.querySelector('.iconmenu');
const menu = document.querySelector('.menu-nav');

iconmenu.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != iconmenu ){
            menu.classList.toggle("spread") 
    }
})