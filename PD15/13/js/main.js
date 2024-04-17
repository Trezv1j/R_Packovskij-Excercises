let firstArray = [1, 2, 3];
let secondArray = [1, 3, 2, 4, 5];
let index = 0;

for(let i = 0; i < firstArray.length; i++){
    index++;
    if(firstArray[i] === secondArray[i]){
        console.log(`${index} slot of the array is identical`);
    }
    else{
        console.log(`${index} slot of the array is different \n the difference is ${firstArray[i]} in the first array and ${secondArray[i]} in the second array`);
    }
}