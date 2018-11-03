// Each game represents  by a string of letters
var gameOne = ["c", "y", "b", "o", "r", "g"];
var gameTwo = ["m", "a", "t", "r", "i", "x"];
var gameThree = ["s", "k", "y", "n", "e", "t"];
var gameFour = ["r", "e", "k", "a", "l", "l"];
var gameFive = ["l", "o", "o", "p", "e", "r"];

var allGames = [gameOne, gameTwo, gameThree, gameFour, gameFive];
var gameRandom = allGames[Math.floor(Math.random() * 5)];

// Global Variables
var guessAmount = 15;
var winCount = 0;
var hasStartedGame = false;
var letterHistory = [];
var emptyWord;

// Variable references to hold HTML using .textContent
var underscoreSetup = document.getElementById( "underscore-setup" );
var guessStat = document.getElementById( "guess-pool" );
var letterStat = document.getElementById( "letters-guessed" );
var winStat = document.getElementById( "win-count" );

winStat.textContent = "WINS: " + winCount;
underscoreSetup.textContent = "_ _ _ _ _ _";
letterStat.textContent = "LETTERS GUESSED: " + letterHistory;
guessStat.textContent = "GUESSES REMAINING: " + guessAmount;

function createEmptyWord(gameWord) {
    emptyWord = gameWord.slice();
    for ( var i = 0; i < emptyWord.length; i++ ) {
        emptyWord[i] = "_";
    }
}

function reloadPage() {
    window.location.reload();
}   

document.onkeyup = function(event) {
    var userGuess = event.key;

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
                    if ( guessAmount > 1 ) {
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
        }
        if (emptyWord.join() === gameWord.join()) {
            winCount++;
            winStat.textContent = "WINS: " + winCount;
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

}

createEmptyWord(gameRandom);

// if guess amount reaches zero, end game
// After a win or loss, a new game will appear to play with new word.


