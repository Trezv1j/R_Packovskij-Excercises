let array = [421, 421, 321]; // Original array
let arrayEmpty = []; // New array to copy elements into

// Loop through each element of the original array
for (let i = 0; i < array.length; i++) {
    arrayEmpty.push(array[i]); // Copy each element to the new array
}

console.log(arrayEmpty); // Output the new array