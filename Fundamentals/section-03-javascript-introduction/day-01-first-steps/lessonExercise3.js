// Create a variable that takes a candidate's grade in a technical challenge and assigns it a value between 1 and 100.
// Implement a logic that checks whether the candidate has been approved, rejected or is on the waiting list. To do this, consider the following information:
//   -If the grade is greater than or equal to 80, print “Congratulations, you are part of the group of approved people!”.
//   -If the score is less than 80 and greater than or equal to 60, print “You are on our waiting list.”.
//   -If the grade is less than 60, print "Unfortunately, you failed.".
// Create a conditional structure using if, else if and else to create your algorithm and the logical operators that apply to each situation.
// Change the note value to verify that the conditions you implemented work.
let nota;
nota = 0;

if (nota >= 80) {
  console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
} else if (nota < 80 && nota >= 60) {
  console.log('Você está na nossa lista de espera.');
} else {
  console.log('Infelizmente, você reprovou.');
}