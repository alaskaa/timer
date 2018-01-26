const timer = new Timer();

document.getElementById("break-num").innerHTML = timer.breakNum;
document.getElementById("session-num").innerHTML = timer.sessionNum;

document.getElementById("break-min").onclick = () => {
  timer.decrementBreak();
  document.getElementById("break-num").innerHTML = timer.breakNum;
}

document.getElementById("break-plus").onclick = () => {
  timer.incrementBreak();
  document.getElementById("break-num").innerHTML = timer.breakNum;
}

document.getElementById("session-min").onclick = () => {
  timer.decrementSession();
  document.getElementById("session-num").innerHTML = timer.sessionNum;
}

document.getElementById("session-plus").onclick = () => {
  timer.incrementSession();
  document.getElementById("session-num").innerHTML = timer.sessionNum;
}

document.getElementById("time-window").onclick = () => {
    timer.reduceTime();
}
