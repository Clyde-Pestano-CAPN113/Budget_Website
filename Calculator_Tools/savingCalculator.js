document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const initialSavings = parseFloat(document.getElementById("initialSavings").value);
    const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    if (isNaN(initialSavings) || isNaN(monthlyContribution) || isNaN(rate) || isNaN(years) || 
        initialSavings < 0 || monthlyContribution < 0 || rate < 0 || years <= 0 ||
        rate > 0.2 || years > 50) {
        alert("Please enter realistic and valid inputs.");
        return;
    }

    const futureSavings = initialSavings * Math.pow(1 + rate / 12, years * 12) +
        (monthlyContribution * (Math.pow(1 + rate / 12, years * 12) - 1)) / (rate / 12);

    function formatNumber(value) {
        if (value >= 1e12) return `$${(value / 1e12).toFixed(2)} trillion`;
        if (value >= 1e9) return `$${(value / 1e9).toFixed(2)} billion`;
        if (value >= 1e6) return `$${(value / 1e6).toFixed(2)} million`;
        return `$${value.toFixed(2)}`;
    }

    document.getElementById("result-output").textContent = `Estimated Savings: ${formatNumber(futureSavings)}`;
    document.getElementById("results").style.display = "block";
});
