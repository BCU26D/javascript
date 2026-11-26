/*
    Date typen i JavaScript representerar antalet millisekunder
    som har passerat sedan JavaScripts tidsräkning (epoch)
    1970-01-01
*/

// Date
/*
console.log(new Date());

let birthDate = new Date('1990-11-17') // Constructor
console.log("BirthDate-1",birthDate);

birthDate = new Date('1990-11-17 22:01:25') // Constructor
console.log("BirthDate-2",birthDate);

birthDate = new Date('november 17 1990 22:01:25');
console.log("BirthDate-3",birthDate);

birthDate = new Date(1990,10,17,22,1,25);
console.log("BirthDate-4",birthDate);
*/

/* Leka lite med datum */
const currentDate = new Date();
console.log('Aktuell datum och tid',currentDate);
console.log('Aktuell datum och tid',Date.now());
console.log('Aktuell datum och tid',Date.parse('2001-01-25'));

/* Plocka delar ur en datum variabel */
// Året
console.log('Året', currentDate.getFullYear());
// Månaden
console.log('Månaden', currentDate.getMonth() + 1);
// Dagen
console.log('Dagen', currentDate.getDay());
// Dagens datum
console.log('Dagen', currentDate.getDate());
// Epoch
console.log('Epoch', new Date(0));

// Timezone hantering
console.log('Timezone offset', currentDate.getTimezoneOffset());

// Sätta en förfallodatum på en faktura
const invoiceDate = new Date();
console.log('Faktura datum:', invoiceDate);

// Förfallodatum...
let dueDate = new Date();
dueDate.setDate(invoiceDate.getDate() + 30);
console.log('Faktura datum:', dueDate.toLocaleDateString('sv-SE'));
