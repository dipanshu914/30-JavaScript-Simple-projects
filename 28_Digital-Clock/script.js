let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function changeTimeFormat() {
	let currentTime = new Date();

	let hours = currentTime.getHours();
	let minute = currentTime.getMinutes();
	let second = currentTime.getSeconds();

	// Check whether AM or PM
	let newformat = hours >= 12 ? "PM" : "AM";

	// Find the current hours in AM-PM format.
	hours = hours % 12;

	// To display "0" as "12".
	hours = hours ? hours : "12";
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;

	hrs.innerHTML = hours;
	min.innerHTML = minute;
	sec.innerHTML = second;
}

setInterval(() => {
	changeTimeFormat();
}, 1000);

// changeTimeFormat();
