for (let i = 0; i <= 300; i++) {    
    let divisors = 0; // Initialize the count of divisors
    
    // Loop to find divisors of 'i'
    for (let y = 1; y <= i; y++) {
        if (i % y === 0) {
            divisors++; // Increment the count if 'y' is a divisor of 'i'
        }
    }
    
    // Check if 'i' has exactly 5 divisors
    if (divisors === 5) {
        console.log(i); // If yes, print 'i'
    }
}