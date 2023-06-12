const validaParam = (name, age) => {
  if (name === undefined || age === undefined) {
    throw new Error('Todas as informações são necessárias');
  }
};
const validaAge = (age) => {
  if (age < 18) {
    throw new Error(
      'Ops, infelizmente nesse momento você não pode fazer as aulas'
    );
  }
};

const studentRegister = (name, age) => {
  try {
    validaParam(name, age);
    validaAge(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
};
console.log(studentRegister('felipe', 16));
