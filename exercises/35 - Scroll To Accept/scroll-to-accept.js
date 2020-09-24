console.log('IT WORKS!');

// check the scroll into the term_and_condition div
// Select the div
const termAndCondition = document.querySelector('.terms-and-conditions');
const acceptBtn = document.querySelector('.accept');
console.log(termAndCondition.lastElementChild);
const allowClick = event => {
  if (event.currentTarget.scrollTop === 2647.77783203125) {
    acceptBtn.disabled = false;
  } else {
    acceptBtn.disabled = true;
  }
};

termAndCondition.addEventListener('scroll', allowClick);
// ---------------------------------------

const observerCallBack = event => {
  if (event[0].isIntersecting === true) {
    acceptBtn.disabled = false;
  } else {
    acceptBtn.disabled = true;
  }
};
const observer = new IntersectionObserver(observerCallBack, {
  threshold: 0.8,
});

observer.observe(termAndCondition.lastElementChild);
