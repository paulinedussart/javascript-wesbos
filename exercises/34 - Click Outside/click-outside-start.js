const cardsButton = document.querySelectorAll('.card button');

const handleDisplayDescription = event => {
  // récupérer la source de l'image
  const button = event.currentTarget;
  const card = button.closest('.card');
  const img = document.querySelector('.card img');
  const imgSrc = img.src;
  const newImage = imgSrc.replace(/200/, 350);
  const modalOuter = document.querySelector('.modal-outer');
  const modalInner = document.querySelectorAll('.modal-inner p');
  modalInner.forEach(cardContent => {
    cardContent.innerText = card.dataset.description;
    document
      .querySelector('.modal-inner')
      .insertAdjacentHTML('afterbegin', `<img src="${newImage}">`);
  });
  modalOuter.classList.add('open');
  // .closest renvoie l'ancètre le plus proche, null si pas d'elt.
};

cardsButton.forEach(button =>
  button.addEventListener('click', handleDisplayDescription)
);
