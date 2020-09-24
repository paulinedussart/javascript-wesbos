/* eslint-disable */
let age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

// Hoisting just work with regular function, not whit arrow fonction or expresion function.; 

// This will work
// function add(a,b) {
//   return a + b;
// }

// This won't work
// const add = (a, b) => a + b;
