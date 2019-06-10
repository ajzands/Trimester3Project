var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var random = (Math.random());
var multiply = random * 100;
var round = Math.round(multiply) ;
var number = round;
var currentGuess = null
var currentMax = 100
var currentMin = 1

function newNumber(){
    currentGuess = Math.floor((currentMax + currentMin) / 2);
        }

function Now(){
//Date Creation
var TodaysDate  = new Date();
//Variable
let daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
//Lists
let date = TodaysDate.getDate();
let month = monthsList[TodaysDate.getMonth()];
let year = TodaysDate.getFullYear();
let day = daysList[TodaysDate.getDay()];

let today = `${day}, ${month} ${date}, ${year}, `;

// Creating AM or PM
let amOrPm;
let twelveHours = function (){
    if(TodaysDate.getHours() > 12)
    {
//PM
    amOrPm = 'PM';
    let twentyFourHourTime = TodaysDate.getHours();
    let conversion = twentyFourHourTime - 12;
    return `${conversion}`

}else{
    amOrPm = 'AM';
    return `${TodaysDate.getHours()}`}
};

let hours = twelveHours();
let minutes = TodaysDate.getMinutes();

let currentTime = `${hours}:${minutes} ${amOrPm}`;
return `${month} ${date}, ${year}, ${hours}:${minutes} ${amOrPm}`;
}

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !hi
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hiya, How are you?'
                });
            break;
            
            case 'creator':
                bot.sendMessage({
                    to: channelID,
                    message: 'Created by Av3ry18'
                });
            break;

            case 'date':
                bot.sendMessage({
                    to: channelID,
                    message: 'The date is: ' + Now()
                })
            break;

            case 'Hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hiya, How are you?'
                });
            break;

            case 'HI':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hiya, How are you?'
                });
            break;

            case 'hI':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hiya, How are you?'
                });
            break;

            case 'commands':
                bot.sendMessage({
                    to: channelID,
                    message: 'My commands are !hi, !date, !commands, !creator, !guess, !ready, !higher, !lower, !correct. (More coming soon!)'
                });
            break;

            case 'guess':
                newNumber();
                bot.sendMessage({
                    to: channelID,
                    message: 'Think of a Number between 1 and 100, When you have the number, say !ready, and say !correct when I guess it'
                });
            break;

            case 'ready':
                bot.sendMessage({
                    to: channelID,
                    message: "My guess is " + currentGuess + " tell me if it is !higher or !lower than my guess"
                });
            break;

            case 'higher':
            currentMin = currentGuess + 1
                currentGuess = (currentMax + currentMin) / 2
                currentGuess = Math.floor(currentGuess)
                if(currentGuess >= 100){
                    currentGuess = 100
                    currentMax = 100
                }
                bot.sendMessage({
                    to: channelID,
                    message: "My guess is " + currentGuess + " Tell me if it is !higher or !lower than my guess"
                });
            break;

            case 'lower':
            currentMax = currentGuess - 1
                currentGuess = (currentMax + currentMin) / 2
                currentGuess = Math.floor(currentGuess)
            if(currentMax == 2){
                currentGuess = currentMax
            }
                bot.sendMessage({
                    to: channelID,
                    message: "My guess is " + currentGuess + " Tell me if the number is !higher or !lower than my guess "
                });
            break;

            case 'correct':
                currentMax = 100
                currentMin = 1
                currentGuess = Math.floor((currentMax + currentMin) / 2 );
                bot.sendMessage({
                    to: channelID,
                    message: "I got it " + " Type !guess to play again."
                });
            break;


         


           



            // Just add any case commands if you want to..
         }
     }
});