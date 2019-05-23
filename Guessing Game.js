var random = (Math.random());
var multiply = random * 100;
var round = Math.round(multiply) ;
var number = round;

for(g = 0; g < 7; g++)

var guess = prompt("I thought of a Number 1-100, Guess my Number, You have 8 Chances!")

if(guess < number){

	console.log("higher." + c);
}

else if(guess > number)
{
	console.log("lower." + c);
}
else
{
	console.log("You guessed it!" + number);
}

