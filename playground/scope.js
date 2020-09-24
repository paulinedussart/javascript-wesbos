// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();
/* eslint-disable*/

// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }


const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
  return dog;
}
logDog(dog);

function go() {
  const dog = 'sunny';
  logDog('sunny');
}

go();

function yell(name) {
  console.log(name.toUpperCase());
}

function sayHi(names) {
  yell(names);
}

sayHi("Pauline");
yell("Georges");
// ---------------------------------------
// const sayHello = (name) => {
//   return name.toUpperCase();
// };

// const sayHallo = (firstName) => {
//   console.log(firstName.toUpperCase());
// };

// const answer = sayHello("Lily");
// console.log(answer);
// sayHallo("James");

// const whatColor = (name) => {
//   if (name == 'Lola')
//     return "You are red"
//   else if (name == 'Boby')
//     return "You are grey"
//   else 
//     return "I don't know try again"  
// };

// const result = whatColor("JDJ");
// console.log(result);

// do {
//   answerUser = window.prompt("Which year Pauline is born ?")
// } while ( answerUser != "1994")
// alert("Well done !! ")
// ---------------------------------------
const cool = (name) => {
  let feelings;
  if (name === "Ulrich") {
    feelings = "I love you"
  }
  // console.log(feelings);
  return feelings;
};

for (let i = 6; i >= 0; i--) {
  console.log(i);;
}
 