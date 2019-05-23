var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

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
                    message: 'My commands are !hi, !date, !commands, and !creator. (More coming soon!)'
                });
            break;

         


           



            // Just add any case commands if you want to..
         }
     }
});