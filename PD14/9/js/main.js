let amoeba = 1; // Initial population of amoebas
let hours = 0; // Initial number of hours

// Loop for 8 hours
for (let i = 0; i < 8; i++) {
    hours += 3; // Increment hours by 3
    amoeba *= 2; // Double the population of amoebas
}

console.log(` bus ${amoeba} amebos po ${hours}valandu.`);