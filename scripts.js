let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')
let botaoSite = document.querySelector('.botao-site')

function trocarACor(cor){
    circulo.style.background = cor
}

function trocarImagem(endereco){
    imagem.src = endereco
}

function mandarSite(){
    window.open ("https://www.starbucks.com.br");
}