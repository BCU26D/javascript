/*
    Ett objekt är ett sätt att organisera eller gruppera kod
    som hör ihop.
    Kallas även för en datastruktur!
    Information som hör ihop => tillstånd eller data
    Funktionalitet som hör ihop => beteende
*/

/* 
    I JavaScript har vi 3 olika sätt att arbeta med objekt
    1. JavaScript's Object typ
    2. JavaScript initiering => {}
    3. ES6 klasser
*/

// Object typen (anonyma objekt)
// const vehicle = new Object(); // Här skapas ett objekt
// console.log(vehicle);
// vehicle.id = 1;
// vehicle.regNo = 'ABC123';
// vehicle.manufacturer = "Audi";
// vehicle.model = 'A6';
// vehicle.mileage = 120000;
// vehicle.modelYear = 2017;

// displayVehicle(vehicle);

// console.log(vehicle['regNo']);
// console.log(vehicle.regNo);
// console.log(vehicle);

// const vehicle2 = new Object();
// vehicle2.id = 2;
// vehicle2.regNo = 'DEF456'
// console.log(vehicle2);

// vehicle.vinNumber = 'Adalkdjföklfewo344u2987'

// displayVehicle(vehicle);

// Rekommenderat sätt...
// const vehicle = {
//     id : 1,
//     regNo : 'ABC123',
//     manufacturer : "Audi",
//     model : 'A6',
//     mileage : 120000,
//     modelYear : 2017,
// }
// console.log(vehicle);

// Glömt att ange antal dörrar
// vehicle.doors = 5

// Hoppsan jag glömde motorn!!!
// vehicle.engine = {
//     hk:'250Hk',
//     typeOfEngine: 'Petrol'
// }

// delete vehicle.engine;
// console.log(vehicle);

// function displayVehicle(car){
//     console.log(car.id, car.regNo, car.vinNumber);
// }

const vehicle = {
    id : 1,
    regNo : 'ABC123',
    manufacturer : "Audi",
    model : 'A6',
    mileage : 120000,
    modelYear : 2017,
};

vehicle.doors = 5;

const person = {
    firstName:'Michael',
    lastName: 'Gustavsson',
    email: 'michael@mail.com'
}

vehicle.id = 11;
console.log(vehicle);

const number = 10;
let x = number;
x = 35;
volvo = vehicle;

volvo.manufacturer = 'Volvo'
vehicle.model = 'XC60';

console.log(volvo);
console.log(vehicle);

function demo(){
    const y = 10;
    const person = {};
    //.......
}