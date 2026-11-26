/* String template och string interpolation */
const firstName = 'Nils';
const lastName = 'Nilsson';

//const fullName = `Mitt namn är ${firstName} ${lastName}`;
//console.log(fullName);

/* Manipulering av strängar */
// Egenskaper
let vehicle = 'Volvo V40 2017';
console.log(vehicle);
console.log(vehicle.length);

// metoder (funktioner)
/*
console.log(vehicle[0]);
console.log(vehicle[1]);
console.log(vehicle[2]);

console.log(vehicle.at(0));
console.log(vehicle.at(1));
console.log(vehicle.at(2));
*/
// Jag vill hämta sista tecknet...
/*
// Ex 1.
const index = vehicle.length;
console.log("Index:", index);
console.log(vehicle[index]);
// Ex 2.
console.log(vehicle[vehicle.length -1]);

// Modernare sätt sedan ES2022
const character = vehicle.at(-1);
console.log(character);

console.log(vehicle.at(0));
console.log(vehicle.at(7));
console.log(vehicle.at(-2));
console.log(vehicle.at(-6));
*/

// charAt => index(position)
/*
console.log(vehicle.charAt(0));
console.log(vehicle.charAt(1));
*/
// Funkar inte !
// console.log(vehicle.charAt(-1));

/* Hämta ut ett eller flera tecken ur en sträng */
// Är inte lika lättläst och inte lika lätt att förstå...
/*
console.log(vehicle.slice(0,5));
console.log(vehicle.slice(5,8));
*/
// En bättre variant är att använda substring()...
/*
console.log(vehicle.substring(0,5));
console.log(vehicle.substring(5,9));
*/
// Kontrollera om en sträng börjar eller slutar med en sekvens av tecken...
/*
console.log(vehicle.startsWith('Vo'));
console.log(vehicle.endsWith('7'));
console.log(vehicle.endsWith('V40'));
*/
// Hantera stora eller små tecken...
/* console.log(vehicle.toUpperCase());
console.log(vehicle.toLowerCase());
console.log(vehicle.toLowerCase().startsWith('vo')); */

/* const vehicleExist = vehicle.toLowerCase().startsWith('vo');
console.log(vehicleExist); */

// var placeHolder = document.querySelector("#vehicleName");
// // Ersätta tecken i en sträng
// console.log(vehicle.replace('4','6'));
// console.log(vehicle.replace('2017','2019'));
// const data = 'Volvo;XC60;2021' //Volvo XC60 2021
// console.log(data.replace(';',' '));
// console.log(data.replaceAll(';',' '));
// placeHolder.innerHTML = data.replaceAll(';',' ')

vehicle = '     Volvo V40 2017     ';
console.log(vehicle);
vehicle = vehicle.trim();
console.log(vehicle);
// vehicle = vehicle.trimStart();
// console.log(vehicle);
// console.log(vehicle.trimEnd());
// vehicle = vehicle.replaceAll(' ','')
// console.log(vehicle);

// Sök efter tecken inuti en sträng...
const foundCharacters = vehicle.includes('V40')
console.log(foundCharacters);