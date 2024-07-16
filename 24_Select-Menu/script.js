let selectfield = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrow-icon");

selectfield.onclick = function () {
	list.classList.toggle("hide");
	arrowIcon.classList.toggle("rotate");
};

for (option of options) {
	option.onclick = function () {
		selectText.innerHTML = this.textContent;
		list.classList.toggle("hide");
		arrowIcon.classList.toggle("rotate");
	};
}
