let arr = [1, 1, 5, 5, 5, 6, 4];
let targetValue = 5;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
        count++;
    }
}

console.log(count);