// Array with words to be chosen from. 
var words = ['gotham', 'alfred', 'robin', 'batmobile', 'joker', 'catwoman', 'poisonivy'];

//score keeper variables 
var userWins = 0;
var userLosses = 0;
var userGuessesLeft= 5;

// Computer Chooses Word
var wordChosen = words[Math.floor(Math.random() * words.length)];

//User inputs letter guesses













function chooseWord () {
    // Write code here
    
}

//



//for loop for blank spaces in word

var blank= "";

for  (var i - 0; i < 5; i++) {
    blank + '_ ';
}

var makeSpaces = function(spaces){

    var blank= "";

    for  (var i - 0; i < spaces; i++) {
    blank + '_ ';
    }

    return blank.slice(0,-1);
}

// key up event with call back function and if statements


// check for letter in word
varCheckWordForLetter = function(letter, word){
    word.indexOf(Letter) > -1
}

// position of letter - work needed
var getPositionOfLetter = function (letter, word) {
    var accumulator = [];
    while (word.indexOf (letter.toLowerCase())> -1) {
        accumulator.push(word.word.indexOf (letter.toLowerCase()))
        word.
        replace (letter, "_")
    }

    return
    word.indexOf (letter.toLowerCase())
}