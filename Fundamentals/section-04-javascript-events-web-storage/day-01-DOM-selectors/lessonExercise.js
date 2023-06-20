// Recupere o título através do id.
const title = document.getElementById('page-title');

// Altere o texto do título através da propriedade innerText.
title.innerText = 'Interestelar';

// Recupere o primeiro parágrafo através do id.
const firstParagraph = document.getElementById('first-paragraph');

// Altere o texto do primeiro parágrafo através da propriedade innerText.
firstParagraph.innerText =
  'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.';

// Recupere o subtítulo através do id.
const subtitle = document.getElementById('subtitle');

// Altere o texto do subtítulo através da propriedade innerText.
subtitle.innerText = 'Principais informações';

// Recupere todos os parágrafos através do nome da classe.
const paragraphs = document.getElementsByClassName('paragraph-style');

// Como a função getElementsByClassName retorna uma lista, selecione o primeiro item através da notação de colchetes. Então acesse a propriedade style e dentro dela acesse a propriedades que você precisa alterar, no caso fontStyle e atribua o novo valor.
const firstItem = paragraphs[0];
firstItem.style.fontStyle = 'italic';

// Recupere o segundo parágrafo através do id.
const secondParagraph = document.getElementById('second-paragraph');

// Altere o texto do segundo parágrafo através da propriedade innerText.
secondParagraph.innerText =
  'Direção: Christopher Nolan. Roteirista: Jonathan Nolan e Christopher Nolan';

// Recupere todos os títulos que possuem a tag h2.
const subtitleh2 = document.getElementsByTagName('h2');

// Como a função getElementsByTagName retorna uma lista, selecione o primeiro item através da notação de colchetes. Então acesse a propriedade style e dentro dela acesse a propriedade color que altera a cor da fonte e atribua uma nova cor.
subtitleh2[0].style.color = 'grey';
