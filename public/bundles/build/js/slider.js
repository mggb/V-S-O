var $ui ={
    right:document.querySelector('.right'),
    left:document.querySelector('.left'),
    box:document.querySelector('.box-slider'),
    items:document.querySelectorAll('.catalogueplanete-container-content-text-item'),
    imgs:document.querySelectorAll('.catalogueplanete-bg')
};
$ui.imgs[0].classList.add('show');
$ui.left.classList.add('slider-none');
var index = 0;
var is_slide;




$ui.box.addEventListener('transitionstart',function(){
    is_slide = true;
});
$ui.box.addEventListener('transitionend',function(){
    is_slide = false;
});


$ui.right.addEventListener('click',function(){

    if(is_slide === true){
        return;
    }

    if(index < $ui.items.length-1){
        $ui.imgs[index].classList.remove('show')
        index++;
        $ui.box.style.marginLeft=-(index*100)+'%';
        $ui.imgs[index].classList.add('show')
    }
    if(index !== $ui.items.length-1){
        $ui.right.classList.remove('slider-none');
    }
    if(index === $ui.items.length-1){
        $ui.right.classList.add('slider-none');
    }
    if(index === 0){
        $ui.left.classList.add('slider-none');
    }
    if(index !== 0){
        $ui.left.classList.remove('slider-none');
    }
});

$ui.left.addEventListener('click',function(){
    console.log('lol');
    if(is_slide === true){
        return;
    }
    if(index === $ui.items.length-1){
        $ui.left.classList.add('slider-none');
    }

    if(index > 0){
        $ui.imgs[index].classList.remove('show')
        index--;
        $ui.box.style.marginLeft=-(index*100)+'%';
        $ui.imgs[index].classList.add('show')
    }
    if(index !== $ui.items.length-1){
        $ui.right.classList.remove('slider-none');
    }
    if(index === $ui.items.length-1){
        $ui.right.classList.add('slider-none');
    }
    if(index === 0){
        $ui.left.classList.add('slider-none');
    }
    if(index !== 0){
        $ui.left.classList.remove('slider-none');
    }

});