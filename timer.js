class Timer {

  constructor() {
    // initialise variables here
    this.sessionTime = "30:00";
    var date = new Date('July 31, 91 00:30:00 GMT+00:00');
    console.log(date.getMinutes()+":"+date.getSeconds()+0);
    this.breakNum = 5;
    this.sessionNum = 25;
  }

  reduceTime () {
  }



  incrementSession() {
    // increments the session by 1
    this.sessionNum++;
  }

  decrementSession() {
    // decrements the session by 1
    this.sessionNum--;
  }

  incrementBreak() {
    // increments break time by 1
    this.breakNum++;
  }

  decrementBreak() {
    // decrements break time by 1
    this.breakNum--;
  }

  getSessionTime() {
    return this.sessionTime;
  }

}
