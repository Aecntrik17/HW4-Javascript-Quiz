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

// Asking the first question after the begin button is clicked.
function displayQuestion() {
  introEl.style.display = "none";
  questionEl.textContent = askQuestionEl[i].q;
  btnA.textContent = askQuestionEl[i].opt1;
  btnB.textContent = askQuestionEl[i].opt2;
  btnC.textContent = askQuestionEl[i].opt3;
  btnD.textContent = askQuestionEl[i].opt4;
  set1El.style.display = "block";
  beginEl.style.display = "none";
}
// setting index value to 0 so the loop starts with the first array
var i = 0;
// defining the object, data selections
var askQuestionEl = [
  {
    q:
      "This data value type can only be one of two things; yes or no, or true or false.",
    opt1: "Booleans",
    opt2: "Absolutes",
    opt3: "Variables",
    opt4: "Concretes",
    answer: "Booleans",
  },
  {
    q: "________ are blocks of code that can be named and reused.",
    opt1: "Functions",
    opt2: "Syntax",
    opt3: "Arrays",
    opt4: "Objects",
    answer: "Functions",
  },
  {
    q:
      "Objects are values that can contain other values. They use _______ to name values, which are a lot like variables.",
    opt1: "Keys",
    opt2: "Answers",
    opt3: "Titles",
    opt4: "Subjects",
    answer: "Keys",
  },
  {
    q:
      "______ are values made up of text and can contain letters, numbers, symbols, punctuation, and even emoji.",
    opt1: "Strings",
    opt2: "Conditionals",
    opt3: "Loops",
    opt4: "Statements",
    answer: "Strings",
  },
];
// creating function to verify answers chosen
function verifyAns(event) {
  let userChoice = event.target.textContent;
  //   if correct, alert user
  if (userChoice === askQuestionEl[i].answer) {
    score++;
    alert("correct");
    //   if the answer is incorrect alert and assess a 5 second penalty
  } else {
    incorrectEl++;
    alert("incorrect");
    secondsLeft = secondsLeft - 5;
  }
  // proceed to the next array of questions, answers, and correct answer in the object
  i++;

  // making sure that the code pushes to the next question, until the last question, then putting clock to 0 which ends the quiz
  if (i < 4) {
    displayQuestion();
  } else {
    secondsLeft = 0;
  }
}
