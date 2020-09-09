// Coding challenge 1
let massMark = 65;
let massJohn = 66;
let heightMark = 178;
let heightJohn = 179;
let bmiMark = massMark / (heightMark * heightMark);
let bmijohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmijohn);
let markHigerBmi = bmiMark > bmijohn;
if (markHigerBmi) {
  console.log("Mark's BMI is higer than John");
} else {
  console.log("John's BMI is higer than Mark");
}

// Coding challenge 2

averageScorejohn = (89 + 120 + 103) / 3;
averageScoreMark = (116 + 94 + 123) / 3;
averageScoreMary = (97 + 134 + 105) / 3;
console.log(
  averageScorejohn +
    " - Score john. " +
    averageScoreMark +
    " - Score Mark. " +
    averageScoreMary +
    " - Score Mary. "
);
switch (true) {
  case averageScorejohn > averageScoreMark &&
    averageScorejohn > averageScoreMary:
    console.log("john won!!! Count: " + averageScorejohn);
    break;
  case averageScoreMark > averageScorejohn &&
    averageScoreMark > averageScoreMary:
    console.log("Mark won!!! Count: " + averageScoreMark);
    break;
  case averageScoreMary > averageScorejohn &&
    averageScoreMary > averageScoreMark:
    console.log("Mary won!!! Count: " + averageScoreMary);
    break;
  default:
    console.log("It's a draw");
    break;
}

// Coding challenge 3 ( my decision)

let bills = [10, 100, 1000];
let tips = [];
let amountBillTip = [];
function tip() {
  for (let i = 0; i < bills.length; i++) {
    switch (true) {
      case bills[i] < 50:
        tips[i] = bills[i] * 0.2;
        break;
      case bills[i] >= 50 && bills[i] <= 200:
        tips[i] = bills[i] * 0.15;
        break;
      case bills[i] > 200:
        tips[i] = bills[i] * 0.1;
        break;
    }
  }
}
tip();
for (let i = 0; i < bills.length; i++) {
  amountBillTip[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(amountBillTip);

// Coding challenge 3 (teacher's decision)

function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

let bills = [10, 100, 1000];
let tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

let amountBillTip = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];

console.log(tips);
console.log(amountBillTip);

// Coding challenge 4
function bmi() {
  return this.mass / this.height ** 2;
}
let this = {
  fullName: "Mark",
  mass: 120,
  height: 1.78,
  bmi,
};
let john = {
  fullName: "John",
  mass: 100,
  height: 1.79,
  bmi,
};

console.log(this.bmi(), john.bmi());

if (this.bmi() > john.bmi()) {
  console.log(
    "Mark's BMI is higer than John's. It is a " +
      this.bmi() +
      "!!! WOW!!! " +
      this.fullName +
      " is fat!"
  );
} else if (john.bmi() > this.bmi()) {
  console.log(
    "John's BMI is higer than Mark's. It is a " +
      john.bmi() +
      "!!! WOW!!!" +
      john.fullName +
      " is fat!"
  );
} else {
  console.log("John's and Mark's BMI is the same");
}

// Coding challenge 5

let jhon = {
  fullName: "Jhon blabla",
  bills: [10, 100, 200, 164, 1],
  tipCalculator: function () {
    this.tips = [];
    this.amountBillTip = [];
    for (let i = 0; i < this.bills.length; i++) {
      switch (true) {
        case this.bills[i] < 50:
          this.tips[i] = this.bills[i] * 0.2;
          break;
        case this.bills[i] >= 50 && this.bills[i] <= 200:
          this.tips[i] = this.bills[i] * 0.15;
          break;
        case this.bills[i] > 200:
          this.tips[i] = this.bills[i] * 0.1;
          break;
      }
      this.amountBillTip[i] = this.bills[i] + this.tips[i];
    }
  },
};
jhon.tipCalculator();
console.log(jhon);

// Coding challenge 5 EXTRA

let mark = {
  fullName: "Mark blabla",
  bills: [10, 100, 50, 130, 1],
  tips: [],
  amountBillTip: [],
};

function calculatTip() {
  let percentage;

  for (let i = 0; i < mark.bills.length; i++) {
    let bill = mark.bills[i];
    switch (true) {
      case bill < 100:
        percentage = 0.2;
        break;
      case bill >= 100 && bill <= 300:
        percentage = 0.1;
        break;
      case bill > 300:
        percentage = 0.25;
        break;
    }
    mark.tips[i] = bill * percentage;
    mark.amountBillTip[i] = bill + mark.tips[i];
  }
}

calculatTip();
console.log(mark);

let summTipsMark = 0;
let summTipsJhon = 0;
for (let i = 0; i < mark.tips.length; i++) {
  summTipsMark += mark.tips[i];
}
for (let i = 0; i < jhon.tips.length; i++) {
  summTipsJhon += jhon.tips[i];
}
let averageTipsMark = summTipsMark / mark.tips.length;
let averageTipsJhon = summTipsJhon / jhon.tips.length;

console.log(averageTipsMark, averageTipsJhon);
switch (true) {
  case averageTipsMark > averageTipsJhon:
    console.log("Mark is more qenerous");
    break;
  case averageTipsMark < averageTipsJhon:
    console.log("Jhon is more qenerous");
    break;
  default:
    console.log("Jhon and Mark are qenerous");
}


