const pass = document.getElementById("password");
const Message = document.getElementById("Message");
const Strength = document.getElementById("Strength");

pass.addEventListener("input", () => {
	if (pass.value.length > 0) {
		Message.style.display = "block";
	} else {
		Message.style.display = "none";
	}
	if (pass.value.length < 4) {
		Strength.innerHTML = `weak`;
		pass.style.borderColor = "#ff5925";
		Message.style.color = "#ff5925";
	} else if (pass.value.length >= 4 && pass.value.length < 8) {
		Strength.innerHTML = `medium`;
		pass.style.borderColor = "yellow";
		Message.style.color = "yellow";
	} else if (pass.value.length >= 8) {
		Strength.innerHTML = `strong`;
		pass.style.borderColor = "green";
		Message.style.color = "green";
	}
});
