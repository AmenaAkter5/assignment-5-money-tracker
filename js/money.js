

// function - 1: To get input value of every input field

function getInputValue(inputId) {
    // access input field
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const newInputAmount = parseInt(inputValue);
    return newInputAmount;
}


// function - 2: Add all Expenses

function totalExpenses() {
    // expense sectors
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');

    // total expense
    const totalExpense = foodCost + rentCost + clothCost;

    // update total expense field
    const expenseField = document.getElementById('expense-field');

    expenseField.innerText = totalExpense;
    return totalExpense;
}


// function - 3: Savings Part

function savings() {
    const currentIncome = getInputValue('income-input');
    const savingsInput = getInputValue('save-input');

    // get savings amount
    const savings = (currentIncome * savingsInput) / 100;

    // update savings amount field
    const saveField = document.getElementById('save-amount');
    saveField.innerText = savings;
}

// function - 4: update balance and remaining-balance amount

function updateBalance() {
    const currentIncome = getInputValue('income-input');
    const expenseTotal = totalExpenses();

    // Balance
    const totalBalance = currentIncome - expenseTotal;

    // update balance amount
    const balanceField = document.getElementById('total-balance');
    balanceField.innerText = totalBalance;

    savings();
    // remaining balance
    // const remainingBalance = 
    const remainingField = document.getElementById('remaining-balance');
}


// calculate button handler

document.getElementById('calculate-button').addEventListener('click', function () {
    updateBalance();
})



// save button handler

document.getElementById('save-button').addEventListener('click', function () {
    updateBalance();
})