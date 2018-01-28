class Timer {

  constructor() {
    this.sessionNum = 30;

    this.minutes = 30;
    this.seconds = 0;
    this.ticking = false;
    this.running = false;
  }

  reduceTime() {
    //this.minutes = this.minutes-1;
    //this.seconds = 59;

    let m = this.minutes;
    let s = this.seconds;

    var interval = setInterval(function(){

      document.getElementById("time-window").innerHTML = m + ":" + s;
      s--;
      if(s == -1) {
        m--;
        s = 59;
      }
      else if (s == 0 && m == 0)  {
          console.log("hello");
          clearTime();
          let audio = document.getElementById("beep");
          audio.play();
      }
      //this.ticking = true;
      },1000);
    window.interval = interval;
   }

  clearTime() {
    clearInterval(interval);
  }


  extraZero(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      //return valString;
    }
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
    if(this.running === false) {
    this.minutes++;
    }
  }

  decrementMinutes() {
    if(this.running === false) {
    this.minutes--;
    }
  }

}
