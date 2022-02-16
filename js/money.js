
function getInputValue(inputId) {
    // input field
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const newInputAmount = parseInt(inputValue);

    // clear the input field
    // inputField.value = '';

    return newInputAmount;
}


// function - 1: Add all Expenses

function totalExpenses() {
    // get Food Cost Value
    const foodCost = getInputValue('food-cost');

    // get Rent Cost Value
    const rentCost = getInputValue('rent-cost');

    // get Cloth Cost Value
    const clothCost = getInputValue('cloth-cost');

    // total Expenses
    const totalExpense = foodCost + rentCost + clothCost;

    const expenseField = document.getElementById('expense-field');
    expenseField.innerText = totalExpense;
    return totalExpense;
}


// calculate button handler

document.getElementById('calculate-button').addEventListener('click', function () {
    // get income value
    const currentIncome = getInputValue('income-input');

    // get totalExpense
    const expenseTotal = totalExpenses();

    // Balance
    const netBalance = currentIncome - expenseTotal;
    console.log(netBalance);
})