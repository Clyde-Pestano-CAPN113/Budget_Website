document.getElementById("redundancy-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect user inputs
    const dateStarted = document.getElementById("date-started").value;
    const dateEnded = document.getElementById("date-ended").value;
    const weeklyEarnings = parseFloat(document.getElementById("weekly-earnings").value);

    // Validate inputs
    if (!dateStarted || !dateEnded || isNaN(weeklyEarnings) || weeklyEarnings <= 0) {
        alert("Please provide valid inputs.");
        return;
    }

    const startDate = new Date(dateStarted);
    const endDate = new Date(dateEnded);

    if (endDate <= startDate) {
        alert("The date of redundancy must be after the start date.");
        return;
    }

    // Calculate redundancy pay
    const result = calculateOntarioRedundancy(startDate, endDate, weeklyEarnings);

    // Display results
    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "block";

    const resultOutput = `
        <h3>Redundancy Pay Calculation</h3>
        <p><strong>Years of Service:</strong> ${result.yearsOfService} years</p>
        <p><strong>Termination Pay:</strong> $${result.terminationPay}</p>
        <p><strong>Severance Pay:</strong> $${result.severancePay}</p>
        <p><strong>Total Pay:</strong> $${result.totalPay}</p>
    `;
    document.getElementById("result-output").innerHTML = resultOutput;
});

function calculateOntarioRedundancy(startDate, endDate, weeklyEarnings) {
    // Calculate years of service
    const yearsOfService = getYearsOfService(startDate, endDate);

    // Calculate termination pay (up to 8 weeks)
    const terminationWeeks = Math.min(yearsOfService, 8);
    const terminationPay = terminationWeeks * weeklyEarnings;

    // Calculate severance pay (if 5+ years of service, up to 26 weeks)
    let severancePay = 0;
    if (yearsOfService >= 5) {
        const severanceWeeks = Math.min(yearsOfService, 26);
        severancePay = severanceWeeks * weeklyEarnings;
    }

    // Return results
    return {
        yearsOfService: yearsOfService,
        terminationPay: terminationPay.toFixed(2),
        severancePay: severancePay.toFixed(2),
        totalPay: (terminationPay + severancePay).toFixed(2),
    };
}

function getYearsOfService(startDate, endDate) {
    const years = endDate.getFullYear() - startDate.getFullYear();
    const isEarlierInYear =
        endDate.getMonth() < startDate.getMonth() ||
        (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate());
    return isEarlierInYear ? years - 1 : years;
}
