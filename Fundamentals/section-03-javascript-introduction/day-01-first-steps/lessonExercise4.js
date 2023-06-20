// Create a variable called “currentHour” that receives a number between 4 and 24, according to your choice, to represent the hours of the day.
// Create a variable called “message” that initially is an empty string.
// Implement the following conditionals:
//   -If the time is greater than or equal to 22, enter “We shouldn't eat anything, it's bedtime” in the “message” variable.
//   -If the time is greater than or equal to 18 and less than 22, insert “Evening food, let's have dinner :D” in the “message” variable.
//   -If the time is greater than or equal to 14 and less than 18, enter “Shall we bake a cake for breakfast?” in the “message” variable.
//   -If time is greater than or equal to 11 and less than 14, enter “Lunch time!!!” in the “message” variable.
//   -If the time is between 4 and 11, enter “Hmmm, smell of freshly brewed coffee” in the “message” variable.
//   Now print the message variable outside your conditions.
let currentHour;
currentHour = 17;

if (currentHour >= 22) {
  console.log('Não deveríamos comer nada, é hora de dormir');
} else if (currentHour >= 18 && currentHour < 22) {
  console.log('Rango da noite, vamos jantar :D');
} else if (currentHour >= 14 && currentHour < 18) {
  console.log('Vamos fazer um bolo pro café da tarde?');
} else if (currentHour >= 11 && currentHour < 14) {
  console.log('Hora do almoço!!!');
} else {
  console.log('Hmmm, cheiro de café recém-passado');
}