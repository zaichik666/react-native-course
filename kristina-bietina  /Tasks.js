

//🌿 Variables

/*- The warehouse of the fashion store “Loli” received 100 skirts for $60 and 150 pants for $90. They sold 50 skirts and 40 pants.
- 1. Assign variables for amount of items and for their prices.
- 2. Find your sales revenue.
- 3. Create a boolean variable that will determine what item earned the most revenue: skirts or pants?
- 4. Output the result to the console (For example, “We received more revenue from skirts? True”

    */
   

   var skirtsSold, pantsSold, skirtsPrice, pantsPrice,revenueSkirts, revenuePants;
   skirtsSold = 50;
   skirtsPrice = 60;
   pantsSold = 40;
   pantsPrice  = 90;

   //Revenue = Number of Units Sold x Average Price.

  revenueSkirts =  skirtsSold * skirtsPrice;
  console.log('Revenue for skirts is ' + revenueSkirts + '$. Well done!');

  revenuePants = pantsSold * pantsPrice;
  console.log(`Revenue for pants is ${revenuePants}$. Well done!`);

  if (revenuePants > revenueSkirts){
   console.log(`However, we received more revenue from pants, which is ${revenuePants}$`);
  }

  else if (revenuePants = revenueSkirts){
   console.log('Incredible, we received equal revenue from pants and skirts, which is ' + revenuePants + '$');
  }
   else {
       console.log('However, we received more revenue from skirts, which is ' + revenueSkirts + '$');
   }

alert('Congratulations with amazing results!');


/*

Your grandma decided to make a cherry pie.
For a cherry pie, she needs 3 eggs, 1 kilogram of flour, and 500 grams of cherries.
The weight of the cake will be 25% of the amount of flour.
1. Display an alert with the phrase "Granny! Your pie will weigh ... a kilogram!"

*/


var cakeWeight, floorWeight;

floorWeight = 1;

// To calculate weight of the cake we need to calculate 25% from flourWeight

cakeWeight = floorWeight * 0.25;

alert(`Granny! Your pie will weigh ${cakeWeight} kilogram!`);

/*
Three schoolchildren decided to play basketball. Tom is 165 centimeters tall. Nick is 175 centimeters and Alex is 173 centimeters.
Determine which of the students is the highest and output the result to the console.

*/

var nickHeight, tomHeight, alexHeight;

nickHeight = 175;
tomHeight = 165;
alexHeight = 173;

switch(true){

   case tomHeight > alexHeight && tomHeight > nickHeight:
   console.log('Sorry, bros. Tom is the tallest guy in the area 🤷🏼‍♀️');
   break;
   case alexHeight > tomHeight && alexHeight <nickHeight:
   console.log('Sorry, bros. Alex is the tallest guy in the area 🤷🏼‍♀️');
   break;
   case nickHeight > alexHeight && nickHeight > tomHeight:
   console.log('Sorry, bros. Nick is the tallest guy in the area 🤷🏼‍♀️');
   break;
}

//Complete code challenge from the Section 2 of Udemy course (Exercise 12). Modified version

var massJohn,heightJohn,massMark,heightMark,name,bmiJohn, bmiMark;

var name = prompt('Hey, what is your name?');
if (name==='John') {
   massJohn =prompt('John, could you tell me your weight in kg?') ;
   heightJohn =prompt('And what is your height in meters?');

   bmiJohn = massJohn/(heightJohn*heightJohn);

   alert('Your BMI is ' + bmiJohn);

   if (bmiJohn>25){
   alert('Dont eat your mom please');
} 
else {
   alert('Eat some hamburgers bro');
}
}

else if (name==='Mark') {
   massMark =prompt('Mark, could you tell me your weight in kg?'); 
   heightMark=prompt('And what is your height in meters?'); 
   bmiMark = massMark/(heightMark*heightMark);
   alert('Your BMI is ' + bmiMark);
}
   if (bmiMark>25){
   alert('Dont eat your mom please');
} 
else {
   alert('Eat some hamburgers bro');
}

//🌿 If/else statement

/*

It's sunny in California, but the sky is covered with clouds.
John's wife - Natalie asks if they will go camping today?
John decided to check the weather and decide if they would go (if it didn't rain).
Write a function and print John's answer to the console depending on whether it's raining:
- I'm going camping.
- I'm staying home.

*/

function weather (rainy) {
   return (rainy ? 'I am staying home' : 'I am going camping');
}

console.log(weather(true));
console.log(weather(false));


//Or this piece of art

var weather;

weather = prompt('Dear Weather App, did it rain? P.S: answer yes or no');

if (weather === 'no'){
   console.log('I am going camping.');
}

else if (weather === 'yes') {
   alert('I am staying home...');
}


/*

Elsa and Amanda had $ 300 together and they bought cosmetics. Elsa bought $ 45 mascara and $ 56 powder. Amanda bought $ 60 perfume and $ 15 lipstick.
The store said that the discount will be received by the one who spent over $ 100.
Write a condition and print to the console who will receive a 15% discount.

*/

var amandaSpent, elsaSpent;

amandaSpent = 60 + 15;
elsaSpent = 45 + 56;

if (amandaSpent = 100) {
   console.log(`Amanda will receive 15% discount. Congrats!👏🏻 You will need to pay just ${amandaSpent - (amandaSpent * 0.15)}$`);
}

else if (elsaSpent = 100) {

   console.log('Elsa will receive 15% discount. Congrats! 👏🏻 You will need to pay just ' + elsaSpent - (elsaSpent* 0.15) + '$');
}



/*

- A customer calls to Loli to see how many blue T-shirts are in stock. Using the ternary operator, write a function that prints the response to the console:
- "N T-shirts left"
- “T-shirts are not available”.

*/


function getTshirt (isCustomerRude) {
   return (isCustomerRude ? 'T-shirts are not available' : '5 T-shirts left');
}

console.log(getTshirt(true));
console.log(getTshirt(false));


/*

Complete code challenge from the Section 2 of Udemy course (Exercise 18) 

*/




var scoreJohn, scoreMike, scoreMary, averageJohn, averageMike, averageMary;


scoreJohn=123;
scoreMike=123;
scoreMary=123;


averageJohn=scoreJohn/3;
console.log('Average score for John\`s team is ' + averageJohn);
averageMike=scoreMike/3;
console.log('Average score for Mike\`s team is ' + averageMike);
averageMary=scoreMary/3;
console.log('Average score for Mary\`s team is ' + averageMary);

switch(true){

case averageMike>averageJohn && averageMike>averageMary: console.log('Winner is Mike with average score ' +averageMike + ' points. Congratulations!');
break;
case averageJohn>averageJohn && averageJohn>averageMary:
console.log('Winner is John with average score ' +averageJohn + ' points. Congratulations!');
break;
case averageMary>averageJohn && averageMary>averageMike:
console.log('Winner is Mary with average score ' +averageMary + ' points. Congratulations!');
break;
case averageMike==averageJohn && averageMike==averageMary:
console.log('It is a draw. You all played well. Thank you for the game!');
break;

}

//🌿 Functions and arrays

/*

Loli store sells N dresses every day for $ 50 dress. 10 dresses were sold on Monday. 60 dresses on Wednesday. 39 dresses on Friday.
Write a function that will take the value of the number of dresses sold depending on the days of the week.

Loli employees receive a bonus if sales are higher than $ 1000. Write a function and output to the console: on which day the employees will receive the bonus.
*/




var monRevenue, wedRevenue, sunRevenue, dressPrice, monDressesSold, wedDressesSold, sunDressesSold;


function dressesSoldValue(weekday) {
   dressPrice = 50;
   monDressesSold = 10;
   wedDressesSold = 60;
   sunDressesSold = 39;
   monRevenue = monDressesSold * dressPrice;
   wedRevenue = wedDressesSold * dressPrice;
   sunRevenue = sunDressesSold * dressPrice;
   
   switch(weekday){
       case weekday = 'monday':
       return 'Revenue on Monday was ' + monRevenue + '$✨';

       case weekday = 'wednesday':
       return 'Revenue on Wednesday was ' + wedRevenue + '$✨';

       case weekday = 'sunday':
       return 'Revenue on Sunday was ' + sunRevenue + '$✨';
   }
}


console.log(dressesSoldValue('monday'));
console.log(dressesSoldValue('wednesday'));
console.log(dressesSoldValue('sunday'));



if (monRevenue > 1000) {
console.log('Wow! Emploees will receive a bonus on Monday! 🎉');
}

if (wedRevenue > 1000){
console.log('Wow! Emploees will receive a bonus on Wednesday! 🎉');
}

if (sunRevenue > 1000){
console.log('Wow! Emploees will receive a bonus on Sunday! 🎉');
   }


/*

Using a switch/case, write a function that prints the following to the console:
- If it's Monday, then Alan goes to the gym.
- If it's Wednesday, then Nick goes dancing.
- If it's Sunday, then the grandmother goes to church.

*/


function myFunction(day){
   switch (day){
       case 'Monday': 
       return 'Alan goes to the gym';
   
       case 'Wednesday': 
       return 'Nick goes dancing';
   
       case 'Sunday': 
       return 'Grandmother goes to church';
   
       default:
       return 'Better ask mom, what is on the agenda, sis ❤️';
   }
   }
   var day = prompt('What day is today?');
   console.log(myFunction(day));




/*
Nick works at the bar. The guest ordered a drink.
The composition of the drink is string: "Vodka, liqueur, juice, pineapple, raspberry, ice".
The guest asked to remove pineapple from the cocktail. Transform the string into an array, remove the extra element, transfrom back to string and serve the right cocktail to the guest.
If the cocktail does not have pineapple, the guest will answer "Delicious" otherwise "I won't come here again." Help Nick make the right cocktail.

*/


let cocktail = 'Vodka, liqueur, juice, pineapple, raspberry, ice';
let ar = cocktail.split(', ');
console.log(ar);

let removed = ar.splice(3,1);
console.log(ar);

var x = ar.toString();
console.log(x);