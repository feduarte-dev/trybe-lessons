//Faça uma função que verifica se os lados de um triângulo são numeros inteiros e positivos.
function infoTriangle(l1, l2, l3) {
  function checkIntegerPositive(l1, l2, l3) {
    if (
      Number.isInteger(l1) &&
      l1 > 0 &&
      Number.isInteger(l2) &&
      Number.isInteger(l3) &&
      l2 > 0 &&
      l3 > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  let inteiro = checkIntegerPositive(l1, l2, l3);

  //Faça uma função que verifica se é possível haver um triângulo com os parametros da função.
  function checkItsATriangle(l1, l2, l3) {
    if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
      return true;
    } else {
      return false;
    }
  }

  let triangulo = checkItsATriangle(l1, l2, l3);

  //Faça uma função que retorne o tipo do triângulo.
  function checkWitchTriangle(l1, l2, l3) {
    if (l1 !== l2 && l1 !== l3 && l2 !== l3) {
      return 'escaleno';
    } else if (l1 == l2 && l1 == l3 && l2 == l3) {
      return 'equilátero';
    } else {
      return 'isósceles';
    }
  }
  let qualTriangulo = checkWitchTriangle(l1, l2, l3);

//Faça uma função que verifique o perimetro do triângulo.
  function checkPerimeterTriangle(l1, l2, l3) {
    return l1 + l2 + l3;
  }

  let perimetro = checkPerimeterTriangle(l1, l2, l3);

  return (
    'O triângulo é ' +
    qualTriangulo +
    ' e seu perímetro vale ' +
    perimetro +
    ' cm.'
  );
}
console.log(infoTriangle(12, 12, 12));
