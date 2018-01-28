const timer = new Timer();

document.getElementById("session-num").innerHTML = timer.sessionNum;
document.getElementById("time-window").innerHTML = timer.minutes;

document.getElementById("session-min").onclick = () => {
  timer.decrementSession();
  document.getElementById("session-num").innerHTML = timer.sessionNum;
  timer.decrementMinutes();
  document.getElementById("time-window").innerHTML = timer.minutes;
}

document.getElementById("session-plus").onclick = () => {
  timer.incrementSession();
  document.getElementById("session-num").innerHTML = timer.sessionNum;
  timer.incrementMinutes();
  document.getElementById("time-window").innerHTML = timer.minutes;
}

document.getElementById("time-window").onclick = () => {
    timer.reduceTime();
}
