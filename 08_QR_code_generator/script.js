const Button = document.getElementById("button");
let imgBox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrtext");

function generate_Qr() {
	if (qrText.value.length > 0) {
		qrImg.src =
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
			qrText.value;
		imgBox.classList.add("show-img");
	} else {
		qrText.classList.add("error");
		setTimeout(() => {
			qrText.classList.remove("error");
		}, 1000);
	}
}

Button.addEventListener("click", () => {
	return generate_Qr();
});
