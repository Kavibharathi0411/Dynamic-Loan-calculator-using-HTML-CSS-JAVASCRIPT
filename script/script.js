function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterest = parseFloat(document.getElementById('interest').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(years) || principal <= 0 || annualInterest <= 0 || years <= 0) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Please enter valid values for all fields.</p>';
        return;
    }

    const monthlyInterest = annualInterest / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment = (principal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    document.getElementById('result').innerHTML = `
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
}
