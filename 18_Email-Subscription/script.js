const scriptURL = SCRIPT_URL;

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("span-msg");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			msg.innerHTML = "ThankYou for Subscribing!";
			setTimeout(function () {
				msg.innerHTML = "";
			}, 4000);
			form.reset();
		})
		.catch((error) => console.error("Error!", error.message));
});
