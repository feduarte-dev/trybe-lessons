const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaNota = (solucao, resposta) => {
  if (solucao === resposta) {return 1}
  else if (resposta === 'N.A') {return 0}
  else {return -0.5}

}

const contaNota = (solucao, resposta, callback) => {
let contador = 0
for (let index = 0; index < solucao.length; index += 1) {
  const callbackRetorno = callback(solucao[index], resposta[index]);
  contador += callbackRetorno;
}
return contador;
};

console.log(contaNota(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaNota));