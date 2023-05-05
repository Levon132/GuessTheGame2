const correctGuesses = ["The Legend of Zelda", "Super Mario Bros.", "Tetris", "Pokemon", "Sonic the Hedgehog"];
const gameImages = ["game-1.jpg", "game-2.jpg", "game-3.jpg", "game-4.jpg", "game-5.jpg"];
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const result = document.getElementById("result");
const timer = document.getElementById("timer");

let currentGameIndex = 0;
let timerId;
let secondsLeft = 5;

function checkGuess() {
	const guess = guessInput.value;
	if (guess.toLowerCase() === correctGuesses[currentGameIndex].toLowerCase()) {
		result.innerHTML = "Rätt Svar!";
		clearInterval(timerId);
		timerId = setInterval(changeImage, 5000);
		secondsLeft = 5;
		updateTimer();
	} else {
		result.innerHTML = "Fel. Testa Igen!.";
	}
}

function changeImage() {
	currentGameIndex++;
	if (currentGameIndex >= gameImages.length) {
		currentGameIndex = 0;
	}
	const gameImage = document.querySelector('.game-image img');
	gameImage.src = gameImages[currentGameIndex];
	guessInput.value = "";
	result.innerHTML = "";
	secondsLeft = 5;
	updateTimer();
}

function updateTimer() {
	timer.innerHTML = `Next image in ${secondsLeft} seconds`;
	if (secondsLeft === 0) {
		clearInterval(timerId);
		timerId = setInterval(changeImage, 5000);
		secondsLeft = 5;
	} else {
		secondsLeft--;
		setTimeout(updateTimer, 1000);
	}
}

window.onload = function() {
	const gameImage = document.querySelector('.game-image img');
	gameImage.src = gameImages[currentGameIndex];
	timerId = setInterval(changeImage, 5000);
	updateTimer();
}

guessButton.addEventListener("Click", function() {
	checkGuess();
});
