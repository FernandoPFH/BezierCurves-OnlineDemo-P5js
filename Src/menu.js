// Abri O Menu De Configurações
function abrirMenu() {
    document.getElementsByClassName("Modal-Background")[0].style.display = "block";
    document.getElementsByClassName("Modal")[0].style.display = "block";
}

// Fecha O Menu De Configurações
function fecharMenu() {
    document.getElementsByClassName("Modal-Background")[0].style.display = "none";
    document.getElementsByClassName("Modal")[0].style.display = "none";
}

// Converte O Canvas Em PNG E Baixa O Arquivo
function baixarImagemDoCanvas() {
    let canvas = document.getElementsByClassName("p5Canvas")[0];

    const tagA = document.createElement("a");

    document.body.appendChild(tagA);
    tagA.href = canvas.toDataURL();
    tagA.download = "CurvaBezier.png";
    tagA.click();
    document.body.removeChild(tagA);
}