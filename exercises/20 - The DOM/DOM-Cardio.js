// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'One';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.textContent = 'Two';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.textContent = 'Three';
ul.appendChild(li3);
console.log(ul);
// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/500';

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class="myDiv"> <p>Paragraph 1</p> <p>Paragraph 2</p> </div>`;

// put this div before the unordered list from above
// const myNewDiv = document.createRange().createContextualFragment(myHTML);
ul.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
myDiv.lastElementChild.classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
  const html = `<div class="playerCard">
  <h2>${name.toUpperCase()} — ${age}</h2>
  <p>Their height is ${height}m and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class='btn'>&times; Delete</button>
 </div>`;

  return html;
};

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
// // Have that function make 4 cards
let card = generatePlayerCard('Pauline', 34, '1m60');
card += generatePlayerCard('Simon', 23, '1m20');
card += generatePlayerCard('Ulrich', 56, '2m20');
card += generatePlayerCard('Georges', 87, '1m80');

// append those cards to the div
divCards.innerHTML = card;
// // put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', divCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.btn');

// make out delete function
const deleteCard = event => event.currentTarget.parentElement.remove();
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
