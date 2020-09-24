const list = document.createElement('list');

// Create as many item as we need
const firstTask = document.createElement('li');
const secondTask = document.createElement('li');
const thirdTask = document.createElement('li');
const fourTask = document.createElement('li');
const fifthTask = document.createElement('li');

// TextContent est une propriété
firstTask.textContent = 'First';
secondTask.textContent = 'Second';
thirdTask.textContent = 'Third';
fourTask.textContent = 'Four';
fifthTask.textContent = 'Fifth';

list.insertAdjacentElement('afterbegin', thirdTask);
thirdTask.insertAdjacentElement('beforebegin', secondTask);
secondTask.insertAdjacentElement('beforebegin', firstTask);
thirdTask.insertAdjacentElement('afterend', fifthTask);
fifthTask.insertAdjacentElement('beforebegin', fourTask);

const myList = document.querySelector('.my-list');
myList.appendChild(list);
console.log(list);

const yes = `<h1>Hello</h1>`;
console.log(yes);
