var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start-button");
var quizInfoEl = document.getElementById("quiz-info");
var quizContainersEl = document.getElementById("quiz-container");
var highScoresEl = document.getElementById("high-scores");
var enterScoreEl = document.getElementById("enter-score");
var submitEl = document.getElementById("submit");
var userInitialsInput = document.querySelector("#user-initials");
var quizQuestionsAndAnswers = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____________.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. square brackets",
      "4. parenthesis",
    ],
    correctAnswer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ____________.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "String values must be enclosed within ____________ when being assigned to variables.",
    choices: ["1. quotes", "2. commas", "3. curly brackets", "4. parenthesis"],
    correctAnswer: 0,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. console.log",
      "3. terminal/bash",
      "4. for loops",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["1. *", "2. x", "3. =", "4. -"],
    correctAnswer: 2,
  },
];
var userHighScores = [];
let timeLeft = 90;
let i = 0;

startEl.addEventListener("click", function () {
  quizInfoEl.classList.add("display");
  var timeInterval = setInterval(function () {
    if (i === quizQuestionsAndAnswers.length) {
      clearInterval(timeInterval);
      timerEl.textContent = "Time: " + timeLeft;
      console.log("Sorry! Times up");
    } else if(timeLeft == 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "Time: " + timeLeft;
        i = quizQuestionsAndAnswers.length;
        nextQuestion();
    } else {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
    quizContainersEl.classList.remove("display");
  }, 1000);
  nextQuestion();
});

function nextQuestion() {
  if (i >= quizQuestionsAndAnswers.length) {
      document.getElementById("question").innerHTML = "";
      document.getElementById("answer-zero").innerHTML = "";
      document.getElementById("answer-one").innerHTML = "";
      document.getElementById("answer-two").innerHTML = "";
      document.getElementById("answer-three").innerHTML = "";
      quizContainersEl.classList.add("display");
    enterScoreEl.classList.remove("display");
  } else {
    let question = quizQuestionsAndAnswers[i].question;
    let choice0 = quizQuestionsAndAnswers[i].choices[0];
    let choice1 = quizQuestionsAndAnswers[i].choices[1];
    let choice2 = quizQuestionsAndAnswers[i].choices[2];
    let choice3 = quizQuestionsAndAnswers[i].choices[3];

    document.getElementById("question").innerHTML = question;
    document.getElementById("answer-zero").innerHTML = choice0;
    document.getElementById("answer-one").innerHTML = choice1;
    document.getElementById("answer-two").innerHTML = choice2;
    document.getElementById("answer-three").innerHTML = choice3;
  }
}

quizContainersEl.addEventListener("click", function (event) {
  element = event.target;
  let correctAnswer = quizQuestionsAndAnswers[i].correctAnswer;
  event.stopPropagation();
  if (element.matches(".box")) {
    var selection = element.getAttribute("data-number");
  }
  if (selection == correctAnswer) {
    i++;
    nextQuestion(event);
  } else {
    i++;
    timeLeft -= 10;
    nextQuestion(event);
  }
});



submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  userHighScores.push({
    userInitials: userInitialsInput.value,
    time: timeLeft,
  });
  localStorage.setItem("userHighScores", JSON.stringify(userHighScores));
  console.log("I clicked the button. what do now?");
  highScores();
});

function highScores() {
    enterScoreEl.classList.add("display")
    highScoresEl.classList.remove("display")
    var savedHighScores = JSON.parse(localStorage.getItem(userHighScores));
    if (savedHighScores != null) {

    }
  console.log("we did it!!");
}
