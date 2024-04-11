// Initial number of fish in the aquarium
let fishCount = 5;

// Time period in days
let timePeriod = 3;

// Increasing the number of fish in the aquarium over time
for (let i = 0; i < timePeriod; i++) {
    fishCount += 3; // Adding 3 fish each day
}
console.log(`Po 3 dienų akvariume gyvens ${fishCount} žuvų.`);