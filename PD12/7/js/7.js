let runnerTimes = [22, 20, 25, 25];

// Variable to store the fastest time
let fastestTime = runnerTimes[0]; // Assume the first runner's time is the fastest

// Finding the fastest time among all runners
for (let i = 1; i < runnerTimes.length; i++) {
    if (runnerTimes[i] < fastestTime) {
        fastestTime = runnerTimes[i]; // Update the fastest time if a faster time is found
    }
}

// Calculating the sum of all running times
let sum = 0;
for (let i = 0; i < runnerTimes.length; i++) {
    sum += runnerTimes[i]; // Adding each running time to the sum
}

// Calculating the average running time
let averageTime = sum / runnerTimes.length;

// Calculating the difference between the fastest time and the average time
let difference = averageTime - fastestTime;

// Displaying the results
console.log(`Greičiausio bėgiko laikas: ${fastestTime}sek.. Jis buvo: ${difference} sek geresnis už vidurkį.`);