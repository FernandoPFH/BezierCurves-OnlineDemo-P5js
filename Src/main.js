// Lista De Pontos
var pontos;

// Variaveis Para Uso Durante Movimento Dos Pontos
var pontoMexido;
var offsetPontoMexido;

// Variavel Para Reajustar Os Ponto Baseado Na Posição Da Tela
var tamanhoAtualCanvas;

// Variaveis De Mudança Dos Valores Do Menu
var Curva_Bezier_Numero_De_Pontos;
var Curva_Bezier_Grossura;
var Curva_Bezier_Cor;

var Pontos_Extremos_Tamanho;
var Pontos_Extremos_Cor;
var Pontos_Extremos_Tamanho_Da_Letra;
var Pontos_Extremos_Cor_Da_Letra;

var Pontos_Referencia_Tamanho;
var Pontos_Referencia_Cor;

var Retas_Referencia_Grossura;
var Retas_Referencia_Cor;

// Atualiza Os Campos De Mostra Dos Valores Do Menu De Configurações
function atualizarValoresDasMostragemDoMenu() {
    // Curva Bézier
    document.getElementById("Curva_Bezier_Numero_De_Pontos_Mostragem").innerHTML = document.getElementById("Curva_Bezier_Numero_De_Pontos").value;
    document.getElementById("Curva_Bezier_Grossura_Mostragem").innerHTML = document.getElementById("Curva_Bezier_Grossura").value;

    // Pontos Extremos
    document.getElementById("Pontos_Extremos_Tamanho_Mostragem").innerHTML = document.getElementById("Pontos_Extremos_Tamanho").value;
    document.getElementById("Pontos_Extremos_Tamanho_Da_Letra_Mostragem").innerHTML = document.getElementById("Pontos_Extremos_Tamanho_Da_Letra").value;

    // Pontos Referencia
    document.getElementById("Pontos_Referencia_Tamanho_Mostragem").innerHTML = document.getElementById("Pontos_Referencia_Tamanho").value;

    // Retas Referencia
    document.getElementById("Retas_Referencia_Grossura_Mostragem").innerHTML = document.getElementById("Retas_Referencia_Grossura").value;
}

// Converte Um Código Hexadecimal De Cor Para Tres Valores RGB
function textoHexParaValoresRGB(textoHex) {
    if (textoHex.length < 7) {
        return;
    }

    let textoVermelho = textoHex.substring(1,3);
    valorVermelho = parseInt(textoVermelho[0].replace("a","10").replace("b","11").replace("c","12").replace("d","13").replace("e","14").replace("f","15")) * 16;
    valorVermelho += parseInt(textoVermelho[1].replace("a","10").replace("b","11").replace("c","12").replace("d","13").replace("e","14").replace("f","15"));

    let textoVerde = textoHex.substring(3,5);
    valorVerde = parseInt(textoVerde[0].replace("a","10").replace("b","11").replace("c","12").replace("d","13").replace("e","14").replace("f","15")) * 16;
    valorVerde += parseInt(textoVerde[1].replace("a","10").replace("b","11").replace("c","12").replace("d","13").replace("e","14").replace("f","15"));

    let textoAzul = textoHex.substring(5,7);
    valorAzul = parseInt(textoAzul[0].replace("a","10").replace("b","11").replace("c","12").replace("d","13").replace("e","14").replace("f","15")) * 16;
    valorAzul += parseInt(textoAzul[1].replace("a","10").replace("b","11").replace("c","12").replace("d","13").replace("e","14").replace("f","15"));

    return {"r":valorVermelho,"g":valorVerde,"b":valorAzul};
}

// Mudar Os Valores Do Objetos Do Canvas Baseado Nos Valores Do Menu
function mudarValoresDoCanvasBaseadoNoMenu() {
    // Curva Bézier
    Curva_Bezier_Numero_De_Pontos = document.getElementById("Curva_Bezier_Numero_De_Pontos").value;
    Curva_Bezier_Grossura = document.getElementById("Curva_Bezier_Grossura").value;

    let Curva_Bezier_Cor_temp = textoHexParaValoresRGB(document.getElementById("Curva_Bezier_Cor").value);
    Curva_Bezier_Cor = color(Curva_Bezier_Cor_temp.r,Curva_Bezier_Cor_temp.g,Curva_Bezier_Cor_temp.b);

    // Pontos Extremos
    Pontos_Extremos_Tamanho = document.getElementById("Pontos_Extremos_Tamanho").value;
    pontos[0].tamanho = Pontos_Extremos_Tamanho;
    pontos[3].tamanho = Pontos_Extremos_Tamanho;

    Pontos_Extremos_Tamanho_Da_Letra = parseInt(document.getElementById("Pontos_Extremos_Tamanho_Da_Letra").value);
    pontos[0].tamanhoDoTexto = Pontos_Extremos_Tamanho_Da_Letra;
    pontos[3].tamanhoDoTexto = Pontos_Extremos_Tamanho_Da_Letra;

    let Pontos_Extremos_Cor_temp = textoHexParaValoresRGB(document.getElementById("Pontos_Extremos_Cor").value);
    Pontos_Extremos_Cor = color(Pontos_Extremos_Cor_temp.r,Pontos_Extremos_Cor_temp.g,Pontos_Extremos_Cor_temp.b);
    pontos[0].corDoCirculo = Pontos_Extremos_Cor;
    pontos[3].corDoCirculo = Pontos_Extremos_Cor;
    

    let Pontos_Extremos_Cor_Da_Letra_temp = textoHexParaValoresRGB(document.getElementById("Pontos_Extremos_Cor_Da_Letra").value);
    Pontos_Extremos_Cor_Da_Letra = color(Pontos_Extremos_Cor_Da_Letra_temp.r,Pontos_Extremos_Cor_Da_Letra_temp.g,Pontos_Extremos_Cor_Da_Letra_temp.b);
    pontos[0].corDoTexto = Pontos_Extremos_Cor_Da_Letra;
    pontos[3].corDoTexto = Pontos_Extremos_Cor_Da_Letra;


    // Pontos Referencia
    Pontos_Referencia_Tamanho = document.getElementById("Pontos_Referencia_Tamanho").value;
    pontos[1].tamanho = Pontos_Referencia_Tamanho;
    pontos[2].tamanho = Pontos_Referencia_Tamanho;
    
    let Pontos_Referencia_Cor_temp = textoHexParaValoresRGB(document.getElementById("Pontos_Referencia_Cor").value);
    Pontos_Referencia_Cor = color(Pontos_Referencia_Cor_temp.r,Pontos_Referencia_Cor_temp.g,Pontos_Referencia_Cor_temp.b);
    pontos[1].corDoCirculo = Pontos_Referencia_Cor;
    pontos[2].corDoCirculo = Pontos_Referencia_Cor;

    // Retas Referencia
    Retas_Referencia_Grossura = document.getElementById("Retas_Referencia_Grossura").value;
    
    let Retas_Referencia_Cor_temp = textoHexParaValoresRGB(document.getElementById("Retas_Referencia_Cor").value);
    Retas_Referencia_Cor = color(Retas_Referencia_Cor_temp.r,Retas_Referencia_Cor_temp.g,Retas_Referencia_Cor_temp.b);
}

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
    
    vertex(pontos[0].posicao.x,pontos[0].posicao.y);

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

        ultimoVertice = createVector(valorInterpolacaoEmX,valorInterpolacaoEmY);

        vertex(valorInterpolacaoEmX,valorInterpolacaoEmY);
    }
    
    vertex(pontos[3].posicao.x,pontos[3].posicao.y);

    endShape();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    tamanhoAtualCanvas = createVector(windowWidth, windowHeight);

    // Preparando Valores Iniciais
    Curva_Bezier_Numero_De_Pontos = 100;
    Curva_Bezier_Grossura = 3;
    Curva_Bezier_Cor = color(0,255,0);

    Pontos_Extremos_Tamanho = 25;
    Pontos_Extremos_Cor = color(255,255,255);
    Pontos_Extremos_Tamanho_Da_Letra = 15;
    Pontos_Extremos_Cor_Da_Letra = color(0,0,0);
    
    Pontos_Referencia_Tamanho = 10;
    Pontos_Referencia_Cor = color(255,255,255);
    
    Retas_Referencia_Grossura = 1;
    Retas_Referencia_Cor = color(64,64,64);

    // Lista De Pontos
    pontos = [
        new Ponto(
            nome = "A",
            posicao = createVector(windowWidth/8,windowHeight*7/8),
            tamanho = Pontos_Extremos_Tamanho,
            corDoCirculo = Pontos_Extremos_Cor,
            corDoTexto = Pontos_Extremos_Cor_Da_Letra,
            tamanhoDoTexto = Pontos_Extremos_Tamanho_Da_Letra,
            mostrarNome = true
        ),
        new Ponto(
            nome = "",
            posicao = createVector(windowWidth/8,windowHeight/8),
            tamanho = Pontos_Referencia_Tamanho,
            corDoCirculo = Pontos_Referencia_Cor
        ),
        new Ponto(
            nome = "",
            posicao = createVector(windowWidth*7/8,windowHeight/8),
            tamanho = Pontos_Referencia_Tamanho,
            corDoCirculo = Pontos_Referencia_Cor
        ),
        new Ponto(
            nome = "B",
            posicao = createVector(windowWidth*7/8,windowHeight*7/8),
            tamanho = Pontos_Extremos_Tamanho,
            corDoCirculo = Pontos_Extremos_Cor,
            corDoTexto = Pontos_Extremos_Cor_Da_Letra,
            tamanhoDoTexto = Pontos_Extremos_Tamanho_Da_Letra,
            mostrarNome = true
        )
    ]
}

function draw() {
    background(51);

    atualizarValoresDasMostragemDoMenu();
    mudarValoresDoCanvasBaseadoNoMenu();

    // Desenha Uma Linha De Referencia De Um Ponto Para O Seguinte
    for (let indice = 0; indice < pontos.length - 1; indice++) {
        desenharLinhaDeReferencia(pontos[indice],pontos[indice+1],Retas_Referencia_Cor,Retas_Referencia_Grossura);
    }

    // Desenha A Curva Bézier
    desenharCurvaBezier(Curva_Bezier_Numero_De_Pontos,Curva_Bezier_Cor,Curva_Bezier_Grossura);

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

// Função Chamada Quando Um Botão Do Mouse É Pressionado E O Mouse É Mexido
function mouseDragged() {
    if (!pontoMexido) {
        pontos.forEach(ponto => {
            if (ponto.mouseEstaEmCima(mouseX,mouseY)) {
                pontoMexido = ponto;
                offsetPontoMexido = createVector(mouseX - ponto.posicao.x,mouseY - ponto.posicao.y)
                pontoMexido.posicao = createVector(mouseX - offsetPontoMexido.x,mouseY - offsetPontoMexido.y);
            }
        })
    } else {
        pontoMexido.posicao = createVector(mouseX - offsetPontoMexido.x,mouseY - offsetPontoMexido.y);
    }
}

// Função Chamada Quando Um Botão Do Mouse É Solto
function mouseReleased() {
    pontoMexido = null;
    offsetPontoMexido = null;
}

// Troca O Tamanho Do Canvas Quando O Tamanho Da Tela É Mudado
function windowResized() {
    pontos.forEach(ponto => {
        let novaPosicaoXDoPonto = (ponto.posicao.x - 0) * (windowWidth - 0) / (tamanhoAtualCanvas.x - 0) + 0;
        let novaPosicaoYDoPonto = (ponto.posicao.y - 0) * (windowHeight - 0) / (tamanhoAtualCanvas.y - 0) + 0;

        ponto.posicao = createVector(novaPosicaoXDoPonto,novaPosicaoYDoPonto);
    })

    tamanhoAtualCanvas = createVector(windowWidth, windowHeight);

    resizeCanvas(windowWidth, windowHeight);
}