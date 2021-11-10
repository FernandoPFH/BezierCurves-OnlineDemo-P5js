class Ponto {
    constructor(nome,posicao,tamanho,corDoCirculo,corDoTexto,tamanhoDoTexto,mostrarNome=false) {
        this.nome = nome;
        this.posicao = posicao;
        this.tamanho = tamanho;
        this.mostrarNome = mostrarNome;

        this.corDoCirculo = corDoCirculo;

        this.corDoTexto = corDoTexto;
        this.tamanhoDoTexto = tamanhoDoTexto;
    }

    // Desenhar O Ponto
    desenhar() {
        // Volta A Grossura Das Linhas Para O Padrão
        strokeWeight();

        // Desenha O Circulo Do Ponto
        stroke(this.corDoCirculo);
        fill(this.corDoCirculo);
        circle(
            this.posicao.x,
            this.posicao.y,
            this.tamanho
        );

        // Checar Se Deve Desenhar Texto
        if (this.mostrarNome) {
            // Desenha O Texto Do Ponto
            stroke(this.corDoTexto);
            fill(this.corDoTexto);
            textSize(this.tamanhoDoTexto);
            text(
                this.nome,
                this.posicao.x-this.tamanhoDoTexto/3,
                this.posicao.y+this.tamanhoDoTexto/3
            );
        }
    }

    // Checa Se O Mouse Está Em Cima Do Ponto
    mouseEstaEmCima(mouseX,mouseY) {
        return Math.abs(mouseX - this.posicao.x) < this.tamanho/2 && Math.abs(mouseY - this.posicao.y) < this.tamanho/2;
    }
}