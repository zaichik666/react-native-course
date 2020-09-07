function soldDresses(dayOfWeek, numberOfDressesSold) {
  if (numberOfDressesSold === undefined) {
    return null;
  } else {
    return numberOfDressesSold;
  }
}

let mondaySoldDresses = soldDresses("Monday", 10);
let tuesdaySoldDresses = soldDresses("Tuesday");
let wednesdaySoldDresses = soldDresses("Wednesday", 60);
let thursdaySoldDresses = soldDresses("Thursday");
let fridaySoldDresses = soldDresses("Friday", 39);
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

function salesCount(numberOfDressesSold) {
  daySales = numberOfDressesSold * 50;
  return daySales;
}

/**Function  dayOfBonusSalary()
 * checks a specific day
 * on the condition of receiving a bonus salary */

function dayOfBonusSalary(dayOfWeek, numberOfDressesSold) {
  let sales = salesCount(numberOfDressesSold);

  if (sales > 1000) {
    return dayOfWeek;
  } else {
    return `No bonus on ${dayOfWeek}`;
  }
}

let checkedTuesdayBonus = dayOfBonusSalary("Tuesday", 39);
console.log(
  `The employees will receive the bonus on ${checkedTuesdayBonus} `
);
