let setaDireita = window.document.getElementById("seta-direita");
let setaEsquerda = window.document.getElementById("seta-esquerda");

let cardLeornado = window.document.getElementById("leonardo");
let cardBruna = window.document.getElementById("bruna");

function moverParaDireita() {
  setaDireita.style.display = "none";
  cardLeornado.style.display = "none";
  cardBruna.style = "display:flex";
  setaEsquerda.style = "display:flex";
}

function moverParaEsquerda() {
  setaEsquerda.style.display = "none";
  cardBruna.style.display = "none";
  cardLeornado.style = "display:flex";
  setaDireita.style = "display:flex";
}
