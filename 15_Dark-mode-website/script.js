const changeMode = document.getElementById("moon-icon");

changeMode.onclick = function Mode() {
	if (changeMode.src.includes("images/moon.png")) {
		changeMode.src = "images/sun.png";
		document.body.classList.add("darkmode");
	} else if ((changeMode.src = "images/sun.png")) {
		changeMode.src = "images/moon.png";
		document.body.classList.remove("darkmode");
	}
};
