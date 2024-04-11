// Array of buses with their departure times and number of passengers
let buses = [
    { time: [1, 50], passengers: 17 },
    { time: [2, 0], passengers: 25 },
  ];
  
  // Total number of passengers
  let totalPassengers = 0;
  for (let bus of buses) {
    totalPassengers += bus.passengers; // Adding passengers of each bus
  }
  
  // Calculating the total time in minutes for all bus trips
  let totalDurationMinutes = 0;
  for (let bus of buses) {
    let [hours, minutes] = bus.time;
    let totalMinutes = hours * 60 + minutes; // Converting hours to minutes and adding with minutes
    totalDurationMinutes += totalMinutes; // Adding the duration of each trip
  }
  
  // Calculating the number of buses with fewer than 10 passengers
  let lessThanTenPassengers = 0;
  for (let bus of buses) {
    if (bus.passengers < 10) {
      lessThanTenPassengers++; // Increment the count if the bus has fewer than 10 passengers
    }
  }
  
  // Displaying the results
  console.log(`Bendrai pervežtų keleivių skaičius = ${totalPassengers}. Vidutinis sugaištas važiavimo laikas (min.): ${totalDurationMinutes}. Autobusų
  skaičius (keleiviai < 10): ${lessThanTenPassengers}.`);