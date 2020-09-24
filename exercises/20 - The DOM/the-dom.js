// // if you put the src script in the head
// const pContent = () => {
//   const p = document.querySelector('p');
//   console.log(p.innerText);
// };
// document.addEventListener('DOMContentLoaded', pContent);

// ___________________________________

const info = document.querySelector('.wes');
console.log(info.innerHTML);
console.log(info.textContent); // whitout the style tag but with the content
console.log(info.innerText);
console.dir(info);
const img = document.querySelector('.nice');
const title = document.querySelector('.wes');

const displayClassImgRound = () => {
  img.classList.toggle('round');
};
img.addEventListener('click', displayClassImgRound);

const scaleTitle = () => {
  title.classList.add('bigger');
};
title.addEventListener('click', scaleTitle);

img.setAttribute('data-name', 'pauline');
img.setAttribute('data-age', 25);
console.log(img.dataset.name.toUpperCase());
