// Number of lectures each day of the week
const lecturesPerDay = [5, 6, 4, 5, 4];

let totalLectures = 0; // Total number of lectures in a week
let totalTime = 0; // Total time spent on lectures in minutes

// Calculating total lectures and total time spent
for (let i = 0; i < lecturesPerDay.length; i++) {
    totalLectures += lecturesPerDay[i];
    totalTime += lecturesPerDay[i] * 45; // Assuming each lecture is 45 minutes long
}

console.log(`Paskaitų skaičius per savaitę- ${totalLectures}. Tai sudaro ${totalTime} minučių.`)
