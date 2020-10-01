// Reload whitout refresh page https://parceljs.org/getting_started.html

const shoppingForm = document.querySelector(".shopping");
const item = document.getElementById("item");
const ul = document.querySelector(".list");
let items = [];

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
	// iterating over the array to get the names with <li> attributes
  const html = items.map(item => `<li class="shopping-item">
	<input value="${item.id}" type="checkbox" ${item.statut ? "checked" : null }>
	<span class="itemName">${item.name}</span>
	<button id="${item.id}">x</i></button>
	</li>`).join("")
	ul.innerHTML = html
};

const mirrorToLocalStorage = (e) => {
	console.info("Items save to local storage");
	console.log(items);
	localStorage.setItem("items", JSON.stringify(items));
}

const restorToLocalStorage = () => {
	console.log("Restore from local storage");
	const retrievedObject = localStorage.getItem("items");
	const storedItems = JSON.parse(retrievedObject);

	if (storedItems.length) {
		// spreading storedItems in items
		items.push(...storedItems) 
		// displayItems()
		// work also
		ul.dispatchEvent(new CustomEvent('itemsUpdated'))
	}
}
 
shoppingForm.addEventListener("submit", getItem)
ul.addEventListener("itemsUpdated", displayItems)
ul.addEventListener("itemsUpdated", mirrorToLocalStorage)

// LOCAL STORAGE IS A MINI DATABASE IN THE USER BROWSER
restorToLocalStorage()


// DELETING ELEMENT 
const deleteItem = (id) => {
	console.log("Deleting ...", id);
	items = items.filter(item => item.id !== id)
	// this will trigger the line 61 and 62
	ul.dispatchEvent(new CustomEvent('itemsUpdated'))
}

// UPDATE STATUS 
const markAsChecked = (id) => {
	const updatedItem = items.find( item => item.id === id)
	updatedItem.statut = !updatedItem.statut
	// this will trigger the line 61 and 62
	ul.dispatchEvent(new CustomEvent('itemsUpdated'))
};


// Event delegation (we delegate the delete action when it's a button which is clicked)
ul.addEventListener("click", (event) => {
	if(event.target.matches("button")){
		deleteItem(parseInt(event.target.id));
	} else if (event.target.matches("input[type='checkbox']")) {
		// console.log(event.target.checked);
		// event.target.checked.checked = !event.target.checked.checked

		markAsChecked(parseInt(event.target.value))

	}
} )
