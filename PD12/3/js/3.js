// Dimensions of the surface
let surfaceLength = 400;
let surfaceHeight = 300;

// Price per unit area
let pricePerUnitArea = 0.5;

// Dimensions of a single piece
let pieceLength = 20;
let pieceHeight = 10;

// Counter for the number of pieces
let pieceCount = 0;

// Loop to calculate the number of pieces that can fit on the surface
for (let i = 0; i < surfaceLength; i += pieceLength) {
    for (let q = 0; q < surfaceHeight; q += pieceHeight) {
        pieceCount++; // Incrementing the piece count for each piece that fits
    }
}

console.log(`Plytų kiekis ${pieceCount}. Plytos kainuos ${pieceCount * pricePerUnitArea}Eur.`)

