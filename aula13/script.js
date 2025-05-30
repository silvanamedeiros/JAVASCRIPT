//aki estamos recuperando nosso ID que está no HTML
let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle");//add uma class para arredondar o quadrado 
    meuElemento.classList.remove("square");//removo uma class para arredondar a caixa
}

function tornarQuadrado() {
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

function alternarFormato() {
    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square");
}

// toggle é reponsável por verificar o elem atual, como se fosse um vigia

