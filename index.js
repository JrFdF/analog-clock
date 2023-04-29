function setClockHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  const secondHandRotation = (seconds / 60) * 360;
  const minuteHandRotation = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourHandRotation = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
  hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
}

setClockHands();
setInterval(setClockHands, 1000);
