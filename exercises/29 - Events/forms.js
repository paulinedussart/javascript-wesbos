// const button = document.querySelector('[name=contact]');

// const handleInfo = event => {
//   event.preventDefault();
//   console.log(event.currentTarget);
//   console.log(event.currentTarget.name.value);
//   console.log(event.currentTarget.compagny.value);
//   console.log(event.currentTarget.email.value);
// };

// button.addEventListener('submit', handleInfo);

const submit = document.querySelector('[name=contact]');

const handleConfirmation = event => {
  event.preventDefault();
  confirm('Are you sure to send this email ? ');
};

submit.addEventListener('submit', handleConfirmation);
