const geraEmail = (nomeCompleto) => {
  let array = nomeCompleto.split(' ');
  let email = array.join("_");
  return {Nome: nomeCompleto, Email: `${email.toLowerCase()}@trybe.com`}
}

const newEmployees = () => {
  const employees = {
    id1: geraEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: geraEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: geraEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());