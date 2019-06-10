var random = (Math.random());
var multiply = random * 100;
var round = Math.round(multiply) ;
var number = round;

for(g = 0; g < 5; g++)

var guess = prompt("I thought of a Number 1-100, Guess my Number, You have 5 Chances!", "Enter your number here")

if(guess < number){

	prompt("higher." + c, "Enter your new number here");
}

else if(guess > number)
{
	prompt("lower." + c, "Enter your new number here");
}
else
{
	alert("You guessed it! " + number, "Want to play again?");
}

