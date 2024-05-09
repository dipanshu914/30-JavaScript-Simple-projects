const passwordbox = document.getElementById("password");
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-*/:><,.?/'[]{}|";

const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while (length > password.length) {
		password += allchars[Math.floor(Math.random() * allchars.length)];
	}
	passwordbox.value = password;
}

function copyPassword() {
	passwordbox.select();
	navigator.clipboard
		.writeText(passwordbox.value)
		.then(() => {
			const message = document.createElement("div");
			message.textContent = "Copied successfully";
			message.classList.add("copy-message");
			document.body.append(message);

			// set timeout
			setTimeout(() => {
				message.remove();
			}, 2000);
		})
		.catch((err) => {
			// Error
			console.error("failed to copy:", err);
		});
}
