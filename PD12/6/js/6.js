// Heights of spruce trees in centimeters
let spruceHeights = [167, 134, 145, 156, 155, 176];

// Variable to store the sum of all heights
let sum = 0;

// Calculating the sum of all heights
for (let i = 0; i < spruceHeights.length; i++) {
  sum += spruceHeights[i]; // Adding each height to the sum
}

// Calculating the average height
let averageHeight = sum / spruceHeights.length;

// Displaying the average height
console.log(`Eglutės aukščio vidurkis: ${averageHeight} cm`);