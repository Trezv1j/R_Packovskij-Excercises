let stringInput = 'mElStRoY'; 
let convertedString = '';

for (let i = 0; i < stringInput.length; i++) {
    if (stringInput[i] === stringInput[i].toUpperCase()) {
        convertedString += stringInput[i].toLowerCase();
    } else if (stringInput[i] === stringInput[i].toLowerCase()) {
        convertedString += stringInput[i].toUpperCase();
    }
}

console.log(convertedString);