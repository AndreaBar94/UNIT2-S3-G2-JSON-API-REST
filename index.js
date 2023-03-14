//GENERAL SELECTORS
let input = document.getElementById("input");
let saveBtn = document.getElementById("save");
let deleteBtn = document.getElementById("delete");
let lastInput = document.getElementById("oldValue");
let NAMES = "Names";
let names = [];

//SAVE AND DELETE BUTTON
//evito il comportamento di default del form, altrimenti non mi fa visualizzare l'ultimo nome al click del save
document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();
});

if (localStorage.getItem(NAMES)) {
	names = JSON.parse(localStorage.getItem(NAMES));
}

saveBtn.addEventListener("click", function () {
	names.push(input.value);
	localStorage.setItem(NAMES, JSON.stringify(names));
	lastInput.textContent = names[names.length - 1];
});

deleteBtn.addEventListener("click", function () {
	names.pop();
	localStorage.setItem(NAMES, JSON.stringify(names));
	lastInput.textContent = names[names.length - 1];
});

//TIMER
let time = [];
let rolex = document.getElementById("rolex");

const clock = () => {
	let seconds = 1;
	time.push(seconds);
	sessionStorage.setItem(time, JSON.stringify(time));
	rolex.innerHTML = sessionStorage.getItem(time, JSON.parse(time));
};
clock();
