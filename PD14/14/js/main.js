let n = 30; // Starting number
let m = 40; // Ending number

// Loop through numbers from 'n' to 'm'
for (let i = n; i <= m; i++) {
    // Check if the number is divisible by 3 and not equal to 33
    if (i % 3 === 0 && i !== 33) {
        console.log(i); // Print the number
    }
}