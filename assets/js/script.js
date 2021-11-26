var questiontext = document.querySelector("#question")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")
var timer = document.querySelector('#time')
var button = document.querySelector("#button")
var confirm = document.querySelector(".confirmation")
var gameover = document.querySelector(".end-text")
var answer = document.querySelectorAll(".answer")
var secondsRemaining = 60;
var currentQuestion = 0;
var score = 0;
var selectedAnswer
var timePaused

var questions = [
  {
    question: 'Which font-weight is a not valid value?',
    answer: ['normal', 'bold', 'lightest', 'bolder'],
    correctAnswer: 2
  }, {
    question: 'Choose the correct HTML tag for the largest heading',
    answer: ['head', 'H1', 'H6', 'Heading'],
    correctAnswer: 1
  }, {
    question: 'How can you make a list that lists the items with numbers?',
    answer: ['ol', 'di', 'ul', 'List'],
    correctAnswer: 0
  }, {
    question: 'What is the correct HTML for inserting an image?',
    answer: ['Img alt="MyImage" image.gif /img',
      'Image src="image.gif" alt="MyImage"',
      'Img src="image.gif" alt="MyImage"',
      'Img href="image.gif" alt="MyImage"'],
    correctAnswer: 2
  }, {
    question: "How would you change this HTML element? <p id=\"demo\">Code Quiz</p>",
    answer: ['document.getElement("p").innerHTML = "Hello World"',
      '#demo.innerHTML = "Hello World"',
      'document.getElementById("demo").innerHTML = "Hello World"',
      'document.getElementByName("p").innerHTML = "Hello World"'],
    correctAnswer: 2
  }
];

pane2.style.display = 'none';


init();
addListeners();

function init() {
  button.addEventListener("click", function () {
    setTime();
    setQuestions();
  });
}

function checkAnswer() {
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    confirm.textContent = 'Correct!'
    timePaused = true;
    setTimeout(nextQuestion, 1000);
  } else {
    confirm.textContent = 'Incorrect'
    secondsRemaining -= 10;
    if (secondsRemaining < 0) {
      secondsRemaining = 0;
    }
  };
};

function nextQuestion() {
  currentQuestion++;
  timePaused = false;
  setQuestions()
};

function setCounter(num) {
  timer.textContent = num;
};

function setTime() {
  setCounter(secondsRemaining);
  var timerInterval = setInterval(function () {
    if (timePaused) {
      return
    }
    secondsRemaining--;
    if (secondsRemaining < 0) {
      secondsRemaining = 0;
    }
    setCounter(secondsRemaining);
    if (secondsRemaining <= 0) {
      clearInterval(timerInterval);
      pane2.style.display = 'none';
      document.getElementById('end-text').textContent = 'Game Over';
      localStorage.setItem("Score", score)
    } else if (currentQuestion === questions.length) {
      clearInterval(timerInterval);
      score = secondsRemaining;
      document.getElementById('end-text').textContent = 'Congratulations you scored ' + score + ' points!';
      localStorage.setItem("Score", score)
    }
  }, 1000);
};

function leaderboard() {

}

function setQuestions() {
  pane1.style.display = 'none';
  pane2.style.display = 'unset';

  if (currentQuestion < questions.length) {
    questiontext.textContent = questions[currentQuestion].question;
    confirm.textContent = '';
    for (var i = 0; i < questions[currentQuestion].answer.length; i++) {
      document.querySelector(`#answer${i + 1}`).textContent = questions[currentQuestion].answer[i];
    }
  } else {
    pane2.style.display = 'none';
  };
};

function addListeners() {
  for (var i = 0; i < questions[currentQuestion].answer.length; i++) {
    document.querySelector(`#answer${i + 1}`).addEventListener("click", function () {
      selectedAnswer = parseInt(this.value)
      checkAnswer()
    })
  };
}

