const NameError = document.getElementById("Name-error");
const PhoneError = document.getElementById("Phone-error");
const EmailError = document.getElementById("Email-error");
const MessageError = document.getElementById("Message-error");

function validateName() {
	const name = document.getElementById("contact-name").value;

	if (name.length == 0) {
		NameError.innerHTML = "Name is required";
		return false;
	}
	if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
		NameError.innerHTML = "Write Full Name";
		return false;
	}
	NameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
	return true;
}

function validatePhone() {
	const Phone = document.getElementById("contact-phone").value;

	if (Phone.length == 0) {
		PhoneError.innerHTML = "Phone no. is required";
		return false;
	}
	if (!Phone.match(/^[0-9]+$/)) {
		PhoneError.innerHTML = "Only digit allowed";
		return false;
	}
	if (Phone.length !== 10) {
		if (Phone.length > 10) {
			PhoneError.innerHTML = "More than 10 digit not allowed";
			return false;
		}
		PhoneError.innerHTML = "Phone no should be 10 digits";
		return false;
	}

	PhoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
	return true;
}

function validateEmail(){
	const Email = document.getElementById('contact-email').value;

	if (Email.length == 0) {
		EmailError.innerHTML = "Email is required";
		return false;
	}
	if (!Email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
		EmailError.innerHTML = "Email is invalid";
		return false;
	}
	
	EmailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
	return true;
}

function validateMessage(){
	const Message = document.getElementById("contact-Message").value;
	const required = 30;
	const left = (required - Message.length);

	if (left>0) {
		MessageError.innerHTML = left + " more characters required";
		return false;
	}

	MessageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
	return true;
};

function validateForm(){
	const submitError = document.getElementById("submit-error")

	if (!validateName() || !validatePhone() || !validateEmail || !validateMessage){
		
		submitError.innerHTML = "Please fix the Error to submit!";
		submitError.style.display = "block";
		setTimeout(function(){submitError.style.display = "none";}, 3000)
		return false;
	}
}