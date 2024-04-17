const individual = {
    occupation: 'Software Developer',
    height: '175cm',
    yearsOfExperience: 7
};

function displayDetails(person) {
    for(const property in person){
        console.log(property, person[property]);
    }
}

displayDetails(individual);