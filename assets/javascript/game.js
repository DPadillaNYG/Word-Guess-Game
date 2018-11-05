// For the sake of grading and understanding the logic, I have attached comments below:

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
var allGames = [ gameOne, gameTwo, gameThree, gameFour, 
                 gameFive, gameSix, gameSeven, gameEight, 
                 gameNine, gameTen ];

// Audio activated upon first user interaction by "click"
var cyberMusic = document.getElementById( "cybermusic" );
var cityRain = document.getElementById( "cityrain" );

cyberMusic.play(); // Plays music immediately & indefinitely

// Activated when a win/loss condition has been met
var cyberAlert = document.getElementById( "cyberalert" );
    cyberAlert.volume = .8;

// Global Variables
var guessAmount = 15; // User record of guesses left
var winCount = 0; // User record of wins
var letterHistory = []; // Letters guessed get pushed into this empty array
var gameWord; // For storing randomized word
var emptyWord; // For storing a duplicate of gameWord to manipulate in-game
var isPlaying = true; // Flag variable created to block user input at win/loss alert box
var isAnimated = false; // Flag variable to get png image to animate indefinitely
var isRaining = false; // Flag variable to start rain on click only

// Variable references to hold HTML elements (refer to children of <main> in index.html)
var underscoreSetup = document.getElementById( "underscore-setup" );
var guessStat = document.getElementById( "guess-pool" );
var letterStat = document.getElementById( "letters-guessed" );
var winStat = document.getElementById( "win-count" );

// Initial HTML write-ins
winStat.textContent = "WINS: " + winCount;
letterStat.textContent = "LETTERS GUESSED: " + letterHistory;
guessStat.textContent = "GUESSES REMAINING: " + guessAmount;

// Starts rain upon user click
function startRain() {
    isRaining = true;
    cityRain.play();
} 

// Converts image into gif upon user click
function solidifyGif() {
    if ( !isAnimated ) {
        isAnimated = true;
        document.getElementById("cyber-city").src="assets/images/CyberPunk.gif";
    }
} 

// Randomizes the word being played
function resetWord() {
    gameWord = allGames[ Math.floor( Math.random() * 10 ) ];
    emptyWord = gameWord.slice();

    for ( var i = 0; i < emptyWord.length; i++ ) {
        emptyWord[i] = "_";
    }

    underscoreSetup.textContent = emptyWord.join(" ");
} 

// Reinitializes the user stats & word for the next game
function resetStats() {
    resetWord();
    cyberAlert.play();
    guessAmount = 15;
    guessStat.textContent = "GUESSES REMAINING: " + guessAmount;
    letterHistory = [];
    letterStat.textContent = "LETTERS GUESSED: " + letterHistory;
}

// Ends the game when the user has lost ( kinda "hacky" with UserProgress() function )
function losingGame() {
    if ( guessAmount === 0 ) {
        isPlaying = false;
        swal( '"The answer was ' + gameWord.join("").toUpperCase() +
        '. All those letters will be lost in time...like tears in the rain."' )
            .then( function() {
                isPlaying = true;
            });
        resetStats();
    }
}

// All functions utilizing "userGuess" are below
document.onkeyup = function( event ) {
    
    // Establishing user input
    var userGuess = event.key;  

    // Depletes guess attempts ( alphabet-check to ignore other key strokes )
    function userTrys() {
        if ( userGuess && isPlaying ) {
            if ( letterHistory.indexOf( userGuess ) === -1 ) {
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
                        guessAmount--;
                        guessStat.textContent = "GUESSES REMAINING: " + guessAmount;
                    }
                }
            }
        }
    }

    // Tracks user input while refreshing user progress and also checks for win conditions
    function userProgress() {   
        for ( var i = 0; i < gameWord.length; i++ ) {
            if ( userGuess === gameWord[i] && isPlaying ) {
                if ( guessAmount > -1 ) {
                    emptyWord[i] = gameWord[i];
                }
            }
        }

        if ( emptyWord.join() === gameWord.join() ) {
            winCount++;
            winStat.textContent = "WINS: " + winCount;
            isPlaying = false;
            swal( '"What if I told you ' + gameWord.join("").toUpperCase() 
                 + ' was correct."' ).then( function() {
                            isPlaying = true;
                        });
            resetStats();
        }

        underscoreSetup.textContent = emptyWord.join(" ");
    }

    // Keeps track of letters guessed ( alphabet-check to ignore other key strokes )
    function lettersUsed() {
        if ( userGuess && isPlaying ) {
            if ( letterHistory.indexOf( userGuess ) === -1 ) {
                if ( userGuess === "a" || userGuess === "b" || userGuess === "c" ||
                     userGuess === "d" || userGuess === "e" || userGuess === "f" ||
                     userGuess === "g" || userGuess === "h" || userGuess === "i" ||
                     userGuess === "j" || userGuess === "k" || userGuess === "l" ||
                     userGuess === "m" || userGuess === "n" || userGuess === "o" ||
                     userGuess === "p" || userGuess === "q" || userGuess === "r" ||
                     userGuess === "s" || userGuess === "t" || userGuess === "u" ||
                     userGuess === "v" || userGuess === "w" || userGuess === "x" ||
                     userGuess === "y" || userGuess === "z" ) {
                    solidifyGif();
                    startRain();
                    letterHistory.push( userGuess );
                    letterStat.textContent = "LETTERS GUESSED: " + letterHistory.sort().join(", ");
                }
            }
        }
    }

    // Function calls! 
    userTrys();
    lettersUsed();
    userProgress();
    losingGame();

}

resetWord();