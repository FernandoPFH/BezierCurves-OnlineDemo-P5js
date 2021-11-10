var ponto;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ponto = new Ponto(
        nome = "A",
        posicao = createVector(100,100),
        tamanho = 25,
        corDoCirculo = 255,
        corDoTexto = 0,
        tamanhoDoTexto = 15,
        mostrarNome = true
    );
}

function draw() {
    background(51);
    ponto.desenhar();
}

// Troca O Tamanho Do Canvas Quando O Tamanho Da Tela É Mudado
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}