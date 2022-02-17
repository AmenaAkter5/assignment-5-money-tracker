

// ===========================================
//                 functions
// ===========================================



// function - 1: To get input value of every input box

function getInputValue(inputId) {

    // access input field
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const newInputAmount = parseInt(inputValue);

    // handle 'negative' input error
    if (newInputAmount < 0) {
        alert('You can not input the negative number here');
        return;
    }

    // handle 'string' input error
    else if (isNaN(newInputAmount)) {
        alert('please input the number');
        return;
    }
    else {
        return newInputAmount;
    }
}


// function - 2: update balance and balance field after expenses

function updateBalance() {
    const incomeAmount = getInputValue('income-input');

    // expense sectors
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');

    // total expense
    const totalExpense = foodCost + rentCost + clothCost;

    // handle over expense input than income amount
    if (totalExpense > incomeAmount) {
        alert('You have not sufficient amount to expense more');
        return;
    }
    // handle NaN input error of total expense
    else if (isNaN(totalExpense)) {
        return;
    }

    // update total expense field
    const expenseField = document.getElementById('expense-field');
    expenseField.innerText = totalExpense;

    // Balance
    const totalBalance = incomeAmount - totalExpense;

    // handle NaN input error of total balance
    if (isNaN(totalBalance)) {
        return;
    }

    // update balance field
    const balanceFieldAmount = document.getElementById('total-balance');
    balanceFieldAmount.innerText = totalBalance;

    return totalBalance;
}


// function - 3: Savings Part

function savings() {
    const incomeAmount = getInputValue('income-input');
    const savingsPercent = getInputValue('save-input');

    // get savings amount
    const savings = (incomeAmount * savingsPercent) / 100;

    // handle NaN error of savings amount
    if (isNaN(savings)) {
        return;
    }
    // update savings amount field
    const saveField = document.getElementById('save-amount');
    saveField.innerText = savings;

    return savings;
}



// ===========================================
//            Button Event Handler
// ===========================================


// 1. calculate button handler: 

document.getElementById('calculate-button').addEventListener('click', function () {
    updateBalance();
})


// 2. save button handler:

document.getElementById('save-button').addEventListener('click', function () {

    const savingsAmount = savings();
    const balanceTotal = updateBalance();

    // handle over savings input than balance amount
    if (savingsAmount > balanceTotal) {
        alert('You have not sufficient balance to save');
        return;
    }

    // Remaining Balance
    const remainingBalance = balanceTotal - savingsAmount;

    // handle NaN error of saving amount
    if (isNaN(remainingBalance)) {
        return;
    }

    // update remaining balance field
    const reminingBalanceField = document.getElementById('remaining-balance');

    reminingBalanceField.innerText = remainingBalance;
})



