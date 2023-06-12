// Exercício 1
const pai = document.getElementById("elementoOndeVoceEsta").parentNode
let novoElemento = document.createElement('section');
pai.appendChild(novoElemento);

// Exercício 2
const filho = document.getElementById("elementoOndeVoceEsta");
let filhoDoFilho = document.createElement('section');
filho.appendChild(filhoDoFilho);

// Exercício 3
const PaiDofilhoDoPrimeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
PaiDofilhoDoPrimeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// Exercício 4
const acessoTerceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentNode.parentNode.nextElementSibling;
