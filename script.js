const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const birthday = "23 March 2023";

function countdown() {
  //get the countdown date and todays date as variables
  const birthdayDate = new Date(birthday);
  const currentDate = new Date();
  //calculate seconds left
  const totalSeconds = (birthdayDate - currentDate) / 1000;

  //calculate days left

  const days = Math.floor(totalSeconds / 3600 / 24);

  //calculate hours left

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds % 60);

  // subtract to get the remaining time in seconds

  // console.log(days, hours, minutes, seconds);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

countdown();
