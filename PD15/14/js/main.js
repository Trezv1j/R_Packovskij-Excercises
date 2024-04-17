let firstArray = [6, 1, 2, 3, 6, 3, 3];
let secondArray = [6, 8, 3, 2, 7, 5, 1, 8, 5];

let combinedArray = firstArray.concat(secondArray);

let uniqueSet = new Set(combinedArray);
let uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray);