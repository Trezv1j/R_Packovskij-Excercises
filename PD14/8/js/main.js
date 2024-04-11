let x = 0;
let y = -1;

// Loop to iterate through each combination of x and y
for (let i = 0; i < 121; i++) {
    y++; // Increment y

    // If y reaches 11, reset it to 0 and increment x
    if (y === 11) {
        y = 0;
        x++;
    }

    // Calculate the multiplication of x and y
    let xy = x * y;

    // Print the multiplication expression and result
    console.log(`${x} * ${y} = ${xy}`);
}