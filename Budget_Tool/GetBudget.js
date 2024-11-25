export function GetBudget() {
    const budgetInput = document.getElementById("YourMoneyHere");
    return Number(budgetInput.value);
}