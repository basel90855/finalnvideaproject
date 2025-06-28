const arrow = document.getElementById("arrow1");
const architecture = document.getElementById("architecture");

arrow.addEventListener("click", () => {
  arrow.classList.toggle("rotate");
  architecture.classList.toggle("show");
});

const arrow2 = document.getElementById("arrow2");
const performance = document.getElementById("performance");

arrow2.addEventListener("click", () => {
  arrow2.classList.toggle("rotate");
  performance.classList.toggle("show");
});
const form = document.getElementById("feedbackform");
const nameinput = document.getElementById("nameinput");
const msginput = document.getElementById("msginput");
const userresponse = document.getElementById("userresponse");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameinput.value.trim();
  const msg = msginput.value.trim();

  if (name && msg) {
    userresponse.innerHTML = `
      <h3>Thanks for your feedback, ${name}!</h3>
      <p>"${msg}"</p>
    `;
    nameinput.value = "";
    msginput.value = "";
  }
});
let countdownSeconds = 4 * 60 * 60;
const countdownDisplay = document.getElementById("countdown");

function updateCountdown() {
  const hrs = String(Math.floor(countdownSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(countdownSeconds % 60).padStart(2, '0');

  countdownDisplay.textContent = `${hrs}:${mins}:${secs}`;

  if (countdownSeconds > 0) {
    countdownSeconds--;
  } else {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "Time's up!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
