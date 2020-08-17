'use strict'
let arrayBills = [124, 48, 268];

function calculeteTips(bill) {
  if (bill < 50) {
    return Math.round(bill * 0.2);
  } else {
    if (50 <= bill < 200) {
        return Math.round(bill * 0.15);
    } else {
        return Math.round(bill * 0.1);
    }
  }
}

let arrayTips = arrayBills.map(calculeteTips);
console.log(`Tips: ${arrayTips}`);
function sumBillsAndTps(bill, tips) {
    return bill + arrayTips[tips]   ;
}

let arrayBillsWithTips = arrayBills.map(sumBillsAndTps);
console.log(`Final bills: ${arrayBillsWithTips}`);