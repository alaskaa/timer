class Timer {

  constructor() {
    this.sessionNum = 30;

    this.minutes = 30;
    this.seconds;
    this.ticking = false;
    this.running = false;
  }

  reduceTime() {
    this.running = true;
    console.log(this.running);
    this.minutes = this.minutes-1;
    this.seconds = 59;
    let m = this.minutes;
    let s = this.seconds;
    var interval;

    if(this.ticking === false) {
      console.log(this.ticking);
      this.ticking = true;
      console.log(this.ticking);
      clearInterval(interval);

      interval = setInterval(function(){
        document.getElementById("time-window").innerHTML = m + ":" + s;
        s--;
        if(s == -1) {
          m--;
          s = 59;
          if (m == 0) {
            m = 30;
          }
        }
      },1000);
      console.log("Heyoooo" + this.ticking);
    } else if (this.ticking === true) {
      clearInterval(interval);
      this.ticking = false;
      console.log("This is in the else: " + this.ticking);
      document.getElementById("time-window").innerHTML = "30:00";
    }
    return this.running;
  }


  extraZero(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
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
