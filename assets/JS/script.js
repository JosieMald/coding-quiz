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
countdown()

function countdown(){
    var timeInterval = setInterval(function() {
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            console.log("Sorry! Times up");
        } else {
            console.log(timeLeft);
            timeLeft--;
        }
    }, 1000);
}