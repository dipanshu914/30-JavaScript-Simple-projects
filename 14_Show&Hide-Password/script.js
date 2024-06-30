const password = document.getElementById("password");
const eyeicon = document.getElementById("eye-icon");

function showPassword() {
	if (password.type === "password") {
		password.type = "text";
		eyeicon.src = "images/eye-open.png";
	} else {
		password.type = "password";
		eyeicon.src = "images/eye-close.png";
	}
}

eyeicon.addEventListener("click", function () {
	showPassword();
	setTimeout(() => {
		showPassword();
	}, 3000);
});
