//Type Script hangman file
//Note: not sure all syntax is same for prompt function in typescript and javascript are same or note.

var word : string = prompt("What word you would like to give user for Hangman game:");
var hint : string = prompt("What kind of hint you want to give user : ");
var chances : any = prompt("How many chances you want to give user : ");


// Set up the answer array for picked word for design "-------"" 
var answerArray : string[] = [];
for (var i = 0; i < word.length; i++) {
    if(i==2){
        answerArray[i]=word[i];
    }else{
    answerArray[i] = "_";
    }
} 

console.log(answerArray);
var remainingLetters : number = word.length;

//hint
alert(`The hint is : ${hint}`);
alert(`No of chances to enter wrong letter : ${chances}`);

while(chances>0 && remainingLetters>0){
    //show player therir progress with answer array[] contacination
    alert(answerArray.join(" "));

    //Remaining Chances.
    alert(`Now you have a ${chances} chances. And your Hint is : ${hint}`);
    //get a guess from player
    var guess : string = prompt("Guess a letter or click cancel to stop playing :");
    var chance1=0;//randome variable to prevent increment more than one.

    for(var j=0 ; j<word.length ; j++){
        if(word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
            chances++;
            chance1++;
            if(chance1>1){//this loop prevents to incerease chances variable more than one.
                chances--; 
            }
        }  
    }
    chances--;
}

//print for user if user is win or loose
if(remainingLetters == 0){
    alert(answerArray.join(" "));
    alert(`Goodjob!! the answer is : ${word}`);
}else if(chances == 0){
    alert(`You fail`);
}