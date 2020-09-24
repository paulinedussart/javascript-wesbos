// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 IT GOT CLICKED!!!');
// }

// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', function() {
//   console.log('Im an anon!');
// });
// coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function handleBuyButtonClick(event) {
//   console.log('You clicked a button!');
//   const button = event.target;
//   // console.log(button.textContent);
//   // console.log(parseFloat(event.target.dataset.price));
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // Stop this event from bubbling up
//   // event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// window.addEventListener(
//   'click',
//   function(event) {
//     console.log('YOU CLICKED THE WINDOW');
//     console.log(event.target);
//     console.log(event.type);
//     // event.stopPropagation();
//     console.log(event.bubbles);
//   },
//   { capture: true }
// );

// const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', e => {
//   console.log(e.currentTarget);
//   console.log(this);
// });

// const button = document.querySelector('.butts');
// console.log(button);

// const displayHello = event => {
//   console.log('Bonjour ! ');
//   // the difference between "currentTarget" and "target" is abou nesting.
//   // With target, if I click on a number between strong tag, the event will
//   // be the strong tag and not the button. Ce sera la chose exact qui sera cliquée
//   // currentTarget fait ref à l'element global, ce qui a déclaché l'evenement
//   console.log(event.currentTarget.textContent);
//   console.log(event.target);
//   console.dir(event);
//   event.stopPropagation(); // eviter la propagation qui remonte jusuq'à window/document.
//   // (qd on clic sur plusieurs element en même temps vers le haut)
//   // Ne pas utiliser this dans une arrow fonction ou callback !!!
// };

// button.addEventListener('click', displayHello);

// const buyButtons = document.querySelectorAll('.buy');

// buyButtons.forEach(btn => {
//   btn.addEventListener('click', displayHello);
// });

const testWindow = event => {
  console.log(event.currentTarget);
  console.log(event.target);
};
window.addEventListener('click', testWindow);
