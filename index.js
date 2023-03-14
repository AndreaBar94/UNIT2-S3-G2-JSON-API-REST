//GENERAL SELECTORS
let input = document.getElementById("input");
let saveBtn = document.getElementById("save");
let deleteBtn = document.getElementById("delete");
let lastInput = document.getElementById("oldValue");
let clearBtn = document.getElementById("clear");
let NAMES = "Names";
let names = [];

//SAVE AND DELETE BUTTON
//evito il comportamento di default del form, altrimenti non mi fa visualizzare l'ultimo nome al click del save
document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();
});

if (localStorage.getItem(NAMES)) {
	names = JSON.parse(localStorage.getItem(NAMES));
	if (names[names.length - 1] === undefined) {
		lastInput.textContent = "Nessun nome inserito";
	}
}

saveBtn.addEventListener("click", function () {
	names.push(input.value);
	localStorage.setItem(NAMES, JSON.stringify(names));
	lastInput.textContent = "Your last input was: " + names[names.length - 1];
	input.value = "";
});

deleteBtn.addEventListener("click", function () {
	names.pop();
	localStorage.setItem(NAMES, JSON.stringify(names));
	lastInput.textContent = "Your last input was: " + names[names.length - 1];
	if (names[names.length - 1] === undefined) {
		lastInput.textContent = "Nessun nome inserito";
	}
});

clearBtn.addEventListener("click", function () {
	localStorage.clear();
	names = [];
	lastInput.textContent = "Nessun nome inserito";
});

//TIMER

let rolex;
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

const updateClock = () => {
	rolex.innerText = "Tempo trascorso: " + counterValue;
};

window.onload = () => {
	rolex = document.getElementById("rolex");
	updateClock();
	setInterval(incrementCount, 1000);
};

const incrementCount = () => {
	counterValue += 1;
	updateClock();
	sessionStorage.setItem("lastCounterValue", counterValue);
};
