function calculateFinance() {
// Get values from input boxes
let income=Number(document.getElementById("income").value);
let rent =Number(document.getElementById("rent").value);
let food=Number(document.getElementById("food").value);
let travel=Number(document.getElementById("travel").value);
let other =Number(document.getElementById("other").value); 
// Calculate total expenses
let totalExpenses =rent +food +travel+other;
// Calculate remaining balance
let remainingBalance= income -totalExpenses;
// Calculate savings percentage
let savingsPercentage = 0;
if (income > 0) {
savingsPercentage=(remainingBalance / income)*100;
}
// Display results
document.getElementById("totalExpenses").textContent="₹"+totalExpenses.toFixed(2);
document.getElementById("remainingBalance").textContent="₹" + remainingBalance.toFixed(2);
document.getElementById("savingsPercentage").textContent="₹"+savingsPercentage.toFixed(2) + "%";
// Display message
let message =document.getElementById("message");
if (remainingBalance > 0) {
message.textContent= "Good! You have money left for savings.";
}
else if (remainingBalance === 0){
message.textContent ="Your income and expenses are equal.";
}
else {
message.textContent ="Your expenses are higher than your income.";
}
}