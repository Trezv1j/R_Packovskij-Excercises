let array = [3, 5, 1, 13, 5, 2, 7, 8, 9];

let sortedArray = array.sort(function(a, b) {
    return a - b;
});

console.log(sortedArray[3]);