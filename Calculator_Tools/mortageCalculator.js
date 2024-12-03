document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const annualRate = parseFloat(document.getElementById("annualRate").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate < 0 || years <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    const monthlyRate = annualRate / 12;
    const payments = years * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));

    document.getElementById("result-output").textContent = `Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
