const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');

const timerEl = document.getElementById('timer');

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let fomattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`; //2 digit, neu so dau ko co thi them 0

    timerEl.innerHTML = fomattedTime;
}

startEl.addEventListener('click',()=>{
    startEl.disabled = true;
    stopEl.disabled = false;
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
        }
    }, 1000);
});
stopEl.addEventListener('click',()=>{
    startEl.disabled = false;
    stopEl.disabled = true;
    clearInterval(interval);
});
resetEl.addEventListener('click',()=>{
    timeLeft = 1500;
    updateTimer();
    clearInterval(interval);
    startEl.disabled = false;
    stopEl.disabled = true;
});
function startTime(){

}