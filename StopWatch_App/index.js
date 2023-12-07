const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start');
const stopButtonEl = document.getElementById('stop');
const resetButtonEl = document.getElementById('reset');


let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime; //lay thoi gian tu 19xx
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime; //lay thoi gian tu 19xx tru di cai truoc la duoc hien tại
        timerEl.textContent = formatTime(elapsedTime);
    },10)
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

function stopTimer(){
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00";
    
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

function formatTime(elapsedTime) {
    const millisecounds = Math.floor((elapsedTime % 1000)/10);
    const secounds = Math.floor((elapsedTime % (1000*60))/1000);
    const minutes = Math.floor((elapsedTime % (1000*60*60))/(1000*60));
    const hours = Math.floor(elapsedTime /(1000*60*60));
    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")+
        "."+(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")+
        "."+(secounds ? (secounds > 9 ? secounds : "0" + secounds) : "00")+
        "."+(millisecounds >  9 ? millisecounds : "0" + millisecounds)
    )
}

startButtonEl.addEventListener('click',startTimer);

stopButtonEl.addEventListener('click',stopTimer);

resetButtonEl.addEventListener('click',resetTimer);