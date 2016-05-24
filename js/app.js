// Initialize variables
var guesses = [];
var alreadyGuessed;
var randomNum;
var count = 0;

// Generates random number between 1 and 100
function randomNumber() {
	randomNum = Math.floor((Math.random() * 100) + 1);
	// console.log(randomNum);
}

// Counts number of guesses the user has made
function counter() {
	count++;
	$("#count").text(count);
}

// Starts new game
function newGame() {
	$("#feedback").text("Make your Guess!");
	$("#guessList").text("");
	$("#count").text("0");
	count = 0;
	randomNumber();
}

// Clears input field
function clearInput() {
	$("#userGuess").val('');
}

$(document).ready(function(){
	  // Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	// Hide information modal box
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		// Generates random number between 1 and 100 on page load
		randomNumber();

		// Checks for valid input
		$("#guessButton").click(function(e) {
			e.preventDefault();
			var guess = $("#userGuess").val();
			var guessInt = parseInt(guess);
			clearInput();
			if (guessInt > 100 || guessInt < 1) {
				alert("Please enter a number between 1 and 100.");
				return;
			} else if (isNaN(guessInt)) {
				alert("Please enter a number between 1 and 100.");
				return;
			}
			for (i = 0; i < guesses.length; i++) {
				if (guessInt == guesses[i]) {
					alert("You already guessed that number!");
					return;
				}
			}
			var diff = Math.abs(guessInt - randomNum);

			// Determines how close guessed number is to actual number
			counter();
			if (diff === 0) {
				$("#feedback").text("You won! Click '+NEW GAME' to play again.");
				$("#guessButton").css('visibility', 'hidden');
				$("#userGuess").prop('disabled', true);
			} else if (diff >= 40) {
				$("#feedback").text("Ice cold");
			} else if (diff >= 20) {
				$("#feedback").text("Cold");
			} else if (diff >= 10) {
				$("#feedback").text("Warm");
			} else if (diff >= 5) {
				$("#feedback").text("Hot");
			} else if (diff > 0) {
				$("#feedback").text("Super hot")
			}

			// Add guessed number to #guessList and guesses; clear input form
			$("#guessList").append('<li>' + guessInt + '</li>');
			guesses.push(guessInt);
			clearInput();

		});

		// Starts new game
		$(document).on('click', '.new', newGame);
});
