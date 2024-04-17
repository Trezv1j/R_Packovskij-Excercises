let arr = [1, 3, 5, 7, 9, 11, 13];

let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sum = 0;
let product = 1;

for(let i = 0; i < numbers.length; i++){
   sum += numbers[i];
}

for(let i = 0; i < numbers.length; i++){
    product *= numbers[i];
}

console.log(sum);
console.log(product);