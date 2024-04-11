let s1 = 222; // Starting number
let s2 = 245; // Ending number

// Loop through numbers from 's1' to 's2'
for (let i = s1; i <= s2; i++) {
    // Check if the number is divisible by 3
    if (i % 3 === 0) {
        let str = i.toString(); // Convert the number to a string
        // Check if the string contains any of the digits 3, 6, or 9
        if (str.includes('3') || str.includes('6') || str.includes('9')) {
            console.log(str); // Print the number
        }
    }
}