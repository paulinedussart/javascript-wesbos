const wes = document.querySelector('.wes');

// This is for element
// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
// The element still exist
document.body.appendChild(p);

// This is for Nodes
node.childNodes;
node.firstChild;
node.lastChild;
node.previousSibling;
node.nextSibling;
node.parentNode;

// AN ELEMENT IS A NODE BUT A NODE IS NOT STILL AN HTMLElement
