let n = 3; // Number of days
let suma = 0; // Total number of visits
let vizitai = [18, 10, 10]; // Array of visits on each day
let k = 0; // Number of days with visits equal to or greater than 20

// Loop through each day's visits
for (let i = 0; i < vizitai.length; i++) {
    suma += vizitai[i]; // Add the visits for the day to the total
    if (vizitai[i] >= 20) { // Check if the visits for the day are equal to or greater than 20
        k++; // Increment the count of days with visits equal to or greater than 20
    }
}

let vidurkis = suma / vizitai.length; // Calculate the average number of visits

// Output the average number of visits and the count of days with visits equal to or greater than 20
console.log(`m = ${vidurkis.toFixed(1)}, k = ${k}`);