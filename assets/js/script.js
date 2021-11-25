var questiontext = document.querySelector("#question")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")
var timer = document.querySelector('#time')
var button = document.querySelector("#button")
var confirm = document.querySelector(".confirmation")
var gameover = document.querySelector(".end-text")
var next = document.querySelector(".next")
var answer = document.querySelectorAll(".answer")

var secondsRemaining = 60;
var currentQuestion = 0;
var score = 0;
var selectedAnswer

pane2.style.display = 'none';

var questions = [
  {
    question: 'Which font-weight is not valid value?',
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
  }];


document.querySelector('#button').addEventListener("click", function () {
  setTime();
  setQuestions();
});

for (var i = 0; i < questions[currentQuestion].answer.length; i++) {
  document.querySelector(`#answer${i + 1}`).addEventListener("click", function () {
    checkAnswer()
  })
};

function chosenAnswer(clicked_id) {
  selectedAnswer = clicked_id
};

function checkAnswer() {
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    confirm.textContent = 'Correct!'
    setTimeout(nextQuestion, 500);
  } else {
    confirm.textContent = 'Incorrect try again!'
    secondsRemaining -= 10;
  };
};

function nextQuestion() {
  currentQuestion++;
  setQuestions()
};

function setCounter(num) {
  timer.textContent = num;
};

function setTime() {
  setCounter(secondsRemaining);
  var timerInterval = setInterval(function () {
    secondsRemaining--;
    setCounter(secondsRemaining);
    if (secondsRemaining === 0) {
      clearInterval(timerInterval);
      pane2.style.display = 'none';
      document.getElementById('end-text').textContent = 'Game Over';
    } else if (currentQuestion === 4) {
      clearInterval(timerInterval);
      score = secondsRemaining;
      document.getElementById('end-text').textContent = 'Congratulations you scored ' + score + ' points!';
      console.log(score);
    }
  }, 1000);
};

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
