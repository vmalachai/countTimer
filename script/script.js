const timerForm = document.getElementById('timerForm');
const countdownDisplay = document.getElementById('countdownDisplay');

timerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let timeLeft = parseInt(document.getElementById('timeInput').value);
  if (isNaN(timeLeft) || timeLeft < 1 || timeLeft > 60) {
    alert('Please enter a valid number between 1 and 60.');
    return;
  }

  countdownDisplay.textContent = `Time left: ${timeLeft}`;

  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownDisplay.textContent = `Time left: ${timeLeft}`;
    
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      alert('Time is up!');
    }
  }, 1000);
});
document.getElementById('resetButton').addEventListener('click', function () {
  clearInterval(countdownInterval);
  countdownDisplay.textContent = 'Time left: 0';
});
