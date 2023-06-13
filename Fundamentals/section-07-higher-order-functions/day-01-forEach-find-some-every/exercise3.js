// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaNota = (solucao, resposta) => {
  if (solucao === resposta) {
    return 1;
  } else if (resposta === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

const contaNota = (solucao, resposta, callback) => {
  let contador = 0;
  for (let index = 0; index < solucao.length; index += 1) {
    const callbackRetorno = callback(solucao[index], resposta[index]);
    contador += callbackRetorno;
  }
  return contador;
};

console.log(contaNota(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaNota));
