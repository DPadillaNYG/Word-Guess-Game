var guessingGame = {
    word : ["replicants", "bluepill", "portal", "oasis", "daftpunk"]
};

var guessAmount = 10;

document.onkeyup = function(event) {
    var userGuess = event.key;
}

function userTrys() {
    if (userGuess) {
        alert("You pressed a key!");
    }
}
// if user presses any key, subtract from guess amount
// if guess amount reaches zero, end game








// We need to recognize a user pressing a key
// Record the wins - # of times the user guessed correctly
// Press any key to initiate the game
// Display game with "_ _ _ _ _ _ _"
// Reveal letters as user guesses one correctly
// Subtract each Guess Attempt from the alloted Guesses
// Display Letters Guessed
// After a win or loss, a new game will appear to play with new word.