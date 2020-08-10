/*
***********************************

1. Fashion store “Loli”
    - The warehouse of the fashion store “Loli” received 100 skirts for $60 and 150 pants for $90. They sold 50 skirts and 40 pants.
    - 1. Assign variables for amount of items and for their prices.
    - 2. Find your sales revenue.
    - 3. Create a boolean variable that will determine what item earned the most revenue: skirts or pants?
    - 4. Output the result to the console (For example, “We received more revenue from skirts? True” */

let s = 100;
let sCost = 60;
let p = 150;
let pCost = 90;

let sSold = 50;
let pSold = 40;
console.log(
  `We received more revenue from skirts? ${sSold * sCost > pSold * pCost}`
);

/*  *******************************************

2. Your grandma decided to make a cherry pie.
For a cherry pie, she needs 3 eggs, 1 kilogram of flour, and 500 grams of cherries.
The weight of the cake will be 25% of the amount of flour.
1. Display an alert with the phrase "Granny! Your pie will weigh ... a kilogram!" */

let flourWeigh = 1;
let pieWeight = (flourWeigh * 25) / 100;
console.log(`Granny! Your pie will weigh ${pieWeight} kilogram!`);

/* ********************************************

3. Three schoolchildren decided to play basketball. Tom is 165 centimeters tall. Nick is 175 centimeters and Alex is 173 centimeters.
Determine which of the students is the highest and output the result to the console.
*/

let nick = 175;
let alex = 173;
let tom = 165;

let result = "";

if (nick > alex && nick > tom) {
  result = "Nick";
} else if (alex > nick && alex > tom) {
  result = "Alex";
} else if (tom > alex && tom > nick) {
  result = "Tom";
} else {
  result = "equal height";
}

console.log(result);

/* ********************************************

4. BMI = mass / (height ^ 2) mass in kg & height in meter
1. store mass and height
2. calc BMI
3. Mark has a higer BMI than John
4. print a string Is Mark's BMI higher
*/

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

function getBMI(m, h) {
  return Math.round((m * 100) / (h * h)) / 100;
}
let bmiMark = getBMI(massMark, heightMark);
let bmiJohn = getBMI(massJohn, heightJohn);

let result = "";

if (bmiMark > bmiJohn) {
  result = "Mark's BMI higher";
} else if (bmiJohn > bmiMark) {
  result = "John's BMI higher";
} else {
  result = "equal BMI";
}

console.log(result);

/* ********************************************

5. It's sunny in California, but the sky is covered with clouds.
John's wife - Natalie asks if they will go camping today?
John decided to check the weather and decide if they would go (if it didn't rain).
Write a function and print John's answer to the console depending on whether it's raining:
- I'm going camping.
- I'm staying home.
*/

function whatToDo(isRainy) {
  return isRainy ? "I'm staying home" : "I'm going camping";
}

let rain = true;

console.log(whatToDo(rain));

/* ********************************************

6. Elsa and Amanda had $ 300 together and they bought cosmetics.
Elsa bought $ 45 mascara and $ 56 powder.
Amanda bought $ 60 perfume and $ 15 lipstick.
The store said that the discount will be received by the one who spent over $ 100.
Write a condition and print to the console who will receive a 15% discount. */

let mascara = 45;
let powder = 56;
let perfume = 60;
let lipstick = 15;
let elsa = mascara + powder;
let amanda = perfume + lipstick;

result = "";
if (elsa >= 100) {
  result = `Elsa receive a 15% discount`;
} else if (amanda >= 100) {
  result = `Amanda receive a 15% discount`;
} else result = `No discount here`;

console.log(result);

/* ********************************************

7.A customer calls to Loli to see how many blue T-shirts are in stock.
Using the ternary operator,
write a function that prints the response to the console:
- "N T-shirts left"
- “T-shirts are not available”. */

function answer(n) {
  return n ? `${n} T-shirts left` : `T-shirts are not available`;
}

let tshirts = 6;
console.log(answer(tshirts));

/* ********************************************

challenge
*/

let john = [89, 120, 103];
let mark = [116, 94, 123];
let mary = [97, 134, 165];

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return Math.round((sum * 100) / arr.length) / 100;
}

let averageJohn = getAverage(john);
let averageMark = getAverage(mark);
let averageMary = getAverage(mary);

let result = "";

if (averageJohn > averageMark && averageJohn > averageMary) {
  result = `John's team wins with ${averageJohn} points`;
} else if (averageMark > averageJohn && averageMark > averageMary) {
  result = `Mark's team wins with ${averageMark} points`;
} else if (averageMary > averageJohn && averageMary > averageMark) {
  result = `Mary's team wins with ${averageMary} points`;
} else {
  result = "There is a draw";
}

console.log(result);

/* ********************************************

- Loli store sells N dresses every day for $ 50 dress.
10 dresses were sold on Monday.
60 dresses on Wednesday.
39 dresses on Friday.
Write a function that will take the value of the number of dresses
sold depending on the days of the week.

- Loli employees receive a bonus if sales are higher than $ 1000.
Write a function and output to the console: on which day the
employees will receive the bonus.
*/

function sales(dayStr) {
  switch (dayStr) {
    case "monday": {
      return 10;
    }
    case "wednesday": {
      return 60;
    }
    case "friday": {
      return 39;
    }
    default: {
      return 0;
    }
  }
}

let days = ["monday", "wednesday", "friday"];
let dressPrice = 50;

days.forEach((day) => {
  let daySales = sales(day);
  let revenue = daySales * dressPrice;
  if (revenue > 1000) {
    console.log(day);
  }
});

/* ********************************************

Nick works at the bar. The guest ordered a drink.
The composition of the drink is string:
"Vodka, liqueur, juice, pineapple, raspberry, ice".
The guest asked to remove pineapple from the cocktail.
Transform the string into an array, remove the extra element,
transfrom back to string and serve the right cocktail to the guest.

If the cocktail does not have pineapple, the guest will answer
"Delicious" otherwise "I won't come here again."
Help Nick make the right cocktail.
*/

const cocktail = "Vodka, liqueur, juice, pineapple, raspberry, ice";
const remove = "pineapple";

const newCocktail = cocktail
  .split(", ")
  .filter((it) => it !== remove)
  .join(", ");
console.log(
  newCocktail.indexOf(remove) === -1 ? "Delicious" : "I won't come here again."
);

/* ********************************************

Using a switch/case, write a function that prints the following
to the console:
- If it's Monday, then Alan goes to the gym.
- If it's Wednesday, then Nick goes dancing.
- If it's Sunday, then the grandmother goes to church.
*/

const day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Alan goes to the gym");
    break;
  case "Wednesday":
    console.log("Nick goes dancing");
    break;
  case "Sunday":
    console.log("grandmother goes to church");
    break;
}

/* ********************************************
challenge
*/

const bills = [124, 48, 268];

function calc(bill) {
  let tip = 0;

  if (bill < 50) tip = 20;
  else if (bill < 200) tip = 15;
  else tip = 10;

  return (bill * tip) / 100;
}

const tips = bills.map((it) => calc(it));

const finalAmounds = bills.map((it, i) => it + tips[i]);

console.log(tips, finalAmounds);

/* ***************************************

challenge
*/

function User(mass, height) {
  this.mass = mass;
  this.height = height;
  this.getBmi = function () {
    this.bmi =
      Math.round((this.mass * 100) / (this.height * this.height)) / 100;
  };
}

let john = new User(92, 1.95);
let mark = new User(78, 1.69);

mark.getBmi();
john.getBmi();
console.log(john.bmi, mark.bmi);

/* ********************************************
challenge
*/

function tipPercent(amount) {
  if (amount < 50) {
    return 20;
  } else if (amount < 200) {
    return 15;
  }
  return 10;
}

let restaurants = {
  bills: [124, 48, 268, 180, 42],
  calcTip: function () {
    this.tips = [];
    this.fullPrice = [];
    for (let i = 0; i < this.bills.length; i += 1) {
      this.tips.push((this.bills[i] * tipPercent(this.bills[i])) / 100);
      this.fullPrice.push(this.bills[i] + this.tips[i]);
    }
  },
};

restaurants.calcTip();

console.log(restaurants.tips, restaurants.fullPrice);

/* **********************************

Amanda is living alone. She has a lot of cats and nobody knows how much exactly.
Once you came over and see all cats. Find out exactly how you should respond,
depending on the number of cats she has. The number of cats will always be a
number and there will always be at least 1 cat.
*/

function response(numberOfCats) {
  if (numberOfCats <= 3) return "Awwww";
  else if (numberOfCats <= 15) return "Ohhh";
  else return "OMG";
}

/* ************************************
- Party evening

Your mom asked you to clean up your closet a hundred times.
const closet = ["blouse", "t-shirt", "chips", "shoes", "bag", "socks"]

Just today, when the closet is a mess, you need to find shoes.
Find the shoes and print the response "I found the shoes" to the console.
*/

const closet = ["blouse", "t-shirt", "chips", "shoes", "bag", "socks"];
const thing = "shoes";
console.log(
  closet.includes(thing) ? "I found the shoes" : "Clean up your closet"
);

/* *********************************
Your task is to create canDivide to check if an integer number
is divisible by each out of two arguments.
*/

function canDivide(number, div1, div2) {
  return number % div1 === 0 && number % div2 === 0;
}

console.log(canDivide(50, 5, 25));

/* *********************************

Amanda calls Tom. There are gaps in her speech.
Write a function that removes any gaps in Amanda's speech.

const speech = ['Hi', 'Tom!', 'I', '', 'can`t', 'hear', '', '.', 'you', 'How', '', 'are', 'you', '?']
*/

const speech = [
  "Hi",
  "Tom!",
  "I",
  "",
  "can`t",
  "hear",
  "",
  ".",
  "you",
  "How",
  "",
  "are",
  "you",
  "?",
];

console.log(speech.filter((it) => it !== ""));

/* ***********************************
Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s),
and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input,
and returns the time it takes for that petal to reach the ground from
the same branch.
*/

function sakuraFall(v) {
  const s = 80 * 5;
  if (+v <= 0) return 0;
  return s / +v;
}
