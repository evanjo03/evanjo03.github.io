var wordlist = ["ACHELOUSAURUS", "AEGYPTOSAURUS", "ARCHAEOPTERYX", "CARNOTAURUS", "GIGANTOTOSAURUS", "PROTOCERATOPS", "RIOJASAURUS"];
var letterArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var visualArray = document.getElementById("letterSpaces-text"); //my span with the space for letters
var alreadyGuessed = document.getElementById("guessed-text"); //my span with letters already guessed
var guessesRemainingText = document.getElementById("guesses-remaining-text");//my span with the guesses left
var wordImageElement = document.getElementById("word-image");

//define a function that will select a random word from the array of words
function selectWord(array) {
    choice = array[Math.floor(Math.random() * array.length)];
    return choice;
}
function reset() {
    myWord = selectWord(wordlist);
    if (myWord == "ACHELOUSAURUS") {
        wordImageElement.setAttribute("src", "assets/images/achelou.jpg");
    }
    else if (myWord == "AEGYPTOSAURUS") {
        wordImageElement.setAttribute("src", "assets/images/aegypto.jpg");
    }
    else if (myWord == "ARCHAEOPTERYX") {
        wordImageElement.setAttribute("src", "assets/images/Archaeopteryx.jpg");
    }
    else if (myWord == "CARNOTAURUS") {
        wordImageElement.setAttribute("src", "assets/images/carnoto.jpg");
    }
    else if (myWord == "GIGANTOTOSAURUS") {
        wordImageElement.setAttribute("src", "assets/images/giganoto.jpg");
    }
    else if (myWord == "PROTOCERATOPS") {
        wordImageElement.setAttribute("src", "assets/images/proto.jpg");
    }
    else if (myWord == "RIOJASAURUS") {
        wordImageElement.setAttribute("src", "assets/images/Riojasaurus.jpg");
    }
    wordLength = myWord.length;
    wrongGuesses = [];
    correctGuesses = [];
    correctGuessesCounter = 0; // for win calculation
    guessesRemaining = 10;
    for (i = 0; i < wordLength; i++) {
        correctGuesses.push('_');
    }
    visualArray.innerHTML = correctGuesses.join(' ');
}

// create a variable for the first word to guess
var myWord = selectWord(wordlist);
var wordLength = myWord.length;
console.log(myWord);
if (myWord == "ACHELOUSAURUS") {
    wordImageElement.setAttribute("src", "assets/images/achelou.jpg");
}
else if (myWord == "AEGYPTOSAURUS") {
    wordImageElement.setAttribute("src", "assets/images/aegypto.jpg");
}
else if (myWord == "ARCHAEOPTERYX") {
    wordImageElement.setAttribute("src", "assets/images/Archaeopteryx.jpg");
}
else if (myWord == "CARNOTAURUS") {
    wordImageElement.setAttribute("src", "assets/images/carnoto.jpg");
}
else if (myWord == "GIGANTOTOSAURUS") {
    wordImageElement.setAttribute("src", "assets/images/giganoto.jpg");
}
else if (myWord == "PROTOCERATOPS") {
    wordImageElement.setAttribute("src", "assets/images/proto.jpg");
}
else if (myWord == "RIOJASAURUS") {
    wordImageElement.setAttribute("src", "assets/images/Riojasaurus.jpg");
}

var wrongGuesses = [];
var correctGuesses = [];
var correctGuessOnBoard = [];
var correctGuessesCounter = 0; // for win calculation
var guessesRemaining = 10;

guessesRemainingText.innerHTML = "You have a total of " + guessesRemaining + " guesses left!";

console.log("length:" + guessesRemaining);

//create blank board
for (i = 0; i < wordLength; i++) {
    correctGuesses.push('_');
}
visualArray.innerHTML = correctGuesses.join(' '); // turns array into string separated by spaces

//keyup event
document.onkeyup = function (event) {
    var upperKey = event.key.toUpperCase();
    if (letterArray.indexOf(event.key) !== -1) { // is the button a letter?

        if (wrongGuesses.indexOf(upperKey) === -1) { //did we already choose the letter?

            if (myWord.indexOf(upperKey) === -1) {// letter is wrong
                wrongGuesses.push(upperKey); //add to wrong guesses array
                guessesRemaining -= 1;

                if (wrongGuesses.length == 10) {
                    alert("You lose! The word was " + myWord);
                    reset();
                }

            }  //update letters guessed
            else { // letter is in the word
                for (var i = 0; i < wordLength; i++) {
                    if (myWord[i] == upperKey) {
                        correctGuesses[i] = upperKey;
                        var stringCorrect = correctGuesses.join("");
                        console.log(stringCorrect);
                        console.log(myWord);

                        if (stringCorrect == myWord) {
                            alert("You win! The word was " + myWord);
                            reset();
                        }
                    }

                }
            }

        }
        alreadyGuessed.innerHTML = wrongGuesses.join(" ");
        visualArray.innerHTML = correctGuesses.join(' ');
        guessesRemainingText.innerHTML = "You have " + guessesRemaining + " guesses remaining.";
    }
}










