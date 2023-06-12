//Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {}

function addProperty(object, key, value) {
  object[key] = value;
}
addProperty(student, 'firstName', 'Felipe')
addProperty(student, 'email', 'feduarte.dev@gmail.com');
addProperty(student, 'telefone', '53984135250')
console.log(student)

