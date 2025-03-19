let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3  = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let title = document.querySelector('.title');
let main = document.querySelector('.main');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 2 + 'px';
    title.style.fontSize = value + 'px';
    if(scrollY >= 112){
        title.style.fontSize = 112 + 'px';
        title.style.position = 'fixed';
        if(scrollY > 349.3333435058594){
            title.style.display = 'none';
        }
        else{
            title.style.display = 'block';
        }
    }
    if(scrollY >= 114){
        document.querySelector('.main').style.background = 'linear-gradient(lightblue, #fff)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(transparent, black)';

    }
}
