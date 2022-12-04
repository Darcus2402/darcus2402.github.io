//Dom Elements
const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const panelElement = document.querySelector(".panel");
//Data di natale
const endDate = new Date("December 25 2022");

//tabella in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;


//Primo avvio --------------------------
const dateNow = new Date().getTime();
const endDateInMs = endDate.getTime();
const diff = endDateInMs - dateNow;


//Fine primo avvio --------------------


const counterTimer = setInterval(timer, 1000);

if(diff > 0){
    daysElement.innerHTML = Math.floor(diff / dayInMs);
    hoursElement.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
    minutesElement.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs);
    secondsElement.innerHTML = Math.floor( (diff % minuteInMs) / secondInMs);
} else  {
    panelElement.innerHTML = "<h1>Buon Natale!</h1>";
}

function timer(){
    const dateNow = new Date().getTime();
    const endDateInMs = endDate.getTime();
    const diff = endDateInMs - dateNow;

    if (diff > 0){
    daysElement.innerHTML = Math.floor(diff / dayInMs);
    hoursElement.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
    minutesElement.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs);
    secondsElement.innerHTML = Math.floor( (diff % minuteInMs) / secondInMs);
    } else {
        clearInterval(timer);
        panelElement.innerHTML = "<h1>Buon Natale!</h1>";
    }
}