// Reload whitout refresh page https://parceljs.org/getting_started.html

const shoppingForm = document.querySelector(".shopping");
const item = document.getElementById("item");
const ul = document.querySelector(".list");
const items = [];

// we need a array to hold our state (bunch of data that reflect the current state of my app)
const getItem	= (event) => {
	event.preventDefault();
	//can grab the value ussing his name attribute (event.currentTarget[0].value is valid too)
	const name = event.currentTarget.item.value
	// if it's empty, stop the function
	if	(!name) return; 
  const item = {
		name: name,
		id: Date.now(),
		statut: false,
	}
	// add the item inside our array of items
	items.push(item)
	// clear the form
	event.currentTarget.item.value = ""
	// event.target.reset() IS THE SAME AS ABOVE
	// fire off a custom event (new one) to tell when the items have been updated
			// first we need to fire they from/attach them to a DOM element 
	ul.dispatchEvent(new CustomEvent('itemsUpdated'))
};

const displayItems = (e) => {
	console.log(e);
	// iterating over the array to get the names with <li> attributes
  const html = items.map(item => `<li class="shopping-item">
	<input value="${item.id}" type="checkbox" checked${item.statut ? checked : null }>
	<span class="itemName">${item.name}</span>
	<button><i class="fas fa-trash"></i></button>
	</li>`).join("")
	ul.innerHTML = html
};


shoppingForm.addEventListener("submit", getItem)
ul.addEventListener("itemsUpdated", displayItems)

// LOCAL STORAGE IS A MINI DATABASE IN MY BROWSER
