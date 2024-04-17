const phone ={
    brand: 'Samsung',
    storage: 64
}

function cloneAndModify(obj, property, newValue){
    const clonedObject = { ...obj };
    clonedObject[property] = newValue;
    
    console.log("Modified clone:", clonedObject);
    console.log("Original object:", obj);
}

cloneAndModify(phone, "storage", 128);