/*
    OPERATORS IN JAVASCRIPT
    +, -, *, /, % => modulus, <, >, >=, =<, ! => Bang operatorn,
    = -> tilldelning, ==, ===, !=, !==, && => OCH, || => ELLER
*/

// Skapa 5 variabler (data bärare)
const firstName = 'Michael';
const lastName = 'Gustavsson';
const address = 'Gatan 1';
const postalCode = '12345';
const city = 'Orten';

// + kan användas för att slå samman strängar till en längre sträng
const fullName = firstName + ' ' + lastName;
console.log(fullName);

let personInfo = firstName + ' ' + lastName + ' ' + 
    address + ' ' + postalCode + ' ' + city;

console.log(personInfo);
personInfo = 'Mitt namn är: ' + firstName + ' ' + lastName + 
    ' Jag bor på denna adress: ' + address + ' ' + postalCode + ' ' + city;

console.log(personInfo);

// Template String med Interpolation...
// Rekommenderat sätt att slå ihop flera strängar till en...
personInfo = `Mitt namn är ${firstName} ${lastName} 
    och jag bor på denna adress: ${address} ${postalCode} ${city}`;

console.log("Template strings: ", personInfo);

/********************************************************************/
    // MATEMATISKA OPERATORER...
/********************************************************************/
const currentYear = 2026;
console.log(currentYear,typeof(currentYear));

const birthYear = '1990';
const age = currentYear - birthYear;
console.log('Min dotters ålder:',age);
/*
let x = 10;
console.log("X =",x);
x = 10 * 2;
console.log("X =",x);
x = 10 * 5 + 2;
console.log("X =",x);

x = 10 * (5 + 2);
console.log("X =",x);

x = (10 * 2) / 5;
console.log("X =",x);
*/

// Modulus %
let y = 25;
console.log("Y =", y);
console.log("Y =", y / 5);
console.log("Y =", y / 3);
console.log("Y =", y / 2);
console.log("Y =", y % 3); // Resten av en heltalsdivision
console.log("Y =", y % 2);
