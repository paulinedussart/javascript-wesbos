// Reload whitout refresh page https://parceljs.org/getting_started.html

const shoppingForm = document.querySelector(".shopping");
const item = document.getElementById("item");
const ul = document.querySelector(".list");


// we need a array to hold our state 
// (bunch of data that reflect the current state of my app)
const items = [];
const getItem	= (event) => {
	event.preventDefault();
	//console.log(event.currentTarget[0].value);
	//can grab the value ussing his name attribute

	const name = event.currentTarget.item.value
  const item = {
		name: name,
		id: Date.now(),
		statut: false,
	}
	console.log(item);
	// add the item inside our array of items
	items.push(item)
	console.log(items);
	// clear the form
	event.currentTarget.item.value = ""
};


shoppingForm.addEventListener("submit", getItem)