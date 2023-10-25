const hour = document.querySelector('.hour');
const minut = document.querySelector('.minut');
const second = document.querySelector('.second');
const milSecond = document.querySelector('.mil-second');
let timer;
let fastSecond;
const startStopButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

// function to calculate stopwatch numbers
function startStop() {
  if (timer) {
    startStopButton.innerHTML = 'Start';
    startStopButton.style.backgroundColor = 'rgb(91, 213, 91)'
    clearInterval(timer);
    clearInterval(fastSecond);
    timer = null;
    } else if (!timer){
    startStopButton.innerHTML = 'Stop';
    startStopButton.style.backgroundColor = 'rgb(238, 92, 48)';
// separate interval for milsecond   
    fastSecond = setInterval(() => {
      let numMilSecond = Number(milSecond.innerHTML);
      if (numMilSecond < 76) {
        milSecond.innerHTML = numMilSecond + 13; 
      } else {
        milSecond.innerHTML = '00'
      }
    }, 100);
// interval for second, minut, and hour
    timer = setInterval(() => {
      let numberSec = Number(second.innerHTML);
      let numberMin = Number(minut.innerHTML);
      let numberHour = Number(hour.innerHTML);
      
      if (numberSec < 59) {
        second.innerHTML = numberSec + 1;
      } else if (numberSec === 59) {
        minut.innerHTML = numberMin + 1;
        second.innerHTML = 0;
      } else if (numberMin < 59) {
        hour.innerHTML = numberHour + 1;
        minut.innerHTML = 0;
      }
    }, 1000);
  }  
}

startStopButton.addEventListener('click', () => {
  startStop();
});

resetButton.addEventListener('click', () => {
  hour.innerHTML = '00';
  minut.innerHTML = '00';
  second.innerHTML = '00';
  milSecond.innerHTML = '00';
});
