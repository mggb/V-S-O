var burger = document.querySelector('.fa-plus-circle');
var burgerOuvert =   document.querySelector('.menu-open');
var take = document.querySelector('.take')

burger.addEventListener('click',function () {
    burgerOuvert.style.display='block';
})
take.addEventListener('click',function () {
    burgerOuvert.style.display = '';
});
