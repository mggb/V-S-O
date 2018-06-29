var burger = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu-header-cover');
var menutrue = false
var classes = {open:'fas fa-bars burger-menu',back:'fas fa-times burger-menu'};
burger.addEventListener('click',function () {
    if(menutrue === true){
        burger.className  = classes.open;
        menutrue = false;
    }
    else{
        burger.className  = classes.back;
        menutrue  = true;
    }
    menu.classList.toggle('none')
})