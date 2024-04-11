const a = 98; // The number to be compared
const b = [...a.toString()]; // Convert the number to a string and then to an array of digits

// Comparing the digits
if (b[0] > b[1]) {
    console.log("pirmas skaicius didesnis");
} else if (b[0] < b[1]) {
    console.log("antras skaicius didesnis");
} else {
    console.log("skaiciai vienodi");
}