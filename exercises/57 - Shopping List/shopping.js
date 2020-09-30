const addButton = document.querySelector("button");
const item = document.getElementById("item");
const ul = document.querySelector("list");

const getItem	= (event) => {
	event.preventDefault();
	console.log(item.value);
};


addButton.addEventListener("click", getItem)