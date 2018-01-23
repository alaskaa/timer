class Timer {

  constructor() {
    // initialise variables here
    var date = new Date('July 31, 91 00:30:00 GMT+00:00');
    //var timerStart = (date.getMinutes()+":"+date.getSeconds()+0);
    var timerStart = 30;
    this.sessionTime = timerStart;
    this.breakNum = 5;
    this.sessionNum = 25;
    this.toZero = 0;
  }

  reduceTime () {
    this.sessionTime--;
    console.log('hi');
  }

  incrementCounter() {
    this.sessionTime++;
  }

  decrementCounter() {
    this.sessionTime--;
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

  getSessionTime() {
    return this.sessionTime;
  }





}
