let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//-------------------------------//

// function addNewKey(obj, key, value) {
//   obj[key] = value;
// }

// addNewKey(lesson2, 'turno', 'noite');
// console.log(lesson2);

//-------------------------------//

// function listKeys(obj) {
// return Object.keys(obj);
// }

// console.log(listKeys(lesson1));

//-------------------------------//

// function objSize(obj) {
// return Object.keys(obj).length  
// }

// console.log(objSize(lesson1));

//-------------------------------//

// function objValue(obj) {
// return Object.values(obj)
// }

// console.log(objValue(lesson1))

//-------------------------------//

let allLessons = Object.assign({}, { 
  lesson1: lesson1, 
  lesson2: lesson2, 
  lesson3: lesson3, 
});

// console.log(allLessons);

//-------------------------------//
let key = '0';
for (key in allLessons) {
 let value = '0';
for (value in key) {
  console.log(Object.values(key))
}
}



// function allStudents(obj) {
//   let students1 = Object.values(lesson1.numeroEstudantes)
//   let students2 = Object.values(lesson2.numeroEstudantes)
//   let students3 = Object.values(lesson2.numeroEstudantes)
// return students1 + students2 + students1;
// }

// console.log(allStudents(allLessons))