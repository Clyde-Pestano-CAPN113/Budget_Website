document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const initialSavings = parseFloat(prompt("Initial savings amount (CAD):"));
    const monthlyContribution = parseFloat(prompt("Monthly contribution (CAD):"));
    const rate = parseFloat(prompt("Expected annual return rate (%):")) / 100;
    const years = parseInt(prompt("Number of years to save:"));

    const futureSavings = initialSavings * Math.pow(1 + rate / 12, years * 12) +
        (monthlyContribution * (Math.pow(1 + rate / 12, years * 12) - 1)) / (rate / 12);

    document.getElementById("result-output").textContent = `Estimated Savings: $${futureSavings.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
