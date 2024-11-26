document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const principal = parseFloat(prompt("Enter the mortgage amount (CAD):"));
    const annualRate = parseFloat(prompt("Enter the annual interest rate (%):")) / 100;
    const years = parseInt(prompt("Enter the loan term (years):"));

    const monthlyRate = annualRate / 12;
    const payments = years * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));

    document.getElementById("result-output").textContent = `Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
