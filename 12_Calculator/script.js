const display = document.getElementById("display");

function calculate() {
	if (display.value.trim() === "") {
		display.value = "";
	} else {
		try {
			display.value = eval(display.value);
		} catch (e) {
			display.value = "Error";
		}
	}
}
