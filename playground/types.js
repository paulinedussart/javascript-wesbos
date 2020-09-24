/* eslint-disable */
/*
const name = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = "shes's so \"cool\"";
const sentence2 = `shes's so "cool"`;

const song = `Ohhh

ya

I like
pizza`;

-- CONCATENATION -- 
const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

-- INTERPOLATION --
const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;

*/

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;
/*
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);

const price = 1034;
*/


/*
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};


let dog;
console.log(dog);
dog = 'snickers';


let somethingUndefined;
const somethingNull = null;

const cher = {
  first: 'cher'
};

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;


let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;
let age2 = 100;
*/


// ___________________________M_O_I________________________________
const sentence = "Hola she's fine"
// use of backslash
const sentence2 = 'Hola she\'s fine'

const test = `
This 
is
a 
multiline
sentence
`;
const name = "Marie"
const hello = `Hello ${name}, how are you ?`
const html = `
<div>
  <h2> ${name} <h2>
  <p> ${hello} <p>
<div>`;

document.body.innerHTML = html;


const candy = 33
const kids = 4

const distribution = `Each kids can have ${Math.floor(candy / kids)} candy and ${candy % kids} will left !`;
console.log(distribution);

// Attention !! ---> .1 + .2 != .3
// Pour écrire un prix il faut préférer écrire en centimes 3,45 == 345 ! 

// LES OBJETS
const person = {
  name: "pauline",
  age: 34,
  city: "Barcelonnette"
};

// undefined n'a pas de valeur, 
// on ne peut pas déclarer une variable CONST à undefined, c'est obligatoirement LET !!!
let dog ;
// ici dog est déclaré mais pas affecté à une valeur
console.log(dog);

const cat = null;
// on affect la variable cat à la valeur null (nothing)

// _____  BOOLEANS  ________
const age = 4;
const vote = false;
const ofAge = age > 18;

console.log(ofAge);

// === check la valeur et le type de chaque côté.
// == check que la valeur