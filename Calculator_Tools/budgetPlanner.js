document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const income = parseFloat(prompt("Enter your monthly income (CAD):"));
    const expenses = parseFloat(prompt("Enter your total monthly expenses (CAD):"));

    const savings = income - expenses;

    document.getElementById("result-output").textContent = `Monthly Savings: $${savings.toFixed(2)}.`;
    document.getElementById("results").style.display = "block";
});
