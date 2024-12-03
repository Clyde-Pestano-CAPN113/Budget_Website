document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const annualContribution = parseFloat(document.getElementById("annualContribution").value);
    const years = parseInt(document.getElementById("years").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;

    if (isNaN(annualContribution) || isNaN(years) || isNaN(rate) || annualContribution <= 0 || years <= 0 || rate < 0) {
        alert("Please enter valid inputs.");
        return;
    }

    const futureValue = annualContribution * ((Math.pow(1 + rate, years) - 1) / rate);

    document.getElementById("result-output").textContent = `Estimated Pension Savings: $${futureValue.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
