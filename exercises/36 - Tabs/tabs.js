const tabsArray = Array.from(document.querySelectorAll('.tabs button'));
const panelsArray = Array.from(
  document.querySelectorAll("div[role='tabpanel']")
);

// FIRST
// const enablePanel = e => {
//   // button selected add css
//   e.currentTarget.setAttribute('aria-selected', 'true');
//   // get the other button not selected
//   const noSelectedButton = tabsArray.filter(
//     button => button !== e.currentTarget
//   );
//   // remove css for buttons not selected
//   noSelectedButton.forEach(button =>
//     button.setAttribute('aria-selected', 'false')
//   );
//   // check which panel should be shown
//   // get acces to the id, src .....
//   const { id } = e.currentTarget;
//   const result = panelsArray.find(
//     tab => tab.getAttribute('aria-labelledby') === id
//   );
//   // make the panel visible
//   result.hidden = false;
//   // select other panels
//   const removeHidden = panelsArray.filter(div => div !== result);
//   // make them no visible
//   removeHidden.forEach(div => (div.hidden = true));
// };

// SECOND (hide all at first)
const enablePanel = e => {
  // make all the panels hidden
  panelsArray.forEach(div => (div.hidden = true));
  // make all the btn whitout css activate
  tabsArray.forEach(button => button.setAttribute('aria-selected', 'false'));
  // active css on the button selected
  e.currentTarget.setAttribute('aria-selected', 'true');
  // check which panel should be shown
  // get acces to the id, src .....
  const { id } = e.currentTarget;
  const result = panelsArray.find(
    tab => tab.getAttribute('aria-labelledby') === id
  );
  // make the panel who check the button not hidden
  result.hidden = false;
};

tabsArray.forEach(tab => tab.addEventListener('click', enablePanel));
