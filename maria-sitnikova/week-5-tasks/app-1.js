// budget Controller

let budgetController = (function () {
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    totalIncome > 0
      ? (this.percentage = Math.round((this.value / totalIncome) * 100))
      : (this.percentage = -1);
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let calculateTotal = function (type) {
    data.totals[type] = data.allItems[type].reduce(function (s, cur) {
      return s + cur.value;
    }, 0);
  };

  let data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      let newItem;
      let ID =
        data.allItems[type].length === 0
          ? 0
          : data.allItems[type][data.allItems[type].length - 1].id + 1;

      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      return newItem;
    },

    deleteItem: function (type, id) {
      data.allItems[type] = data.allItems[type].filter((cur) => cur.id !== id);
    },

    calculateBudget: function () {
      calculateTotal("exp");
      calculateTotal("inc");
      data.budget = data.totals.inc - data.totals.exp;
      data.percentage =
        data.totals.inc > 0
          ? Math.round((data.totals.exp / data.totals.inc) * 100)
          : -1;
    },

    calculatePercentages: function () {
      data.allItems.exp.forEach((cur) => cur.calcPercentage(data.totals.inc));
    },

    getPercentages: function () {
      let allPerc = data.allItems.exp.map((cur) => {
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
    },
  };
})();

// UI controller

let UIController = (function () {
  let DOMStrings = {
    inputType: document.querySelector(".add__type"),
    inputDesc: document.querySelector(".add__description"),
    inputValue: document.querySelector(".add__value"),
    inputButton: document.querySelector(".add__btn"),
    incomeContainer: document.querySelector(".income__list"),
    expensesContainer: document.querySelector(".expenses__list"),
    budgetLabel: document.querySelector(".budget__value"),
    incomeLabel: document.querySelector(".budget__income--value"),
    expensesLabel: document.querySelector(".budget__expenses--value"),
    percentageLabel: document.querySelector(".budget__expenses--percentage"),
    container: ".container",
    expensesPercLabel: ".item__percentage",
    dateLabel: ".budget__title--month",
  };

  let formatNumber = function (num, type) {
    let [int, dec] = Math.abs(num).toFixed(2).split(".");

    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
    }

    let prefix = type === "exp" ? "-" : "+";

    return `${prefix} ${int}.${dec}`;
  };

  let nodeListForEach = function (list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getInput: function () {
      return {
        type: DOMStrings.inputType.value,
        description: DOMStrings.inputDesc.value,
        value: parseFloat(DOMStrings.inputValue.value),
      };
    },

    addListItem: function (obj, type) {
      let html;
      let element;
      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html = `<div class="item clearfix" id="inc-${obj.id}">
        <div class="item__description">${obj.description}</div>
        <div class="right clearfix">
          <div class="item__value">${formatNumber(obj.value, type)}</div>
          <div class="item__delete">
            <button class="item__delete--btn">
              <i class="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
      </div>`;
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;
        html = `<div class="item clearfix" id="exp-${obj.id}">
                  <div class="item__description">${obj.description}</div>
                  <div class="right clearfix">
                    <div class="item__value">${formatNumber(
                      obj.value,
                      type
                    )}</div>
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                      <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                  </div>
                </div>`;
      }

      element.insertAdjacentHTML("beforeend", html);
    },

    deleteListItem: function (selectorId) {
      let child = document.getElementById(selectorId);
      child.parentNode.removeChild(child);
    },

    clearFields: function () {
      DOMStrings.inputDesc.value = "";
      DOMStrings.inputValue.value = "";
      DOMStrings.inputDesc.focus();
    },

    displayBudget: function (obj) {
      let type = obj.budget > 0 ? "inc" : "exp";

      DOMStrings.budgetLabel.textContent = formatNumber(obj.budget, type);
      DOMStrings.incomeLabel.textContent = formatNumber(obj.totalInc, "inc");
      DOMStrings.expensesLabel.textContent = formatNumber(obj.totalExp, "exp");

      DOMStrings.percentageLabel.textContent =
        obj.percentage > 0 ? `${obj.percentage}%` : "---";
    },

    displayPercentages: function (percentages) {
      let fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

      nodeListForEach(fields, function (current, index) {
        current.textContent = percentages[index] > 0 ? `${percentages[index]}%` : "---"
      });
    },

    displayMonth: function () {
      let now = new Date()

      let month = now.getMonth();
      let year = now.getFullYear().toString().slice(2)

      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      document.querySelector(DOMStrings.dateLabel).textContent = `${months[month]} '${year}`
    },

    changedType: function () {
      let fields = document.querySelectorAll(
        ".add__type" + "," + ".add__description" + "," + ".add__value"
      );

      nodeListForEach(fields, function (cur) {
        cur.classList.toggle("red-focus");
      });

      DOMStrings.inputButton.classList.toggle("red");
    },

    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

// controller

let controller = (function (budgetCtrl, UICtrl) {
  const DOM = UICtrl.getDOMStrings();

  let setupEventListeners = function () {
    DOM.inputButton.addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);
  };

  DOM.inputType.addEventListener("change", UICtrl.changedType);

  let updateBudget = function () {
    budgetCtrl.calculateBudget();
    let budget = budgetCtrl.getBudget();
    UICtrl.displayBudget(budget);
  };

  let updatePercentages = function () {
    budgetCtrl.calculatePercentages();
    let percentages = budgetCtrl.getPercentages();
    UICtrl.displayPercentages(percentages);
  };

  let ctrlAddItem = function () {
    let input = UICtrl.getInput();
    let newItem;

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      UICtrl.addListItem(newItem, input.type);
      UICtrl.clearFields();
      updateBudget();
      updatePercentages();
    }
  };

  let ctrlDeleteItem = function (event) {
    let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    let type;
    let ID;
    if (itemID) {
      [type, ID] = itemID.split("-")

      budgetCtrl.deleteItem(type, +ID);
      UICtrl.deleteListItem(itemID);
      updateBudget();
      updatePercentages();
    }
  };

  return {
    init: function () {
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
