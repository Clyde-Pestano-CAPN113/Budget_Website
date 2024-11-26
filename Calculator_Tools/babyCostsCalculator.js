document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const diaperCost = 25; // Average weekly diaper cost
    const formulaCost = 50; // Average weekly formula cost
    const miscCost = 100; // Other costs (clothing, toys, etc.)
    const weeks = parseInt(prompt("Number of weeks:"));

    const totalCost = (diaperCost + formulaCost + miscCost) * weeks;

    document.getElementById("result-output").textContent = `Estimated Baby Costs: $${totalCost.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
