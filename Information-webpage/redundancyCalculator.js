document.getElementById("start-calculator").addEventListener("click", function () {
    // Redirect to the redundancy calculator page
    window.location.href = "redundancypaycalculator.html";
});

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

    // Calculate redundancy pay
    const result = calculateOntarioRedundancy(dateStarted, dateEnded, weeklyEarnings);

    // Display results
    document.getElementById("results").innerHTML = `
        <h3>Redundancy Pay Calculation</h3>
        <p>Years of Service: ${result.yearsOfService}</p>
        <p>Termination Pay: $${result.terminationPay}</p>
        <p>Severance Pay: $${result.severancePay}</p>
        <p><strong>Total Pay: $${result.totalPay}</strong></p>
    `;
});

function calculateOntarioRedundancy(dateStarted, dateEnded, weeklyEarnings) {
    // Parse dates
    const startDate = new Date(dateStarted);
    const endDate = new Date(dateEnded);

    // Calculate years of service
    const yearsOfService = getYearsOfService(startDate, endDate);

    // Calculate termination pay
    const terminationWeeks = Math.min(yearsOfService, 8); // Max 8 weeks
    const terminationPay = terminationWeeks * weeklyEarnings;

    // Calculate severance pay
    let severancePay = 0;
    if (yearsOfService >= 5) {
        const severanceWeeks = Math.min(yearsOfService, 26); // Max 26 weeks
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
    const isEarlierInYear = endDate.getMonth() < startDate.getMonth() || 
                            (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate());
    return isEarlierInYear ? years - 1 : years;
}
