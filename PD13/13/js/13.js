let sandwich = 2.40;
let drink = 0.80;
let discount = 10; // Discount percentage
let eurosAvailable = 4; // Amount of money customer has in euros

let basketTotal = sandwich + drink; // Total cost of items in the basket

// Checking if the customer has enough money after applying the discount
if (eurosAvailable > basketTotal - (basketTotal * discount / 100)) {
    basketTotal -= (basketTotal * discount / 100); // Applying the discount
    console.log(`The customer has enough money. They will pay ${basketTotal.toFixed(2)} euros.`);
} else {
    console.log(`The customer does not have enough money.`);
}