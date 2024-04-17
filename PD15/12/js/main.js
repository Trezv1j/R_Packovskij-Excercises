let firstArray = [5, 1, 2, 3, 6];
let sum1 = 0;
let secondArray = [1, 2];
let sum2 = 0;

for(let i = 0; i < firstArray.length; i++){
    sum1 += firstArray[i];
}

for(let i = 0; i < secondArray.length; i++){
    sum2 += secondArray[i];
}

let finalSum = sum1 + sum2;

console.log(finalSum);
