const product1 ={
    name: 'Smartphone',
    price: 499,
    stock: 20
};

const product2 ={
    name: 'Laptop',
    price: 1299,
    stock: 5
};

function reduceStock(obj){
    if(obj.stock >= 10){
        obj.stock -= 10;
        console.log(obj);
    }   else {
        console.log(obj);
    }
}

function removePrice(obj){
    if(obj.stock < 10){
        delete obj.price;
        console.log(obj);
    }   else {
        console.log(obj);
    }
}

reduceStock(product1);
removePrice(product1);

reduceStock(product2);
removePrice(product2);