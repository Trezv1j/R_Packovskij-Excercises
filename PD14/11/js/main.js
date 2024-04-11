const a = 120; // The number to find divisors for
let divisors = []; // Array to store all divisors
let evenDivisors = []; // Array to store even divisors
let divisorSum = 0; // Variable to store the sum of all divisors
let evenDivisorSum = 0; // Variable to store the sum of even divisors

// Loop to find all divisors of 'a'
for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        divisors.push(i); // Push the divisor to the array
        divisorSum += i; // Add the divisor to the sum
        if (i % 2 === 0) {
            evenDivisors.push(i); // If the divisor is even, push it to the array
            evenDivisorSum += i; // Add the even divisor to the sum
        }
    }
}

// Output the divisors and their sum
console.log(`Visi dalykliai: ${divisors}`);
console.log(`suma visu dalykliu: ${divisorSum}`);

// Output the even divisors and their sum
console.log(`lyginiai dalykliai: ${evenDivisors}`);
console.log(`suma lyginiu dalykliu: ${evenDivisorSum}`);