var word = prompt("What word you would like to give user for Hangman game:");
var hint = prompt("What kind of hint you want to give user : ");
var chances = prompt("How many chances you want to give user : ");
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    if (i == 2) {
        answerArray[i] = word[i];
    }
    else {
        answerArray[i] = "_";
    }
}
console.log(answerArray);
var remainingLetters = word.length;
alert("The hint is : " + hint);
alert("No of chances to enter wrong letter : " + chances);
while (chances > 0 && remainingLetters > 0) {
    alert(answerArray.join(" "));
    alert("Now you have a " + chances + " chances. And your Hint is : " + hint);
    var guess = prompt("Guess a letter or click cancel to stop playing :");
    var chance1 = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            chances++;
            chance1++;
            if (chance1 > 1) {
                chances--;
            }
        }
    }
    chances--;
}
if (remainingLetters == 0) {
    alert(answerArray.join(" "));
    alert("Goodjob!! the answer is : " + word);
}
else if (chances == 0) {
    alert("You fail");
}
//# sourceMappingURL=hangman.js.map