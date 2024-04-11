let minimumIncome = 2000; // Minimum required income for a loan
let expense = 300; // Total expenses
let familyMembers = 4; // Number of family members
let fatherIncome = 2500; // Father's income
let motherIncome = 4000; // Mother's income

// Calculating the total family income
let totalIncome = fatherIncome + motherIncome;

// Calculating the total family income per family member
let totalIncomePerMember = totalIncome / familyMembers;

// Checking if the total family income is sufficient for a loan and if after expenses, there's still enough
if (totalIncomePerMember >= minimumIncome && (totalIncome - expense) >= 0) {
 console.log(`Bankas duos paskola`);
}else{
    console.log(`Bankas ne duos paskolos`);
}
