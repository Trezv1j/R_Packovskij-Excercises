// Initial number of cups
let cups = 7;

// Number of boxes
let boxes = 0;

// Packing cups into boxes
for (let i = 0; i < 7; i++) {
    // Check if there are enough cups to fill a box
    if (cups >= 3) {
        cups -= 3; // Subtracting 3 cups to fill a box
        boxes++; // Incrementing the number of boxes
    }
}

console.log(`Pilnu dėžučių skaičius: ${boxes}. Nesupakuotų puodelių skaičius: ${cups}.`);