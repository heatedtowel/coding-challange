var questiontext = document.querySelector("#question")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")
var pane3 = document.querySelectorAll("#pane-3")
var pane4 = document.querySelector("#pane-4")
var username = document.querySelector("#name")
var timer = document.querySelector('#time')
var button = document.querySelector("#button")
var confirm = document.querySelector(".confirmation")
var answer = document.querySelectorAll(".answer")
var leaderboard = document.querySelector("#leaderboard");
var highscorebtn = document.querySelector("#highscore");
var highscore = localStorage.getItem('Highscores')
var secondsRemaining = 25;
var currentQuestion = 0;
var score = 0;
var selectedAnswer
var timePaused

var questions = [
  {
    question: 'Which font-weight is a not valid value?',
    answer: ['normal', 'bold', 'lightest', 'bolder'],
    correctAnswer: 2
  },/*  {
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
  } */
];

highscorebtn.addEventListener('click', leaders);

pane2.style.display = 'none';
pane4.style.display = 'none';



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
    if (secondsRemaining <= 0 || currentQuestion === questions.length) {
      clearInterval(timerInterval);
      ending();
    }
  }, 1000);
};

function ending() {
  if (secondsRemaining <= 0) {
    pane2.style.display = 'none';
    document.getElementById('pane-3').textContent = 'Game Over';
  } else {
    document.getElementById('pane-3').textContent = 'Congratulations you scored ' + secondsRemaining + ' points!';
    saveScore();
  }
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

function addListeners() {
  for (var i = 0; i < questions[currentQuestion].answer.length; i++) {
    document.querySelector(`#answer${i + 1}`).addEventListener("click", function () {
      selectedAnswer = parseInt(this.value)
      checkAnswer()
    })
  };
};

function saveScore() {
  pane4.style.display = 'unset'
  score = secondsRemaining;
  document.querySelector('#submit').addEventListener('click', function () {
    username = username.value;
    var highscore = localStorage.getItem('Highscores')
    if (typeof highscore === 'undefined' || highscore === null) {
      var highscores = [
        {
          name: username,
          score: score
        }
      ]
      localStorage.setItem('Highscores', JSON.stringify(highscores))
      leaders();
    }
    highscore = JSON.parse(highscore)
    highscore.push({
      name: username,
      score: score
    });
    pane4.style.display = 'none';
    document.getElementById('pane-3').style.display = 'none';
    localStorage.setItem('Highscores', JSON.stringify(highscore))
    for (var i = 0; i < highscore.length; i++) {
      var h2 = document.createElement('h2');
      console.log(highscore)
      h2.textContent = highscore[i].name + " " +  highscore[i].score;
      leaderboard.appendChild(h2);
    }
  });
};


  function leaders() {
  pane1.style.display = 'none';
  pane2.style.display = 'none';
  document.getElementById('pane-3').style.display = 'none';
  pane4.style.display = 'none'; 
  highscore = JSON.parse(localStorage.getItem('Highscores'));
  console.log(highscore)
  for (var i = 0; i < highscore.length; i++) {
    var h2 = document.createElement('h2');
    h2.textContent = highscore[i].name + " " +  highscore[i].score;
    leaderboard.appendChild(h2);
  };
};

