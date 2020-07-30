console.log("StopWatch");

let eleBtnStart = document.querySelector("#btnStart");
let eleBtnStop = document.querySelector("#btnStop");
let eleBtnReset = document.querySelector("#btnReset");
let eleTimer = document.querySelector("#divTimer");

let timeTicker = (() => {
  var hours = minutes = seconds = 0;
  var timerTick;
  return {
    start : () => {
      if(!timerTick) {
      timerTick = setInterval(() => {
        seconds++;
        if(seconds == 60) {
          minutes += 1;
          seconds = 0;
          if(minutes == 60) {
            hours += 1;
            minutes = 0;
          }
        }
        eleTimer.innerHTML = `<br />
${hours.toString().length == 1 ? "0" + hours : hours}
: ${minutes.toString().length == 1 ? "0" + minutes : minutes}
: ${seconds.toString().length == 1 ? "0" + seconds : seconds}`;
      },25);
      }
    },
    stop : () => {
      if(timerTick) {
      clearInterval(timerTick);
        timerTick = false;
      }
    },
    reset : () => {
      seconds = minutes = hours = 0;
      clearInterval(timerTick);
      timerTick = false;
      eleTimer.innerHTML = `<br />0${hours} : 0${minutes} : 0${seconds}`;
    }
  }
})();


eleBtnStart.addEventListener('click', () => {
  timeTicker.start();
});

eleBtnStop.addEventListener('click', () => {
  timeTicker.stop();
})

eleBtnReset.addEventListener('click', () => {
  timeTicker.reset();
})

