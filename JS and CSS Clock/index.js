const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

document.querySelector("button").addEventListener("click", change);

function change() {
  document.querySelector(".clock").classList.toggle("invisible");
  document.querySelector(".digital-clock").classList.toggle("invisible");
}

function digitalTime() {
  const date = new Date();
  var seconds = date.getSeconds();
  var mins = date.getMinutes();
  var hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  hour = (hour < 10) ? `0${hour}` : hour;
  mins = (mins < 10) ? `0${mins}` : mins;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  var p = document.getElementById('dispTime');

  if (hour > 12) {
    p.innerText = `${hour}:${mins}:${seconds} PM`;
  } else {
    p.innerText = `${hour}:${mins}:${seconds} AM`;
  }
}

setInterval(digitalTime, 1000);
