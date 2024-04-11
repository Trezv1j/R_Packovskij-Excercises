let a = 6;
let b = 3;
let c = 9;

// Checking if b is between a and c, or if it's not between them
if (a < b && b < c || b > a && a > c) {
    console.log(`taip, tenkinama`); // If the condition is true, print "taip, tenkinama"
} else {
    console.log(`ne, ne tenkinama`); // If the condition is false, print "ne, ne tenkinama"
}