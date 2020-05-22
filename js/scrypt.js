const active = document.getElementsByClassName('active');

document.body.onclick = function(e){
    if(active.length > 0 && e.srcElement.nextElementSibling.classList.contains('active')){
        e.srcElement.nextElementSibling.classList.toggle('active');
    } else if(active.length > 0){
        active[0].classList.toggle('active')
        e.srcElement.nextElementSibling.classList.toggle('active');
    } else if(active.length > 0 && e.srcElement.nextElementSibling.classList.contains('active') != true){
        active[0].classList.remove('active');
    } else if(e.srcElement.nextElementSibling == null){
        
    }else if(e.srcElement.nextElementSibling.classList.contains('drop-menu')) {
        e.srcElement.nextElementSibling.classList.toggle('active');
    }
}

const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.onclick = function(){
    btn.classList.toggle('open');
    nav.classList.toggle('nav-open');
}