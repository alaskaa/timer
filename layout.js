const timer = new Timer();

var clicked = false;
var stoppable = true;
var addersActive = true;

document.getElementById("session-num").innerHTML = timer.sessionNum;
document.getElementById("time-window").innerHTML = timer.minutes;

document.getElementById("session-min").onclick = () => {
  if(clicked === false && addersActive === true) {
  timer.decrementSession();
  document.getElementById("session-num").innerHTML = timer.sessionNum;
  timer.decrementMinutes();
  document.getElementById("time-window").innerHTML = timer.minutes;
  }
}

document.getElementById("session-plus").onclick = () => {
  if(clicked === false && addersActive === true) {
  timer.incrementSession();
  document.getElementById("session-num").innerHTML = timer.sessionNum;
  timer.incrementMinutes();
  document.getElementById("time-window").innerHTML = timer.minutes;
  }
}


document.getElementById("start").onclick = () => {
  if(clicked === false && stoppable === true) {
    timer.reduceTime();
    clicked = true;
    document.getElementById("start").innerHTML = "Stop";
  } else if(clicked === true && stoppable === true) {
    timer.clearTime();
    clicked = false;
    addersActive = false;
    stoppable = false;
  }
}

document.getElementById("reset").onclick = () => {
  if(clicked === false) {
    //timer.clearTime();
    //clicked = false;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("time-window").innerHTML = "30";
    addersActive = true;
    stoppable = true;
  }
}
