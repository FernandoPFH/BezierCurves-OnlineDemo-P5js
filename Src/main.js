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

// Desenha Uma Curva Bézier Fazendo A Interpolação De Todos Os Pontos
function desenharCurvaBezier(numeroDePontos=10,corDaLinha=100,grossuraDaLinha=1) {
    stroke(corDaLinha);
    strokeWeight(grossuraDaLinha);
    noFill();
    beginShape();
    for (let indice = 0; indice <= 1; indice+=1/Math.round(numeroDePontos)) {
        let valorInterpolacaoEmX_Ponto1 = (1-indice)**3 * pontos[0].posicao.x;
        let valorInterpolacaoEmX_Ponto2 = 3*indice*(1-indice)**2 * pontos[1].posicao.x;
        let valorInterpolacaoEmX_Ponto3 = 3*indice**2*(1-indice) * pontos[2].posicao.x;
        let valorInterpolacaoEmX_Ponto4 = indice**3 * pontos[3].posicao.x;

        let valorInterpolacaoEmX = valorInterpolacaoEmX_Ponto1 + valorInterpolacaoEmX_Ponto2 + valorInterpolacaoEmX_Ponto3 + valorInterpolacaoEmX_Ponto4;
        
        let valorInterpolacaoEmY_Ponto1 = (1-indice)**3 * pontos[0].posicao.y;
        let valorInterpolacaoEmY_Ponto2 = 3*indice*(1-indice)**2 * pontos[1].posicao.y;
        let valorInterpolacaoEmY_Ponto3 = 3*indice**2*(1-indice) * pontos[2].posicao.y;
        let valorInterpolacaoEmY_Ponto4 = indice**3 * pontos[3].posicao.y;

        let valorInterpolacaoEmY = valorInterpolacaoEmY_Ponto1 + valorInterpolacaoEmY_Ponto2 + valorInterpolacaoEmY_Ponto3 + valorInterpolacaoEmY_Ponto4;

        vertex(valorInterpolacaoEmX,valorInterpolacaoEmY);
    }
    endShape();
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

    // Desenha A Curva Bézier
    desenharCurvaBezier(10);

    // Desenha Cada Ponto Na Tela
    pontos.forEach(ponto => {
        ponto.desenhar();
    });

    // Troca O Ponteiro Do Mouse Se Ele Estiver Em Cima De Um Ponto
    if (pontos.some(ponto => ponto.mouseEstaEmCima(mouseX,mouseY))) {
        document.body.style.cursor = "move";
    } else {
        document.body.style.cursor = "default";
    }
}

// Troca O Tamanho Do Canvas Quando O Tamanho Da Tela É Mudado
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}