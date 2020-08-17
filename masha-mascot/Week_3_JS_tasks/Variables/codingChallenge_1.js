let heighMark = 178;
let heightJohn = 190;

let massMark = 80;
let massJohn = 100;

let BMI_Mark = massMark / (heightMark * heightMark);
let BMI_John = massJohn / (heightJohn * heightJohn);

let isMarkBMS_higher = BMI_Mark > BMI_John;

console.log(`Is Mark's BMI higher than John's? ${isMarkBMS_higher}`);