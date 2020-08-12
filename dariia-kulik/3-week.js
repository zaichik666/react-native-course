/*- Fashion store “Loli”
- The warehouse of the fashion store “Loli” received 100 skirts for $60 and 150 pants for $90.They sold 50 skirts and 40 pants.
    - 1. Assign variables for amount of items and for their prices.
    - 2. Find your sales revenue.
    - 3. Create a boolean variable that will determine what item earned the most revenue: skirts or pants ?
    - 4. Output the result to the console(For example, “We received more revenue from skirts ? True”*/

const skirts = 50
const skirtsPrice = 60
const pants = 40
const pantsPrice = 90
const revenueS = skirts * skirtsPrice
const revenueP = pants * pantsPrice

function res() {
    return revenueP > revenueS ? 'We received more revenue from pants' : revenueP < revenueS ? 'We received more revenue from skirts' : ' Revenue from pants and skirts are equal'
}
console.log(res())



/*   - Cherry pie
- Your grandma decided to make a cherry pie.
For a cherry pie, she needs 3 eggs, 1 kilogram of flour, and 500 grams of cherries.
The weight of the cake will be 25 % of the amount of flour.
1. Display an alert with the phrase "Granny! Your pie will weigh ... a kilogram!"*/
const flourWeigh = 1
const pieWeight = flourWeigh * 0.25
console.log(`Granny! Your pie will weigh ${pieWeight} kilogram!`)

/*- Three schoolchildren decided to play basketball.Tom is 165 centimeters tall.Nick is 175 centimeters and Alex is 173 centimeters.
Determine which of the students is the highest and output the result to the console.*/

const nickHeigh = 175
const alexHeigh = 173
const tomHeigh = 165

function res() {

    if (nickHeigh > alexHeigh && nickHeigh > tomHeigh) {
        return 'Nick'
    } if (alexHeigh > nickHeigh && alexHeigh > tomHeigh) {
        return 'Alex'
    } if (tomHeigh > alexHeigh && tomHeigh > nickHeigh) {
        return 'Tom'
    } return 'same heigh'
}

console.log(res())


function res() {
    return nickHeigh > alexHeigh && nickHeigh > tomHeigh ? 'Nick' : alexHeigh > nickHeigh && alexHeigh > tomHeigh ? 'Alex' : tomHeigh > alexHeigh && tomHeigh > nickHeigh ? 'Tom' : 'same heigh'
}

console.log(res())


/*Complete code challenge from the Section 2 of Udemy course(Exercise 12) */
const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / Math.pow(heightMark, 2)
const BMIJohn = massJohn / Math.pow(heightJohn, 2)
console.log(BMIMark, BMIJohn)

function res() {
    return BMIMark > BMIJohn ? 'Mark`s BMI higher than John`s' : BMIJohn > BMIMark ? 'John`s BMI higher than Mark`s' : 'Mark and John have equal BMI'
}

console.log(res())
/* 
   - Camping
   - It's sunny in California, but the sky is covered with clouds.
John's wife - Natalie asks if they will go camping today?
John decided to check the weather and decide if they would go(if it didn't rain).
Write a function and print John's answer to the console depending on whether it's raining:
- I'm going camping.
   - I'm staying home.*/
function camping(weather) {
    return weather === 'good weather' ? 'John is going camping' : 'John is staying home'
}

console.log(camping('good weather'))
console.log(camping('raining'))

/* Sephora
- Elsa and Amanda had $ 300 together and they bought cosmetics.Elsa bought $ 45 mascara and $ 56 powder.Amanda bought $ 60 perfume and $ 15 lipstick.
The store said that the discount will be received by the one who spent over $ 100.
Write a condition and print to the console who will receive a 15 % discount.*/


const Elsa = 20 + 56
const Amanda = 88 + 15

function res() {
    if (Elsa >= 100) {
        return 'Elsa receive a 15% discount'
    } if (Amanda >= 100) {
        return 'Amanda receive a 15% discount'
    } return 'No discount'
}
console.log(res())


function res() {
    return Elsa >= 100 ? 'Elsa receive a 15% discount' : Amanda >= 100 ? 'Amanda receive a 15% discount' : 'No discount'
}

console.log(res())



/* Fashion store "Loli"
    - A customer calls to Loli to see how many blue T - shirts are in stock.Using the ternary operator, write a function that prints the response to the console:
- "N T-shirts left"
    - “T - shirts are not available”.*/
function Tshirt(CustomPolite) {
    return CustomPolite ? '7 T-shirts left' : 'T-shirts are not available'
}

console.log(Tshirt(true))
console.log(Tshirt(false))
/* Complete code challenge from the Section 2 of Udemy course(Exercise 18)*/

const JohnScore = Math.round((89 + 120 + 103) / 3)
const MarkScore = Math.round((116 + 94 + 123) / 3)
const MaryScore = Math.round((97 + 134 + 165) / 3)

function res() {
    return JohnScore > MarkScore && JohnScore > MaryScore ? 'John`s team wins with ' + JohnScore + ' points' : MarkScore > JohnScore && MarkScore > MaryScore ? 'Mark`s team wins with ' + MarkScore + ' points' : MaryScore > JohnScore && MaryScore > MarkScore ? 'Mary`s team wins with ' + MaryScore + ' points' : 'No winners'
}
console.log(res())
/* - Fashion store "Loli"
     - Loli store sells N dresses every day for $ 50 dress. 10 dresses were sold on Monday. 60 dresses on Wednesday. 39 dresses on Friday.
Write a function that will take the value of the number of dresses sold depending on the days of the week.
 - Loli employees receive a bonus if sales are higher than $ 1000. Write a function and output to the console: on which day the employees will receive the bonus.*/

const Price = 50
const MondaySold = 10
const WednesdaySold = 60
const SundaySold = 39
const MondayRevenue = MondaySold * Price
const WednesdayRevenue = WednesdaySold * Price
const SundayRevenue = SundaySold * Price


function revenue(day) {
    switch (day) {
        case 'Monday':
            return 'Monday`s Revenue ' + MondayRevenue + '$'
        case 'Wednesday':
            return 'Wednesday`s Revenue ' + WednesdayRevenue + '$'
        case 'Sunday':
            return 'Sunday`s Revenue ' + SundayRevenue + '$'
        default:
            return 'I don`t know'

    }
}
function res() {
    return MondayRevenue > 1000 ? 'Bonus on Monday' : WednesdayRevenue > 1000 ? 'Bonus on Wednesday' : SundayRevenue > 1000 ? 'Bonus on Sunday' : 'No bonusses'

}


console.log(revenue('Wednesday'))
console.log(revenue('Thursday'))
console.log(res())
/*- Party time
    - Nick works at the bar.The guest ordered a drink.
The composition of the drink is string: "Vodka, liqueur, juice, pineapple, raspberry, ice".
The guest asked to remove pineapple from the cocktail.Transform the string into an array, remove the extra element, transfrom back to string and serve the right cocktail to the guest.
If the cocktail does not have pineapple, the guest will answer "Delicious" otherwise "I won't come here again." Help Nick make the right cocktail.*/

const a = cocktail.split(', ')
 const b = a.splice(3, 1)
 const z = a.toString()

 console.log(a)
 console.log(z)


/*  - Weekdays

Using

a switch/case, write a function that prints the following to the console:
- If it's Monday, then Alan goes to the gym.
    - If it's Wednesday, then Nick goes dancing.
        - If it's Sunday, then the grandmother goes to church.*/
function plans(day) {
    switch (day) {
        case 'Monday':
            return 'Alan goes to the gym'
        case 'Wednesday':
            return 'Nick goes dancing'
        case 'Sunday':
            return 'Grandmother goes to church'
        default:
            return 'I don`t know'

    }
}
console.log(plans('Monday'))
console.log(plans('Thursday'))

/* - Complete code challenge from the Section 2 of Udemy course (Exercise 23) 
/const bills = [124, 48, 268]

function tips(bill) {
    return bill < 50 ? '(20 * ' + bill + ')/100' : bill < 200 ? '(15 * ' + bill + ')/100' : ' (10 * ' + bill + ')/100'

}
console.log(tips(300))--- через тернанный пробовала но не получилось */
const bills = [124, 48, 268];

function tips(bill) {
    let tips
    if (bill < 50) {
        tips = 20 / 100
    } if (bill < 200) {
        tips = 15 / 100
    } if ((bill > 200)) {
        tips = 10 / 100
    } return (bill * tips)
}
const tip = [tips(bills[0]), tips(bills[1]), tips(bills[2])]
const BilTips = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]


console.log(tip, BilTips)


/*- Complete code challenge from the Section 2 of Udemy course(Exercise 27 and Exercise 30) */
const john = {
    name: 'John First', mass: 92, height: 1.95,
    bmi: function () {
        this.bmi = Math.round((this.mass * 100) / (this.height * this.height)) / 100
        return this.bmi
    }
}
const mark = {
    name: 'Mark Second', mass: 78, height: 1.69,
    bmi: function () {
        this.bmi = Math.round((this.mass * 100) / (this.height * this.height)) / 100
        return this.bmi
    }
}
function res() {
    return mark.bmi > john.bmi ? 'Mark`s BMI higher than John`s' : john.bmi > mark.bmi ? 'John`s BMI higher than Mark`s' : 'Mark and John have equal BMI'
}



john.bmi()
mark.bmi()
console.log(john, mark)
console.log(res())
