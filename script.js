let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');

  if (userGuess === randomNumber) {
    feedback.textContent = "🎉 Congrats! You guessed it!";
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }
}
