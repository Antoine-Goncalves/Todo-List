`use strict`;

// variables

const button = document.getElementById("enter");

const input = document.getElementById("input");

const ul = document.querySelector("ul");

const darkMode = document.getElementById("darkMode");

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

function addSymbolSupp() {
    	let buttonSupp = document.createElement("button");
    	let supp = document.createTextNode("-");
    	buttonSupp.className = "supp";
    	buttonSupp.append(supp);
    	li.append(buttonSupp);
}

function deleteLi() {
    	let del = document.getElementsByClassName("supp");
	let li;
	for ( let i = 0; i < del.length; i++) {
		del[i].onclick = function () {
			li = this.parentElement;
			li.remove();
		}
	}
}

function createListInUl() {
    	createNewLi();
    	addTextToLi();
    	insertLiToUl();
    	resetInput();
	addSymbolSupp();
	deleteLi();
}

function addDarkMode() {
	let color = document.body.style.background;

    	if (color === 'rgb(255, 252, 86) none repeat scroll 0% 0%') {
        	document.body.style.background = "#0D0D0D";
    	}
    	else {
        	document.body.style.background = "#FFFC56";
    	}
}

function liBarred(check) {
    	if (check.target.tagName === 'LI') {
		check.target.classList.toggle('checked');
    	}
}

function addListAfterClick() {
    	if (inputLength() > 0) {
        	createListInUl();
    	} else {
		alert("Il faut écrire quelque chose 🙄 , petit malin 🤭");
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
        	createListInUl();
    	} else if (inputLength() == 0 && event.keyCode === 13) {
		alert("Il faut écrire quelque chose 🙄 , petit malin 🤭");
	}
}

// Processus

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', liBarred);

darkMode.addEventListener("click", addDarkMode);
