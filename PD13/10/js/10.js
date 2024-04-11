let a = 12;
let b = 5;
let c = 1;

// Checking which two numbers are the smallest and adding them together
if (a <= b && a <= c) {
    console.log(b + c); // If a is the smallest, add b and c
} else if (b <= a && b <= c) {
    console.log(a + c); // If b is the smallest, add a and c
} else {
    console.log(a + b); // If c is the smallest or all are equal, add a and b
}