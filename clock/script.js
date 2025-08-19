function setClock3D() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let ms = now.getMilliseconds();

  const hourAngle = 30 * (hour % 12) + (minute / 60) * 30 + (second / 3600) * 30;
  const minuteAngle = 6 * minute + (second / 60) * 6 + (ms / 60000) * 6;
  const secondAngle = 6 * second + (ms / 1000) * 6;

  document.querySelector('.hand.hour').style.transform =
    `translate(-50%, 0) rotateZ(${hourAngle}deg) scaleY(1.02)`;
  document.querySelector('.hand.minute').style.transform =
    `translate(-50%, 0) rotateZ(${minuteAngle}deg) scaleY(1.03)`;
  document.querySelector('.hand.second').style.transform =
    `translate(-50%, 0) rotateZ(${secondAngle}deg) scaleY(1.04)`;

  // Update numerical clock
  const pad = n => n.toString().padStart(2, '0');
  const timeString = `${pad(hour)}:${pad(minute)}:${pad(second)}`;
  const numClock = document.querySelector('.numerical-clock');
  if (numClock) {
    numClock.textContent = timeString;
  }
}

setClock3D();
setInterval(setClock3D, 40);