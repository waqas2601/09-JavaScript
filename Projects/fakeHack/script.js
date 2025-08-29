const terminal = document.getElementById("terminal");
const flash = document.getElementById("flash");

const baseLines = [
  "Bypassing encryption...",
  "Accessing BIOS...",
  "Injecting payload...",
  "Overriding firewall...",
  "Tracking GPS coordinates...",
  "Hijacking root privileges...",
  "Decrypting messages...",
  "Compromising authentication...",
  "Extracting bank credentials...",
  "Breaching internal systems...",
];

const alerts = [
  "⚠️ WARNING!!! UNAUTHORIZED ACCESS DETECTED",
  "❗ SYSTEM BREACH IN PROGRESS",
  "🚨 FIREWALL COMPROMISED",
  "🛑 DATA LEAK INITIATED",
];

const symbols = "!@#$%^&*()_+{}|:<>?/[]\\;.,~`-=©√∆¥₨§¶∞✓▓▒░";
const glitch = "⣿⠿⠛⠂⠆⠤⠶⢀⢣⢞⣾⣷";

let count = 0;
const maxLines = 100;

function randomText(len = 10) {
  const all = symbols + glitch;
  return Array.from(
    { length: len },
    () => all[Math.floor(Math.random() * all.length)]
  ).join("");
}

function randomLine() {
  const base = baseLines[Math.floor(Math.random() * baseLines.length)];
  return `${randomText(3)} ${base} ${randomText(5)}`;
}

function createLine(text, isWarning = false, isFinal = false) {
  const line = document.createElement("div");
  line.textContent = "> " + text;

  if (isFinal) line.classList.add("final");
  else if (isWarning) line.classList.add("warning");

  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function flashScreen() {
  flash.style.display = "block";
  flash.style.animation = "flashScreen 0.1s";
  setTimeout(() => {
    flash.style.display = "none";
    flash.style.animation = "none";
  }, 100);
}

function startHacking() {
  const interval = setInterval(() => {
    if (count < maxLines) {
      const chance = Math.random();
      if (chance < 0.1) {
        const warning = alerts[Math.floor(Math.random() * alerts.length)];
        createLine(warning, true);
        flashScreen();
      } else {
        createLine(randomLine());
      }
      count++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        createLine(" [ HACKING COMPLETE ]", false, true);
        flashScreen();
      }, 500);
    }
  }, 80);
}

startHacking();
