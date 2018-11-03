// Each game represented by a string of letters
var gameOne = ["o", "a", "s", "i", "s"];
var gameTwo = ["m", "a", "t", "r", "i", "x"];
var gameThree = ["s", "k", "y", "n", "e", "t"];
var gameFour = ["r", "e", "k", "a", "l", "l"];
var gameFive = ["l", "o", "o", "p", "e", "r"];
var gameSix = ["r", "e", "p", "l", "i", "c", "a", "n", "t", "s"];
var gameSeven = ["t", "r", "o", "n"];
var gameEight = ["d", "a", "f", "t", "p", "u", "n", "k"];
var gameNine = ["r", "o", "b", "o", "c", "o", "p"];
var gameTen = ["m", "o", "r", "p", "h", "e", "u", "s"];
var allGames = [gameOne, gameTwo, gameThree, gameFour, 
                gameFive, gameSix, gameSeven, gameEight, 
                gameNine, gameTen];

// Audio activated upon first user interaction
var audio = document.querySelector("audio");

// Global Variables
var guessAmount = 15;
var winCount = 0;
var letterHistory = [];
var emptyWord;
var gameWord;

// Variable references to hold HTML using .textContent
var underscoreSetup = document.getElementById( "underscore-setup" );
var guessStat = document.getElementById( "guess-pool" );
var letterStat = document.getElementById( "letters-guessed" );
var winStat = document.getElementById( "win-count" );

winStat.textContent = "WINS: " + winCount;
letterStat.textContent = "LETTERS GUESSED: " + letterHistory;
guessStat.textContent = "GUESSES REMAINING: " + guessAmount;

function resetWord() {
    gameWord = allGames[Math.floor(Math.random() * 10)];
    emptyWord = gameWord.slice();
    for ( var i = 0; i < emptyWord.length; i++ ) {
        emptyWord[i] = "_";
    }
    underscoreSetup.textContent = emptyWord.join(" ");
} 

function resetStats() {
    resetWord();
    guessAmount = 15;
    guessStat.textContent = "GUESSES REMAINING: " + guessAmount;
    letterHistory = [];
    letterStat.textContent = "LETTERS GUESSED: " + letterHistory;
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
                    if ( guessAmount > 0 ) {
                        guessAmount--;
                        guessStat.textContent = "GUESSES REMAINING: " + guessAmount;
                    }
                }
            }
        }
    }

    function userProgress() {   
        for ( var i = 0; i < gameWord.length; i++ ) {
            if ( userGuess === gameWord[i] ) {
                if ( guessAmount > 0 ) {
                    emptyWord[i] = gameWord[i];
                } else {
                    resetStats();
                }
            }
        }
        if (emptyWord.join() === gameWord.join()) {
            winCount++;
            winStat.textContent = "WINS: " + winCount;
            resetStats();
        }
        underscoreSetup.textContent = emptyWord.join(" ");
    }

    function lettersUsed() {
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
                    letterHistory.push(userGuess);
                    letterStat.textContent = "LETTERS GUESSED: " + letterHistory.join(", ");
                }
            }
        }
    }

    audio.play();
    userTrys();
    lettersUsed();
    userProgress();

}

resetWord();


