class Timer {

  constructor() {
    this.breakNum = 5;
    this.sessionNum = 30;

    this.minutes = 29;
    this.seconds = 59;
  }

  reduceTime() {
    let m = this.minutes;
    let s = this.seconds;
    setInterval(function(){
      console.log(this.minutes);
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

  incrementBreak() {
    // increments break time by 1
    if (this.breakNum >= 0) {
      this.breakNum++;
    }
  }

  decrementBreak() {
    // decrements break time by 1
    if (this.breakNum >= 1) {
      this.breakNum--;
    }
  }

//  getSessionTime() {
//    return this.sessionTime;
//  }





}
