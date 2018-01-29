class Timer {

  constructor() {
    this.sessionNum = 30;

    this.minutes = 30;
    this.seconds = 0;
  }

  reduceTime() {
    //this.minutes = this.minutes-1;
    //this.seconds = 59;

    let m = this.minutes;
    let s = this.seconds;

    var interval = setInterval(function(){
      s--;
      if(s == -1) {
        m--;
        s = 59;
      } else if(s == 0 && m == 0) {
        let audio = document.getElementById("beep");
        audio.play();
        clearInterval(interval);
      }
      var sec;
      if(String(s).length == 1) {
        sec = "0"+s;
      } else {
        sec = s;
      }
      document.getElementById("time-window").innerHTML = m + ":" + sec;
    },100);
    window.interval = interval;
   }

  clearTime() {
    clearInterval(interval);
  }

  incrementSession() {
    // increments the session by 1
    if (this.sessionNum >= 1) {
      this.sessionNum++;
    }
  }

  decrementSession() {
    // decrements the session by 1
    if (this.sessionNum >= 2) {
      this.sessionNum--;
    }
  }

  incrementMinutes() {
    this.minutes++;
  }

  decrementMinutes() {
    if(this.minutes > 1)
    this.minutes--;
  }

}
