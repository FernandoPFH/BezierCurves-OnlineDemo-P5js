var pontos;

// Desenha Uma Linha De Referencia De Ligação Dos Pontos
function desenharLinhaDeReferencia(pontoInicial,pontoFinal,corDaLinha=100,grossuraDaLinha=1) {
    stroke(corDaLinha);
    strokeWeight(grossuraDaLinha);
    line(
        pontoInicial.posicao.x,
        pontoInicial.posicao.y,
        pontoFinal.posicao.x,
        pontoFinal.posicao.y
    );
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Lista De Pontos
    pontos = [
        new Ponto(
            nome = "A",
            posicao = createVector(100,200),
            tamanho = 25,
            corDoCirculo = 255,
            corDoTexto = 0,
            tamanhoDoTexto = 15,
            mostrarNome = true
        ),
        new Ponto(
            nome = "",
            posicao = createVector(100,100),
            tamanho = 10,
            corDoCirculo = 255
        ),
        new Ponto(
            nome = "",
            posicao = createVector(200,100),
            tamanho = 10,
            corDoCirculo = 255
        ),
        new Ponto(
            nome = "B",
            posicao = createVector(200,200),
            tamanho = 25,
            corDoCirculo = 255,
            corDoTexto = 0,
            tamanhoDoTexto = 15,
            mostrarNome = true
        )
    ]
}

function draw() {
    background(51);

    // Desenha Uma Linha De Referencia De Um Ponto Para O Seguinte
    for (let indice = 0; indice < pontos.length - 1; indice++) {
        desenharLinhaDeReferencia(pontos[indice],pontos[indice+1]);
    }

    // Desenha Cada Ponto Na Tela
    pontos.forEach(ponto => {
        ponto.desenhar();
    });
}

// Troca O Tamanho Do Canvas Quando O Tamanho Da Tela É Mudado
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}