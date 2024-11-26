document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const annualContribution = parseFloat(prompt("Enter your annual contribution (CAD):"));
    const years = parseInt(prompt("Number of years until retirement:"));
    const rate = parseFloat(prompt("Expected annual return rate (%):")) / 100;

    const futureValue = annualContribution * ((Math.pow(1 + rate, years) - 1) / rate);

    document.getElementById("result-output").textContent = `Estimated Pension Savings: $${futureValue.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
