let toastBox = document.getElementById("toastbox");
let succesMSg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i>Please Fix the error`;
let InvalidMsg = `<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Check again`;

function showToast(msg) {
	let toast = document.createElement("div");
	toast.classList.add("toast");
	toast.innerHTML = msg;
	toastBox.appendChild(toast);

	if (msg.includes("error")) {
		toast.classList.add("error");
	}
	if (msg.includes("Invalid")) {
		toast.classList.add("Invalid");
	}

	setTimeout(() => {
		toast.remove();
	}, 6000);
}
