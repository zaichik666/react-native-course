
let budgetController = (function () {
    let Expense = function (id, description, value) {
        this.id = id
        this.description = description
        this.value = value
        this.percentage = -1 // if not defined
    }
    Expense.prototype.calcPercentage = function (totalIncome) {
        totalIncome > 0 ? this.percentage = Math.round((this.value / totalIncome) * 100) : this.percentage = -1

    }
    Expense.prototype.getPercentage = function () {
        return this.percentage
    }
    let Income = function (id, description, value) {
        this.id = id
        this.description = description
        this.value = value

    }
    let calculateTotal = function (type) {
        let suma = 0
        data.allItems[type].forEach(function (cur) {
            suma += cur.value /// suma = suma + cur.value
        });
        data.totals[type] = suma
    }
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem: function (type, des, val) {
            let newItem, ID
            // Create new Id
            data.allItems[type].length > 0 ? ID = data.allItems[type][data.allItems[type].length - 1].id + 1 : ID = 0
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }
            // Push it into our data structure
            data.allItems[type].push(newItem)
            // Return the new element
            return newItem
        },
        /* deleteItem: function (type, id) {
             let ids, index
             ids = data.allItems[type].map(function (current) {
                 return current.id
             })
             index = ids.indexOf(id)
 
             if (index !== -1) {
                 data.allItems[type].splice(index, 1)
             }
 
         },*/
        deleteItem: function (type, id) {
            data.allItems[type] = data.allItems[type].filter((cur) => cur.id !== id);
        },
        calculateBudget: function () {

            // calculate total income and expenses
            calculateTotal('exp')
            calculateTotal('inc')

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp

            // calculate the percentage of income that we spent
            data.totals.inc > 0 ?
                data.percentage = ((data.totals.exp / data.totals.inc) * 100).toFixed(1) : data.percentage = -1

        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc)
            })
        },
        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage()
            })
            return allPerc
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function () {
            console.log(data)
        }
    }
})()
// UI Controller
let UIController = (function () {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    }
    let formatNumber = function (num, type) {
        let [int, dec] = Math.abs(num).toFixed(2).split(".");

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec
    }
    let nodeListForEach = function (list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            let html, newHtml, element
            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } if (type === 'exp') {
                element = DOMstrings.expensesContainer
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type))
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },
        deleteListItem: function (selectorID) {

            let el = document.getElementById(selectorID)
            el.parentNode.removeChild(el)

        },
        clearFields: function () {
            let fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)

            fieldsArr.forEach(function (current, index, array) {
                current.value = ""
            })
            fieldsArr[0].focus()
        },
        displayBudget: function (obj) {
            let type
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp
            obj.percentage > 0 ? document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%' : document.querySelector(DOMstrings.percentageLabel).textContent = '----'

        },
        displayPercentages: function (percentages) {

            let fields = document.querySelectorAll(DOMstrings.expensesPercLabel)

            let nodeListForEach = function (list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            }
            nodeListForEach(fields, function (current, index) {
                current.textContent = percentages[index] + '%'
            })
        },
        displayMonth: function () {
            let now, months, month, year

            now = new Date()

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            month = now.getMonth()

            year = now.getFullYear()
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year
        },
        changedType: function () {

            let fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue)

            nodeListForEach(fields, function (cur) {
                cur.classList.toggle('yellow-focus')
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle('yellow')
        },
        getDOMstrings: function () {
            return DOMstrings
        }
    }
})()

// Global App Controller
let controller = (function (budgetCtrl, UIctrl) {
    let setupEventListeners = function () {
        let DOM = UIctrl.getDOMstrings()
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UIctrl.changedType);
    }
    let updateBudget = function () {

        //  Calculate the budget
        budgetCtrl.calculateBudget();

        // Return the budget
        let budget = budgetCtrl.getBudget()

        // Display the budget on the UI
        UIctrl.displayBudget(budget)

    }
    let updatePercentages = function () {

        // 1. Calculate percentages
        budgetCtrl.calculatePercentages()

        // 2. Read percentages from the budget controller
        let percentages = budgetCtrl.getPercentages()

        // 3. Update the UI with the new percentages
        UIctrl.displayPercentages(percentages)
    }
    let ctrlAddItem = function () {
        //Get the field input data
        let input = UIctrl.getInput()
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //add the item to the budget controler 
            let newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            //add the item to the UI
            UIctrl.addListItem(newItem, input.type)
            // clear the fields
            UIctrl.clearFields()
            // Calculate and update the budget
            updateBudget()
            // Calculate and update percentages
            updatePercentages()
        }
    }
    let ctrlDeleteItem = function (event) {
        let itemID, splitID, type, ID
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

        if (itemID) {
            splitID = itemID.split('-')
            type = splitID[0]
            ID = parseInt(splitID[1])

            // delete the item from the data structure
            budgetCtrl.deleteItem(type, ID)

            // Delete the item from the UI
            UIctrl.deleteListItem(itemID)

            // Update and show the new budget
            updateBudget()

            // Calculate and update percentages
            updatePercentages()
        }
    }
    return {
        init: function () {
            console.log('Application has started.')
            setupEventListeners()
            UIctrl.displayMonth()
            UIctrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
        }
    }
})(budgetController, UIController)
controller.init()
