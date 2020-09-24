// console.log("Great it's work ! ");

// /* function mathematic() {
//   const chiffreOne = 4;
//   const chiffreTwo = 2;
//   return chiffreOne * chiffreTwo;
//   si plus de 1 return, la fonction expose uniquement le premier
//  }
//  mathematic();
// */

// // ________________________________________________________
// // A FUNCTION DEFINITION
// function billCalculator(billAmount, taxRate = 0.3) {
//   console.log('The result is : ');
//   const totalWithTax = billAmount * (1 + taxRate);
//   return totalWithTax;
// }

// const result = billCalculator(30);
// const result2 = billCalculator(30, 0.23);
// console.log(result);
// console.log(result2);

// /* ________________________________________________________
//  FUNCTION AS ARGUMENT : CALLBACK
// */
// function hello(name) {
//   return `Miss ${name}`;
// }
// const sayHello = hello('Pauline');
// console.log(sayHello);

// function yell(firstName) {
//   return ` Hello ${firstName.toUpperCase()}`;
// }
// const sayHello2 = yell('Ulrich');
// console.log(sayHello2);

// // Elle utilise en tant argument, la valeur de ce que renvoie la fonction utilisée
// const sayHello3 = yell(hello('Juliette'));
// console.log(sayHello3);

// // THIS IS A CALL BACK
// function greeting(firstName) {
//   alert(`Hello ${firstName}`);
// }

// function useUserInput(theFunction) {
//   const userName = prompt('Please enter your name');
//   theFunction(userName);
// }
// /*
// La fonction processUserInput() ne peut pas terminer tant que
// la fonction greeting() n’est pas terminée. Les callbacks servent
// à être sur qu’une fonction s’exécutera bien après une autre.
// C’est un callback synchrone, le code s’exécutant d’une traite et à la suite.
// */

// useUserInput(greeting);

/* ________________________________________________________
FUNCTION EXPRESSION
When you store your function as a value in a variable.
It's an anonymous function stock into a variable
The name of the function become the name of the variable 
*/

// const goodMorning = function() {
//   const answer = prompt('What is your name ?');
//   alert(`Good morning ${answer}`);
// };

// // THE undefined return : function return the result sometime when it's undefined it's because ther is not return value
// console.log(goodMorning);

/*
En JS, a regular function peut être appelé avant sa déclaration, 
alors qu'une expression de fonction ne peut pas. 
It's called hoisting : if a fonction is declare with the keyword function, JS 
put the function at the top of the file. 
*/

/* ________________________________________________________
ARROW FUNCTION
=> : fat arrow
-> : skinny arrow
*/

// const inchToCm2 = inches => {
//   return inches * 2.54;
// };
// arrow function have  an implicit return

// IT CAN BE
// const inchToCm = inches => inches * 2.54;

// const result3 = inchToCm(6);
// // console.log(result3);
// const result4 = inchToCm2(6);
// // console.log(result3);

// const catAge = (human, age = 5) => human * age;

// catAge(34);

// const makeAnObject = (name, age) => {
//   return {
//     firstName: `${name}`,
//     old: `${age}`,
//   };
// };
// Il est possible de return un object en une ligne entouré de parenthèse.

/* ________________________________________________________
METHODS
C'est une fonction qui vit dans un object.
Dans notre objet, il faut attribuer une fonction comme propriété de notre object 
Ex: console.log();
console --> Object
.log() --> fonction 
// This is 3 differents ways to declare methods
const moi = {
  name: 'PaulineDussvt',
  slogan: function monSlogan() {
    console.log(`Im Vegan and ${this.name}`);
  },
  // Short hand Method
  yelling() {
    console.log("I'm Vegan oooh YeAh");
  },
  // Arrow function
  wisper: () => {
    console.log('Youpi Youpi Yeah');
  },
};

// moi.slogan();
// moi.yell();
// ________________________________________________________
// CALL BACK FUNCTION WITH EVENT - CLICK CALL BACK
// Functions as argument
const button = document.getElementById('clickMe');
console.log(button);
// button.addEventListener('click', moi.yelling);
// button.addEventListener('click', moi.wisper);

const sayGoodbye = () => {
  console.log('Sorry, I have to go, Good Bye');
};

button.addEventListener('mouseover', sayGoodbye);

// Here we pass an anonymous function as a value directly
button.addEventListener('click', function() {
  console.log('Nice job !! ');
});

// ________________________________________________________
// TIMER

let str = 'bim';

const explosion = () => {
  for (let i = 10; i > -1; i--) {
    str += i;
  }
  return str;
};
// console.log(str);
console.log(explosion());
*/

// let counter = 5;
// let intervalId = null;

// function finish() {
//   clearInterval(intervalId);
//   document.getElementById('bip').innerHTML = 'TERMINE!';
// }

// function bip() {
//   counter--;
//   if (counter == 0) finish();
//   else {
//     document.getElementById('bip').innerHTML = `${counter} secondes restantes`;
//   }
// }

// const start = () => {
//   intervalId = setInterval(bip, 1500);
//   console.log(intervalId);
// };

// Définir un compteur;
let counter = 6;
let intervalId;

// // Sélectionner le bouton
// const button = document.getElementById('bip');

// definir fonction finish
const finish = () => {
  window.clearInterval(intervalId);
  document.getElementById('bip').innerHTML = 'Click Again';
};

// definir la fonction start qui va decrementer
const bip = () => {
  counter--;
  document.getElementById('bip').innerHTML = `Explosion in ${counter}`;
  if (counter <= 0) {
    finish();
  } else {
    document.getElementById('bip').innerHTML = `Explosion in ${counter}`;
    console.log(counter);
  }
};

const start = () => {
  counter = 6;
  window.setInterval(bip, 1000);
};

// const hello = () => {
//   console.log('Bonjouuur');
// };

// const hola = () => {
//   setInterval(hello, 1000);
// };

// const button = document.getElementById('bip');
// button.addEventListener('click', hola());
