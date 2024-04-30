const questions = [
	{
		question: "Which is the largest animal in the world ?",
		answers: [
			{ text: "shark", correct: false },
			{ text: "Blue Whale", correct: true },
			{ text: "Elephant", correct: false },
			{ text: "giraffe", correct: false },
		],
	},
	{
		question: "What is the capital of India ?",
		answers: [
			{ text: "Mumbai", correct: false },
			{ text: "Kolkata", correct: false },
			{ text: "Jaipur", correct: false },
			{ text: "Delhi", correct: true },
		],
	},
	{
		question: "Which is the largest country in the world ?",
		answers: [
			{ text: "India", correct: false },
			{ text: "Russia", correct: true },
			{ text: "America", correct: false },
			{ text: "China", correct: false },
		],
	},
	{
		question: "Which is the largest desert in the world ?",
		answers: [
			{ text: "kalahari", correct: false },
			{ text: "Gobi", correct: false },
			{ text: "Sahara", correct: false },
			{ text: "Antarctica", correct: true },
		],
	},
	{
		question: "Which is the smallest continent in the world ?",
		answers: [
			{ text: "Asia", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Artic", correct: false },
			{ text: "Africa", correct: false },
		],
	},
];

const questionElement = document.getElementById("question");
const AnswerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	NextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		AnswerButton.appendChild(button);

		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

// this is reset Function to hide the extra answer button
function resetState() {
	NextButton.style.display = "none";
	while (AnswerButton.firstChild) {
		AnswerButton.removeChild(AnswerButton.firstChild);
	}
}

// Here, In this function we select the correct answer.

function selectAnswer(e) {
	const selectbtn = e.target;
	const isCorrect = selectbtn.dataset.correct === "true";
	if (isCorrect) {
		selectbtn.classList.add("correct");
		score++;
	} else {
		selectbtn.classList.add("incorrect");
	}
	Array.from(AnswerButton.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	NextButton.style.display = "block";
}

function showScore() {
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
	NextButton.innerHTML = "Play Again";
	NextButton.style.display = "block";
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

NextButton.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});

startQuiz();
