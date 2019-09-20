`use strict`;

// variables

const button = document.getElementById("enter");

const input = document.getElementById("input");

const ul = document.querySelector("ul");

let li;

//Functions

function inputLength() {
    	return input.value.length;
}

function resetInput() {
    	input.value = "";
}

function CapitalizeInput() {
	return input.value[0].toUpperCase()+input.value.slice(1,inputLength()).toLowerCase();
}

function addTextToLi() {
    	li.append(document.createTextNode(CapitalizeInput()));
}

function createNewLi() {
    	li = document.createElement("li");
}

function insertLiToUl() {
    	ul.insertAdjacentElement("beforeend", li);
}

function createListInUl() {
    	createNewLi();
    	addTextToLi();
    	insertLiToUl();
    	resetInput();
}

function addListAfterClick() {
    	if (inputLength() > 0) {
        	createListInUl();
    	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
        	createListInUl();
    	}
}

function addAlertAfterClick() {
	if (inputLength() == 0) {
		alert("Il faut écrire quelque chose 🙄 , petit malin 🤭");
	}
}

// Processus

button.addEventListener("click", addListAfterClick);

button.addEventListener("click", addAlertAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
