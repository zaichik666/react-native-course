// Fashion store “Loli”

let skirtPrice = 60;
let pantsPrice = 90;
let skirtCount = 100;
let pantsCount = 150;
let skirtSold = 50;
let pantsSold = 40;
let skirtRevenue = skirtSold * skirtPrice;
let pantsRevenue = pantsSold * pantsPrice;
let revenueBalance = skirtRevenue > pantsRevenue;
console.log(
  "Is revenue from skirts more than revenue from pants?",
  revenueBalance
);

// Cherry pie

let flourAmout = 1;
let weightMultiplier = 0.25;
alert(`Granny! Your pie will weigh ${flourAmout * weightMultiplier} kilogram!`);

// Basketball game

let tom = 165;
let nick = 175;
let alex = 173;
if (tom > nick && tom > alex) {
  console.log("Tom is highest");
} else if (nick > tom && nick > alex) {
  console.log("Nick is highest");
} else {
  console.log("Alex is highest");
}


// Camping

function camping(rain) {
  if (rain) {
    console.log("I'm staying home");
  } else {
    console.log("I'm going camping");
  }
}
camping(false);

// Sephora

let elsa = 45 + 56;
let amanda = 60 + 15;
if (elsa > 100) {
  console.log("Elsa will receive a 15% discount");
}
if (amanda > 100) {
  console.log("Amanda will receive a 15% discount");
}

// Fashion store "Loli 2"

function tShirts(n) {
  console.log(n > 0 ? n + " T-shirts left" : "T-shirts are not available");
}
tShirts(10);


// Fashion store "Loli 3"

let dressSold = [0, 10, 0, 60, 0, 39, 0];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dressPrice = 50;
function dress(day) {
  console.log(dressSold[days.indexOf(day)]);
}
dress("Wednesday");
function bonus() {
  dressSold.forEach((value, index) => {
    if (value * dressPrice >= 1000) {
      console.log(days[index]);
    }
  });
}

// Party time

let cocktail = "Vodka, liqueur, juice, pineapple, raspberry, ice";
let ingridients = cocktail.split(", ");
let newCocktail = ingridients.filter((element) => element !== "pineapple").join(", ");
console.log(newCocktail.includes('pineapple')?"I won't come here again." : "Delicious");


// Weekdays
weekPlan(day) {
    switch (day) {
        case 'Monday':
            console.log('Alan goes to the gym')
            break
        case 'Wednesday':
            console.log('Nick goes dancing')
            break
        case 'Sunday':
            console.log('The grandmother goes to church')
            break
        default:
            break
    }
}

