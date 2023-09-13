const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

const newYears = '1 Jan 2024';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const TotalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(TotalSeconds / 3600 / 24); 
    const hours = Math.floor(TotalSeconds / 3600 % 24);
    const minutes = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countDown();
setInterval(countDown, 1000);
