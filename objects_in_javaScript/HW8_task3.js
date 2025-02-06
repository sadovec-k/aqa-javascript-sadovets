const car1 = {
    brand : "Toyota",
    model : "Corrola",
    year : 1981
}

const car2 = {
    brand : "Volvo",
    model : "S60",
    owner : "Frodo"
}

const car3 = {...car1, ...car2};

console.log(car3);