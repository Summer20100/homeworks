let PhoneClock = new AlarmClock();
PhoneClock.addClock('22:55', () => console.log ('New week!'), 1);
PhoneClock.addClock('22:56', () => console.log ('New week!!!'), 2);
PhoneClock.removeClock(2);
PhoneClock.addClock('22:57', () => console.log ('Go sleep'), 3);
PhoneClock.start();
PhoneClock.stop();
PhoneClock.printAlarms();