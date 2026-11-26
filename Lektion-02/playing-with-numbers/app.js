/* Arbeta och manipulera numeriskt data */
// Egenskaper
// const age = 45;
// console.log(age);
/* console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE); */

// Testa om ett numeriskt värde är ett heltal
/* console.log(Number.isInteger(2.1234567895));
console.log(Number.isInteger(20)); */

// const vehiclePriceFromHtml = '135 950';
/* const vehiclePriceFromHtml = prompt('Ange priset','100')
console.log(vehiclePriceFromHtml,typeof(vehiclePriceFromHtml));
const price = parseInt(vehiclePriceFromHtml);
const priceFloat = parseFloat(vehiclePriceFromHtml);
const priceFloatWithDecimal = parseFloat(vehiclePriceFromHtml).toFixed(2);
// const price = Number.parseInt(vehiclePriceFromHtml);
console.log(price,typeof(price));
console.log(priceFloat,typeof(priceFloat));
console.log(priceFloatWithDecimal,typeof(priceFloatWithDecimal)); */
/* const price = Number.parseInt(vehiclePriceFromHtml.replaceAll(' ',''));
console.log(price); */

const salary = 2500000.75
console.log(salary);
console.log(salary.toLocaleString());
console.log(salary.toLocaleString('sv-SE'));
console.log(salary.toLocaleString('en-US'));
console.log(salary.toLocaleString('en-GB'));
console.log(salary.toLocaleString('fr-FR'));
