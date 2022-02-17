

// ===========================================
//                 functions
// ===========================================



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
    const incomeAmount = getInputValue('income-input');
    const savingsPercent = getInputValue('save-input');

    // get savings amount
    const savings = (incomeAmount * savingsPercent) / 100;

    // update savings amount field
    const saveField = document.getElementById('save-amount');
    saveField.innerText = savings;
    return savings;
}



// function - 4: update balance and remaining-balance amount

function updateBalance() {
    const incomeAmount = getInputValue('income-input');
    const totalExpense = totalExpenses();

    // Balance
    const totalBalance = incomeAmount - totalExpense;

    // update balance fields
    const balanceFieldAmount = document.getElementById('total-balance');
    balanceFieldAmount.innerText = totalBalance;

    return totalBalance;
}





// ===========================================
//                  Buttons
// ===========================================


// 1. calculate button handler

document.getElementById('calculate-button').addEventListener('click', function () {
    updateBalance();
})




// 2. save button handler

document.getElementById('save-button').addEventListener('click', function () {
    const savingsAmount = savings();
    const balanceTotal = updateBalance();

    // Remaining Balance
    const remainingBalance = balanceTotal - savingsAmount;

    // update remaining balance fields
    const reminingBalanceField = document.getElementById('remaining-balance');
    reminingBalanceField.innerText = remainingBalance;
})


