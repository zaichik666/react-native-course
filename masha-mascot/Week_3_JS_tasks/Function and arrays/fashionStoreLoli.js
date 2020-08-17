/**Function soldDresses() returns the number of dresses sold.
 * The result of function depends on which parameters user is used.
 */
function soldDresses(dayOfWeek, numberOfDressesSold) {
  switch (dayOfWeek) {
    case "Monday":
      return 10;

    case "Tuesday":
      return numberOfDressesSold;

    case "Wednesday":
      return 60;

    case "Thursday":
      return numberOfDressesSold;

    case "Friday":
      return 39;

    case "Saturday":
      return numberOfDressesSold;

    case "Sunday":
      return numberOfDressesSold;

    default:
      return "The day isn't correct";
  }
}

/**Variables that store the result of the function soldDresses() for each day*/
let mondaySoldDresses = soldDresses("Monday");
let tuesdaySoldDresses = soldDresses("Tuesday");
let wednesdaySoldDresses = soldDresses("Wednesday");
let thursdaySoldDresses = soldDresses("Thursday");
let fridaySoldDresses = soldDresses("Friday");
let saturdaySoldDresses = soldDresses("Saturday");
let sundaySoldDresses = soldDresses("Sunday");

console.log(
  `Sales of dresses: 
  ${mondaySoldDresses},
  ${tuesdaySoldDresses},
  ${wednesdaySoldDresses},
  ${thursdaySoldDresses},
  ${fridaySoldDresses},
  ${saturdaySoldDresses},
  ${sundaySoldDresses}.`
);

function salesCount(numberOfDressesSold) {
  daySales = numberOfDressesSold * 50;
  return daySales;
}
/**Sales for each day*/
let mondaySales = salesCount(mondaySoldDresses);
let tuesdaySales = salesCount(tuesdaySoldDresses);
let wednesdaySales = salesCount(wednesdaySoldDresses);
let thursdaySales = salesCount(thursdaySoldDresses);
let fridaySales = salesCount(fridaySoldDresses);
let saturdaySales = salesCount(saturdaySoldDresses);
let sundaySales = salesCount(saturdaySoldDresses);

/**The function checks all days for the condition of receiving the bonus
 * and returns the day of the week that this condition passes
 */
function bonusSalary() {
  switch (true) {
    case mondaySales > 1000:
      return "Monday";

    case tuesdaySales > 1000:
      return "Tuesday";

    case wednesdaySales > 1000:
      return "Wednesday";

    case thursdaySales > 1000:
      return "Thursday";

    case fridaySales > 1000:
      return "Friday";

    case saturdaySales > 1000:
      return "Saturday";

    case sundaySales > 1000:
      return "Sunday";

    default:
      return "The day isn't correct";
  }
}

let whenEmployeesGetBonus = bonusSalary();

console.log(
  `The employees will receive the bonus on ${whenEmployeesGetBonus} `
);

