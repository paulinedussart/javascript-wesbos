// Select the canvas
const canvas = document.querySelector('canvas');
// Now, we have to select the content of the canvas where we will draw
// We call it the Context
const ctx = canvas.getContext('2d');
// Select the button to shake
const button = document.querySelector('.shake');

ctx.lineWidth = 30;
ctx.lineCap = 'round'; // or square
ctx.lineJoin = 'round';
const MOVE_AMOUT = 30;
// Setup the area for the drawing
ctx.beginPath();
let width = Math.floor(Math.random() * canvas.width);
let height = Math.floor(Math.random() * canvas.height);
ctx.moveTo(width, height);
ctx.lineTo(width, height);
ctx.stroke();

// Write the function for the drawing
const drawing = event => {
  ctx.beginPath();
  ctx.moveTo(width, height);
  console.log(event.keyCode);
  if (event.keyCode === 37) {
    width -= MOVE_AMOUT;
  } else if (event.keyCode === 39) {
    width += MOVE_AMOUT;
  } else if (event.keyCode === 38) {
    height -= MOVE_AMOUT;
  } else if (event.keyCode === 40) {
    height += MOVE_AMOUT;
  }
  ctx.lineTo(width, height);
  ctx.stroke();
};

// Write an add event Listener
window.addEventListener('keydown', drawing);
// Handle the keys touch

const reloadPage = () => {
  canvas.classList.add('shake');
  canvas.addEventListener('animationend', event => {
    window.location.reload(true);
    // or
    // clearRect allow to clean the canvas with argument to specify the start and the end.
    // ctx.clearRect(0, 0, width, height);
  });
};

button.addEventListener('click', reloadPage);
