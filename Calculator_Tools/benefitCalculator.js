document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values from the form
    const annualIncome = parseFloat(document.getElementById("annualIncome").value);
    const children = parseInt(document.getElementById("children").value);

    // Validate inputs
    if (isNaN(annualIncome) || isNaN(children) || annualIncome < 0 || children < 0) {
        alert("Please enter valid values for both fields.");
        return;
    }

    // Perform calculations (Example for Ontario Child Benefit)
    const maxBenefit = 1227; // Example: maximum benefit per child
    let benefit = 0;

    if (annualIncome <= 22000) {
        benefit = children * maxBenefit;
    } else if (annualIncome <= 30000) {
        benefit = children * maxBenefit * (1 - (annualIncome - 22000) / 8000);
    }

    // Display the results
    const resultOutput = document.getElementById("result-output");
    resultOutput.textContent = `Estimated Benefit: $${benefit.toFixed(2)}`;
    document.getElementById("results").style.display = "block";
});
