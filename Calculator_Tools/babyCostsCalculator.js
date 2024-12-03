document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const weeks = parseInt(document.getElementById("weeks").value);

    if (isNaN(weeks) || weeks < 0) {
        alert("Please enter a valid number of weeks.");
        return;
    }

    const diaperCost = 25;  // Weekly diaper cost
    const formulaCost = 50; // Weekly formula cost
    const miscCost = 100;   // Weekly miscellaneous costs

    const totalCost = (diaperCost + formulaCost + miscCost) * weeks;

    document.getElementById("result-output").textContent = `Estimated Baby Costs: $${totalCost.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
