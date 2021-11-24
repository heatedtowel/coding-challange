var questiontext = document.querySelector("#question")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")
var timer = document.querySelector('#time')
var button = document.querySelector("#button")
var confirm = document.querySelector(".confirmation")
var gameover = document.querySelector(".game-over")
var next = document.querySelector(".next")
var answer = document.querySelectorAll(".answer")

pane2.style.display = 'none';
var secondsRemaining = 60;
var currentQuestion = 0;

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


button.addEventListener("click", function () {
  setTime();
  quiz();
});

function increment() {
  currentQuestion++;
  quiz()
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
      document.getElementById('game-over').textContent = 'Game Over';
    }

  }, 1000);
};


function quiz() {
  pane1.style.display = 'none';
  pane2.style.display = 'unset';
  questiontext.textContent = questions[currentQuestion].question; 
  confirm.textContent = '';


  for (var i = 0; i < questions[currentQuestion].answer.length; i++) {
    document.querySelector(`#answer${i + 1}`).textContent = questions[currentQuestion].answer[i];
    document.querySelector(`#answer${i + 1}`).addEventListener("click", function () {
      if (this.textContent === questions[currentQuestion].answer[questions[currentQuestion].correctAnswer]) {
        confirm.textContent = 'Correct!'
        setTimeout(increment, 500);
      } else {
        secondsRemaining -= 10;
      }
    })
  }
};