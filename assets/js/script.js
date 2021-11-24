/* var question = document.querySelector("#question")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var button = document.querySelector("#button")
var confirm = document.querySelector("#confirmation")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")
pane2.style.display = 'none'; */



var questiontext = document.querySelector(".question")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")
var timer = document.querySelector('#time')
var button = document.querySelector("#button")
var confirm = document.querySelector(".confirmation")
var gameover = document.querySelector(".game-over")
var next = document.querySelector(".next")

pane2.style.display = 'none';
var secondsRemaining = 20;
var i = 0; 

var questions = [
  {
    question: 'Which font-weight is not valid value?',
    answer: ['normal', 'bold', 'lightest', 'bolder'],
    correctAnswer: 3,
  }, {
    question: 'question 2',
    answer: ['adsf', 'adsf', 'Answadsfer3', 'adsf'],
    correctAnswer: 1,
  }, {
    question: 'question 3',
    answer: ['asdfasdfas', 'asdf', 'adsfasdfasdf', 'afd'],
    correctAnswer: 1,
  }, {
    question: 'question 4',
    answer: ['adff', 'adsfafd', 'Anadsfswer3', 'asdf'],
    correctAnswer: 1,
  }];


button.addEventListener("click", function () {
  setTime();
  quiz();
});

next.addEventListener("click", function() {
  if (i <= 4) {
  quiz(); 
} else {
  pane2.style.display = 'none';
  document.getElementById('game-over').textContent = 'Game Over';
}
});

function increment() {
  i++;
}

function setCounter(num) {
  timer.textContent = num;
}

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
}


function quiz () {
  pane1.style.display = 'none';
  pane2.style.display = 'unset';
  var timerInterval = setInterval(increment, 1000);














  questiontext.textContent = questions[i].question;
  answer1.textContent = questions[i].answer[0];
  answer2.textContent = questions[i].answer[1];
  answer3.textContent = questions[i].answer[2];
  answer4.textContent = questions[i].answer[3];
  
  /* answer1.addEventListener("click", function () {
    if (questions[0].correctAnswer) {
      confirm.textContent = 'Correct!'
    }else {
        confirm.textContent = 'Wrong!'
      }
}) */
}






/* button.addEventListener("click", function () {
  pane2.style.display = 'unset'
  pane1.style.display = 'none';
  question.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis, laboriosam recusandae et sunt quaerat quos a delectus ipsum sapiente! Voluptatem rerum voluptatibus reiciendis qui unde inventore asperiores culpa ut!"
  answer1.textContent = "test answer"
  answer2.textContent = "test answer"
  answer3.textContent = "test answer"
  answer4.textContent = "test answer"
}); */




