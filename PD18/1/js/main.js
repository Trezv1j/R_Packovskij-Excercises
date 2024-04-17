const person = {
    firstName: "Laurynas",
    lastName: "Pavlovskis",
    age: 18,
};

function combineNames(obj) {
    return obj.firstName + " " + obj.lastName;
}

console.log(combineNames(person));