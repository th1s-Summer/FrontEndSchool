import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const HOUR_MILLISECONDS = NINE_HOURS_MILLISECONDS / 9;
const DAY_MILLISECONDS = HOUR_MILLISECONDS * 24;
const MUNITE_MILLISECONDS = HOUR_MILLISECONDS / 60;
const SECOND_MILLISECONDS = MUNITE_MILLISECONDS / 60;

const currentTitle = document.querySelector("h2");
const clockTitle = document.querySelector("h3");
const timer = setInterval(xmasTimer, 1000);

function displayCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();

  currentTitle.innerText = `현재시간 : ${years}년 ${months}월 ${days}일 ${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function xmasTimer() {
  const xmasDay = new Date("2021-12-24:00:00:00");
  const now = new Date();
  const remainDt = xmasDay - now;

  const remaindays = Math.floor(remainDt / DAY_MILLISECONDS);
  const remainHours = Math.floor(
    (remainDt % DAY_MILLISECONDS) / HOUR_MILLISECONDS
  );
  const remainMunites = Math.floor(
    (remainDt % HOUR_MILLISECONDS) / MUNITE_MILLISECONDS
  );
  const remainSeconds = Math.floor(
    (remainDt % MUNITE_MILLISECONDS) / SECOND_MILLISECONDS
  );

  displayCurrentTime();
  if (remainDt < 0) {
    clearInterval(timer);
    clockTitle.innerHTML = "Wait next Christmas! That day already passed.";
  } else {
    clockTitle.innerText = `xmas D-day: ${remaindays}d ${remainHours}hour ${remainMunites}m ${remainSeconds}s`;
  }
}