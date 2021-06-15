const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90; /* we add 90 because we set the clock-hands starting default point at 90 deg*/
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hoursDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
 
}

setInterval(setDate, 1000);