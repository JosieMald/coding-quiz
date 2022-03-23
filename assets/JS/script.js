var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start-button");
var quizInfoEl = document.getElementById("quiz-info");
var quizContainersEl = document.getElementById("quiz-container");

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
var timeLeft = 90;

startEl.addEventListener("click", function () {
  quizInfoEl.classList.add("display");
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "Time: " + timeLeft;
      console.log("Sorry! Times up");
    } else {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
    quizContainersEl.classList.remove("display");
  }, 1000);
  nextQuestion();
});
let i = 0;

function nextQuestion() {
  if (i >= quizQuestionsAndAnswers.length) {
    highScores();
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

  if (element.matches(".box")) {
    var selection = element.getAttribute("data-number");
  }
  if (selection == correctAnswer) {
    i++;
    nextQuestion();
  } else {
    i++;
    timeLeft -= 10;
    nextQuestion();
  }
});

function highScores(){
    quizContainersEl.classList.add("display");
    console.log("we did it!!")
}
