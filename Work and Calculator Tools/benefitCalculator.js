document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Example: Calculate Ontario Child Benefit (OCB)
    const annualIncome = parseFloat(prompt("Enter your annual income:"));
    const children = parseInt(prompt("Number of children under 18:"));
    const maxBenefit = 1227; // Per child per year in Ontario

    let benefit = 0;
    if (annualIncome <= 22000) {
        benefit = children * maxBenefit;
    } else if (annualIncome <= 30000) {
        benefit = children * maxBenefit * (1 - (annualIncome - 22000) / 8000);
    }

    document.getElementById("result-output").textContent = `Estimated Benefit: $${benefit.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
