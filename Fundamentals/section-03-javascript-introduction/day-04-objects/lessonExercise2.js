// Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.

let student = {};

function addProperty(object, key, value) {
  object[key] = value;
}
addProperty(student, 'firstName', 'Felipe');
addProperty(student, 'email', 'feduarte.dev@gmail.com');
addProperty(student, 'telefone', '53984135250');
console.log(student);
