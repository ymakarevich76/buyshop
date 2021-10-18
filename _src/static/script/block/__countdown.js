const getTimeRemaining = (endtime) => {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

const initializeClock = (endtime, el) => {
  var daysSpan = el.querySelector(".days");
  var hoursSpan = el.querySelector(".hours");
  var minutesSpan = el.querySelector(".minutes");
  var secondsSpan = el.querySelector(".seconds");

  const updateClock = () => {
    const t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      el.classList.add("timer__countdown--hidden");

      el.nextElementSibling.classList.add("timer__deadline-message--visible");

      clearInterval(timeinterval);
      return true;
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}


const deadlines = document.querySelectorAll('[data-time]').forEach((el, index) => {

  const timer = el.getAttribute('data-time');

  initializeClock(timer, el);
})
