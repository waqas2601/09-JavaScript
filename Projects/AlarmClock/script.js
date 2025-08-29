const timeEl = document.getElementById("time");
const statusEl = document.getElementById("status");
const alarmSound = document.getElementById("alarm-sound");

let alarmTime = null;
let alarmPlaying = false;
let alarmTimeout;

// fill hours (1–12)
const hoursSelect = document.getElementById("hours");
for (let i = 1; i <= 12; i++) {
  let h = i.toString().padStart(2, "0");
  hoursSelect.innerHTML += `<option value="${h}">${h}</option>`;
}

// fill minutes (00–59)
const minutesSelect = document.getElementById("minutes");
for (let i = 0; i < 60; i++) {
  let m = i.toString().padStart(2, "0");
  minutesSelect.innerHTML += `<option value="${m}">${m}</option>`;
}

const ampmSelect = document.getElementById("ampm");

// update digital clock
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 → 12

  timeEl.textContent = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;

  // check alarm
  const current24 = `${String(now.getHours()).padStart(2, "0")}:${minutes}`;
  if (alarmTime === current24 && seconds === "00" && !alarmPlaying) {
    startAlarm();
  }
}

// start alarm sound for 1 min
function startAlarm() {
  alarmPlaying = true;
  alarmSound.play();
  statusEl.textContent = "⏰ Alarm ringing!";

  // stop automatically after 1 minute
  alarmTimeout = setTimeout(() => {
    stopAlarm();
  }, 60000);
}

// stop alarm
function stopAlarm() {
  alarmPlaying = false;
  alarmSound.pause();
  alarmSound.currentTime = 0;
  clearTimeout(alarmTimeout);
  statusEl.textContent = "✅ Alarm stopped.";
}

// set alarm
document.getElementById("set-alarm").addEventListener("click", () => {
  let h = parseInt(hoursSelect.value);
  const m = minutesSelect.value;
  const ampm = ampmSelect.value;

  // convert to 24h
  if (ampm === "PM" && h !== 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;

  alarmTime = `${String(h).padStart(2, "0")}:${m}`;
  statusEl.textContent = `⏳ Alarm set for ${hoursSelect.value}:${m} ${ampm}`;
});

// reset alarm
document.getElementById("reset-alarm").addEventListener("click", () => {
  alarmTime = null;
  stopAlarm();
  statusEl.textContent = "Alarm cleared.";
});

// run clock every second
setInterval(updateTime, 1000);
updateTime();
