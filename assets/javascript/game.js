// Each game represents  by a string of letters
var gameOne = ["r", "e", "p", "l", "i", "c", "a", "n", "t", "s"];
var gameTwo = ["m", "a", "t", "r", "i", "x"];
var gameThree = ["s", "k", "y", "n", "e", "t"];
var gameFour = ["r", "e", "k", "a", "l", "l"];
var gameFive = ["d", "a", "f", "t", "p", "u", "n", "k"];

var allGames = [gameOne, gameTwo, gameThree, gameFour, gameFive];
var gameRandom = allGames[Math.floor(Math.random() * 5)];

// Global Variables
var guessAmount = 15;
var winCount = 0;
var hasStartedGame = false;
var letterHistory = [];
var emptyWord;

// Variable references to hold HTML using .textContent
var initiateGame = document.getElementById( "initiate-game" );
var currentWord = document.getElementById( "current-word" );
var underscoreSetup = document.getElementById( "underscore-setup" );
var guessStat = document.getElementById( "guess-pool" );
var letterStat = document.getElementById( "letters-guessed" );
var winStat = document.getElementById( "win-count" );

function createEmptyWord(gameWord) {
    emptyWord = gameWord.slice();
    for ( var i = 0; i < emptyWord.length; i++ ) {
        emptyWord[i] = "_";
    }
}

document.onkeyup = function(event) {
    var userGuess = event.key;

    // Initial Setup on first key press.
    function htmlSetup() {
        if ( !hasStartedGame ) {
          initiateGame.textContent = "";
          currentWord.textContent = "CURRENT WORD";
          letterStat.textContent = "LETTERS GUESSED: " + letterHistory;
          winStat.textContent = "WINS: " + winCount;
          hasStartedGame = true;
     }
    }

    htmlSetup();

    // Function for depleting guess attempts.
    function userTrys() {
        if ( userGuess ) {
            if ( letterHistory.indexOf(userGuess) === -1 ) {
                if ( userGuess === "a" || userGuess === "b" || userGuess === "c" ||
                     userGuess === "d" || userGuess === "e" || userGuess === "f" ||
                     userGuess === "g" || userGuess === "h" || userGuess === "i" ||
                     userGuess === "j" || userGuess === "k" || userGuess === "l" ||
                     userGuess === "m" || userGuess === "n" || userGuess === "o" ||
                     userGuess === "p" || userGuess === "q" || userGuess === "r" ||
                     userGuess === "s" || userGuess === "t" || userGuess === "u" ||
                     userGuess === "v" || userGuess === "w" || userGuess === "x" ||
                     userGuess === "y" || userGuess === "z") {
                    if ( guessAmount > 0 ) {
                        guessAmount--;
                        guessStat.textContent = "GUESSES REMAINING: " + guessAmount;
                    }
                }
            }
        }
    }

    userTrys();

    function userProgress(gameWord) {   
        for ( var i = 0; i < gameWord.length; i++ ) {
            if ( userGuess === gameWord[i] ) {
                if ( guessAmount > 0 ) {
                    emptyWord[i] = gameWord[i];
                }
            }
            if (emptyWord.join() === gameWord.join()) {
                winCount++;
                winStat.textContent = "WINS: " + winCount;
            }
        }
        underscoreSetup.textContent = emptyWord.join(" ");
    }

    userProgress(gameRandom);

    function letterStats(gameWord) {
        if ( userGuess ) {
            if ( letterHistory.indexOf(userGuess) === -1 ) {
                if ( userGuess === "a" || userGuess === "b" || userGuess === "c" ||
                     userGuess === "d" || userGuess === "e" || userGuess === "f" ||
                     userGuess === "g" || userGuess === "h" || userGuess === "i" ||
                     userGuess === "j" || userGuess === "k" || userGuess === "l" ||
                     userGuess === "m" || userGuess === "n" || userGuess === "o" ||
                     userGuess === "p" || userGuess === "q" || userGuess === "r" ||
                     userGuess === "s" || userGuess === "t" || userGuess === "u" ||
                     userGuess === "v" || userGuess === "w" || userGuess === "x" ||
                     userGuess === "y" || userGuess === "z" ) {
                    if ( guessAmount > 0 ) {
                        letterHistory.push(userGuess);
                        letterStat.textContent = "LETTERS GUESSED: " + letterHistory.join(", ");
                    }
                }
            }
        }
    }

    letterStats(gameRandom);

    if ( gameRandom = allGames[0] ) {
        var newDIV = document.createElement("<div>");
        d
    }

}

createEmptyWord(gameRandom);


// if guess amount reaches zero, end game
// After a win or loss, a new game will appear to play with new word.