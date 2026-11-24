// En rads kommentar
/*
    Flera rader kommentarer
    om vi vill!
*/
/*
console.log("Hello JavaScript");
console.log("Hej", "Michael", "Kul att ses");
console.warn("Detta är en varning")
console.error("Detta är ett fel")
console.table({make:'Volvo',model:'XE30'})
console.dir({make:'Volvo',model:'XE30'})
*/

// Hantera information i en applikation
// t ex priset på en produkt
// t ex namnet på en film
// Använder variabler => ett namn för en informationsmängd
// Variabel är ett namn som vi ger data

// var är deklarationen
// firstName är namnet på variabeln
// = tilldelar varibeln värdet till höger om =
// 'Michael' värdet
// camelCase(JavaScript) => firstName
// PascalCase(Java,C#,C++) => FirstName
// KebabCase(CSS) => page-title
// SnakeCase(PostgreSql) => first_name
/*
console.log(firstName);
var firstName = 'Michael'
console.log(firstName);
console.log(500);
console.log(500.75);

// lastName är inte initierad
// då får den värdet undefined
var lastName;
console.log(lastName);
lastName = "Gustavsson";
console.log(lastName);

var addressLine = null;
console.log(addressLine);

// Vilken typ är det egentligen som vi får i våra variabler.
console.log('firstName',typeof(firstName));

var age = 60;
console.log('age',typeof(age));

console.log("firstName",typeof(firstName));
firstName = 123;
console.log("firstName", typeof(firstName));
firstName = false;
console.log("firstName", typeof(firstName));
*/

// Icke rekommenderat sätta att deklarera variabler
// var => variabeln och dess värde hamnar
// i Window objektet, tillgängligt för alla javascriptfiler
// samt javascript kod som finns i html filer...
var firstName = 'Michael';
console.log(window);

// Rekmmenderat sätt att deklarera variabler på!!!
// let och const scoped variables...
// livslängd som enbart gäller i den del de är deklarerade i.

// 1. let => mutable - värdet går att ändra
let lastName = "Gustavsson";
console.log(lastName);
lastName = "Nilsson"
console.log(lastName);
let address;

// 2. const => immutable - värdet går inte att ändra efter det är satt.
const age = 60;
console.log(age);
// age = 50;
const middleName = "Oskar";

// GÅR ICKE!!!
// const address;

// Vad ska jag använda???
// Börja alltid med const
// Sedan använda let om inte const fungerar

function test1(){
    const model = "V40";

    console.log("Test1:",model);
}

function test2(){
    let model = "XC60";
    console.log("Test2",model);
    model = "V90";
    console.log("Test2",model);
}

function test3(){
    let model = "Uno";
    console.log(model);
}

test1();
test2();
test3();

var aaa = "TESTING";

console.log(window);
