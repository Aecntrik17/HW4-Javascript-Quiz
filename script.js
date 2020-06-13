// necesary variables
var body = document.body;
var introEl = document.querySelector("#introduction");
var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("#main");
var beginEl = document.querySelector("#begin");
var questionEl = document.querySelector("#question");
var set1El = document.querySelector(".Set1");
var ans1options = document.querySelector("#ans1options");
var answer1El = document.querySelector("#answer1El");
var userResults = document.querySelector("#user-results");
var nameInput = document.querySelector("#name");
var saveBtn = document.querySelector("#save");
var msgDiv = document.querySelector("#msg");
var userScoreEl = document.querySelector("#user-score");
var userNameSpan = document.querySelector("#user-name");
var registerEl = document.querySelector("#register");
var resetBtn = document.querySelector("#reset-quiz");
let score = 0;
let incorrectEl = 0;
var timerInterval;
var secondsLeft = 60;

// hides the results and register framework at the start of the quiz
set1El.style.display = "none";
registerEl.style.display = "none";

// activating start button, starting the timer, and displaying first question
beginEl.addEventListener("click", function () {
  event.preventDefault;
  setTime();
  displayQuestion();
});
// funtion to generating timer, display appropriate messaging
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
      registerEl.style.display = "block";
    }
  }, 1000);

  // function to notify user of quiz end and display score
  function sendMessage() {
    timeEl.textContent = " Time Expired, you scored " + score + " correct ";
    beginEl.style.display = "display";
    secondsLeft = 60;
    set1El.style.display = "none";
  }
}
