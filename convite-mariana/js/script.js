const eventDate = new Date("2025-10-25T19:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function format(value){

  return value < 10
  ? `0${value}`
  : value;

}

function updateCountdown(){

  const now = new Date().getTime();

  const distance = eventDate - now;

  if(distance <= 0){

    document.getElementById("countdown").innerHTML = `
      <div style="grid-column:1/-1;text-align:center;">
        <h2 style="font-size:2rem;">
          ✨ A festa começou ✨
        </h2>
      </div>
    `;

    clearInterval(interval);

    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));

  const h = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const m = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const s = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  days.textContent = format(d);
  hours.textContent = format(h);
  minutes.textContent = format(m);
  seconds.textContent = format(s);

}

updateCountdown();

const interval = setInterval(updateCountdown,1000);

/* EFEITO PREMIUM */

document
.querySelector(".btn-location")
.addEventListener("mouseenter",()=>{

  document.querySelector(".glass-card")
  .style.transform = "scale(1.01)";

});

document
.querySelector(".btn-location")
.addEventListener("mouseleave",()=>{

  document.querySelector(".glass-card")
  .style.transform = "scale(1)";

});