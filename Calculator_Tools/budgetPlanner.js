document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if (isNaN(income) || isNaN(expenses) || income <= 0 || expenses < 0) {
        alert("Please enter valid inputs.");
        return;
    }

    const savings = income - expenses;

    document.getElementById("result-output").textContent = `Monthly Savings: $${savings.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
