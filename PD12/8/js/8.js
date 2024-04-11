let day = 0; // Initialize the variable to count days

for (let fuel = 112; fuel > 0; fuel -= 22) {
    if (day % 2 !== 0) { // Check if it's an odd day
        fuel -= 11; // Reduce fuel due to extra consumption on odd days
        day++; // Increment the day counter
    }
    day++; // Increment the day counter for every loop iteration
}


console.log(`Keliauti bus galima ${day} dienas`);