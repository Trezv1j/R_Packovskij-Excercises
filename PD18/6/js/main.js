const workers =[
    {
        name: 'Alice',
        surname: 'Johnson',
        salary: 8000
    },

    {
        name: 'Bob',
        surname: 'Williams',
        salary: 3500
    }
]

function filterWorkers(arr, minSalary){
    let filteredWorkers = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].salary > minSalary){
            filteredWorkers.push(arr[i]);
        }
    }
    console.log(filteredWorkers);
}

filterWorkers(workers, 5000);