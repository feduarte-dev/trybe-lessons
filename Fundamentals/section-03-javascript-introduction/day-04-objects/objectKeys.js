// Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.

let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

for (let index in student1) {console.log(index, ' Nível: ', student1[index])}

for (let index in student2) {console.log(index, ' Nível: ', student2[index])}

// function listSkills(student) {
//   let arrayOfSkills = Object.keys(student);
//   for (let index in arrayOfSkills) {
//     console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);
