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
return `${month} ${date}, ${year}, ${hours}:${minutes} ${amOrPm}`
}

console.log(Now());