let startYear = 1997; // Starting year
let endYear = 2018; // Ending year
let yearList = []; // Array to store the list of years

// Generating the list of years between startYear and endYear
for (let i = startYear; i <= endYear; i++) {
    yearList.push(i); // Adding each year to the yearList array
}

// Iterating through the list of years to find leap years
for (let j = 0; j < yearList.length; j++) {
    let year = yearList[j];

    // Checking if the year is a leap year
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year); // Outputting the leap year
    }
}