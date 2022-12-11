function isTimer() {
  let dateNow = new Date();
  let minutesDeadline = 32;
  dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

  function countdownTimer() {
    const diff = dateNow - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }

    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    const milSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

    let milsecString = milSeconds < 10 ? '0' + milSeconds : String(milSeconds);
    let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
    let secondsString = seconds < 10 ? '0' + seconds : String(seconds);
    let milsecArr = milsecString.split('');

    let minutesArr = minutesString.split('');
    let secondsArr = secondsString.split('');
    for (let i = 0; i < timerMilSecItems.length; i++) {
      timerMilSecItems[i].innerHTML = milsecArr[i];
    }
    for (let i = 0; i < timerMinutesItems.length; i++) {
      timerMinutesItems[i].innerHTML = minutesArr[i];
    }
    for (let i = 0; i < timerSecondsItems.length; i++) {
      timerSecondsItems[i].innerHTML = secondsArr[i];
    }
  }
  let timer = document.querySelector('.timer');
  let timerMilSec = timer.querySelector('[data-timer-milsec]');
  let timerMinuts = timer.querySelector('[data-timer-minuts]');
  let timerSeconds = timer.querySelector('[data-timer-seconds]');
  let timerMilSecItems = timerMilSec.querySelectorAll('.timer__number');
  let timerMinutesItems = timerMinuts.querySelectorAll('.timer__number');
  let timerSecondsItems = timerSeconds.querySelectorAll('.timer__number');

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  let timerId = setInterval(countdownTimer, 85);
}

isTimer();
