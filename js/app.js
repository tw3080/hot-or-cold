// Generates random number between 1 and 100
function randomNumber() {
	var number = Math.floor((Math.random() * 100) + 1);
	console.log(number);
	return number;
}

function counter() {
	/*
	TODO: first click not registering unless counter invoked outside?
	Stop count from incrementing if guess is not between 1 and 100
	*/
	count = 0;
	$("#guessButton").click(function() {
		count++;
		$("#count").text(count);
	});
}

// Starts new game
/*
TODO: add the rest of the functionality
*/
function newGame() {
	randomNumber();
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
		var randomNum = randomNumber(); // Do I have to make this its own variable?
		counter();

		// Determines how close guessed number is to actual number
		$("#guessButton").click(function(e) {
			/* TODO: reduce repetition */
			e.preventDefault();
			var guess = $("#userGuess").val();
			var guessInt = parseInt(guess);
			var diff;
			if (guessInt > randomNum) {
				diff = guessInt - randomNum;
			} else if (guessInt < randomNum) {
				diff = randomNum - guessInt;
			}
			// does this need to be in a new if statement?
			if (guessInt == randomNum) {
				$("#feedback").text("You won! Click \'+NEW GAME\' to play again.");
				$("#guessButton").css('visibility', 'hidden');
			} else if (guessInt > 100 || guessInt < 1) {
				alert("Please enter a number between 1 and 100.");
			} else if (diff >= 50) {
				$("#feedback").text("Ice cold");
			} else if (diff < 50 && diff >= 30) {
				$("#feedback").text("Cold");
			} else if (diff < 30 && diff >= 20) {
				$("#feedback").text("Warm");
			} else if (diff < 20 && diff >= 10) {
				$("#feedback").text("Hot");
			}

			$("#guessList").append('<li>' + guessInt + '</li>');
			$("#userGuess").val('');

		});

		// Starts new game
		$(document).on('click', '.new', newGame);

});
