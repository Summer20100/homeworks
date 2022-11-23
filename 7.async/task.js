class AlarmClock {
    constructor() {
        this.timerId = null;
        this.alarmCollection = [];
    }
    
    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('error text');
        } 
        else  if (typeof this.alarmCollection.find(alarm => alarm.id === id) !== 'undefined') {
            return console.error('Такой будильник существует!');
        }
        return this.alarmCollection.push({id, time, callback});
    }
  
    removeClock(id) {
        let inputAlarms = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        let outputAlarms = this.alarmCollection.length;
        return inputAlarms > outputAlarms;
    }
  
    getCurrentFormattedTime() {
        let zeroAdd = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let currentTime = new Date();
        let minutes = zeroAdd(currentTime.getMinutes());
        let hours = zeroAdd(currentTime.getHours());
        return hours + ':' + minutes;
    }
  
    start () {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }
  
    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
        return this.timerId = null;
        }
    }
  
    printAlarms () {
        return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
    }
    
    clearAlarms () {
        this.stop();
        return this.alarmCollection = [];
    }
  }