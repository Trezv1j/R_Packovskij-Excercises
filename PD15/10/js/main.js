let originalArray = [1,2,3,4,5,6,7,4,6];
let uniqueSet = new Set(originalArray);
let newArray = Array.from(uniqueSet);

console.log(newArray);