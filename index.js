var youtube = document.getElementById('youtube');
var pesquisa = document.getElementById('pesquisa');
var display = document.getElementById('display');
var shopping = document.getElementById('shopping');

var x = document.getElementById('x');

var youtube_hidden = document.getElementById('youtube-hidden');
var pesquisa_hidden = document.getElementById('pesquisa-hidden');
var display_hidden = document.getElementById('display-hidden');
var shopping_hidden = document.getElementById('shopping-hidden');



var fechar_div = function (div){
    div.style.display = 'none'
}

function fechar_tudo(){
    fechar_div(youtube_hidden);
    fechar_div(pesquisa_hidden);
    fechar_div(display_hidden);
    fechar_div(shopping_hidden);
    fechar_div(x);
}

x.addEventListener('click',fechar_tudo);
function fechar_tudo(){
    fechar_div(youtube_hidden);
    fechar_div(pesquisa_hidden);
    fechar_div(display_hidden);
    fechar_div(shopping_hidden);
    fechar_div(x);
}


youtube.addEventListener('click', abrir_youtube)
function abrir_youtube(){
    youtube_hidden.style.display = 'block';
    x.style.display = 'block';
    fechar_div(pesquisa_hidden);
    fechar_div(display_hidden);
    fechar_div(shopping_hidden);
}

pesquisa.addEventListener('click', abrir_pesquisa)
function abrir_pesquisa(){
    pesquisa_hidden.style.display = 'block';
    x.style.display = 'block';
    fechar_div(youtube_hidden);
    fechar_div(display_hidden);    
    fechar_div(shopping_hidden);

}

display.addEventListener('click', abrir_display)
function abrir_display(){
    display_hidden.style.display = 'block';
    x.style.display = 'block';
    fechar_div(pesquisa_hidden);
    fechar_div(youtube_hidden);
    fechar_div(shopping_hidden);
}


shopping.addEventListener('click', abrir_shopping)
function abrir_shopping(){
    shopping_hidden.style.display = 'block';
    x.style.display = 'block';
    fechar_div(pesquisa_hidden);
    fechar_div(youtube_hidden);
    fechar_div(display_hidden);
}






var x_2 = document.getElementById('x-2');
var insta_hiddenn = document.getElementById('insta-hidden');
var img_1 = document.getElementById('img-1');
var img_2 = document.getElementById('img-2');
var img_3 = document.getElementById('img-3');

var img_1_hidden = document.getElementById('img-1-hidden');
var img_2_hidden = document.getElementById('img-2-hidden');
var img_3_hidden = document.getElementById('img-3-hidden');

img_1.addEventListener('click',abrir_img_1);
function abrir_img_1(){
    insta_hiddenn.style.display = 'block'
    img_1_hidden.style.display = 'block'
    x_2.style.display = 'block';
}


img_2.addEventListener('click',abrir_img_2);
function abrir_img_2(){
    insta_hiddenn.style.display = 'block'
    img_2_hidden.style.display = 'block'
    x_2.style.display = 'block';
}

img_3.addEventListener('click',abrir_img_3);
function abrir_img_3(){
    insta_hiddenn.style.display = 'block'
    img_3_hidden.style.display = 'block'
    x_2.style.display = 'block';
}


x_2.addEventListener('click', fechar_img);
function fechar_img(){
    insta_hiddenn.style.display = 'none'
    img_1_hidden.style.display = 'none'
    
    img_2_hidden.style.display = 'none'
    
    img_3_hidden.style.display = 'none'
    x_2.style.display = 'none';
}

