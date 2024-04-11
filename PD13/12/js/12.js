let boxCount = 40; // Total number of boxes
const capacityPerTrip = 4; // Number of boxes that can be carried in one trip
let tripCount = 0; // Variable to store the number of trips needed

// Checking if there are boxes to transport
if (boxCount > 0) {
    tripCount = Math.ceil(boxCount / capacityPerTrip); // Calculating the number of trips needed
    console.log(`vazios ${tripCount} kartu`); // Printing the number of trips needed
} else {
    console.log(`ne vaziuos`); // Printing a message if there are no boxes to transport
}