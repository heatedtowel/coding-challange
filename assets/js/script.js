var question = document.querySelector("#question")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var button = document.querySelector("#button")
var confirm = document.querySelector("#confirmation")
var pane1 = document.querySelector("#pane-1")
var pane2 = document.querySelector("#pane-2")

pane2.style.display = 'none'







button.addEventListener("click", function() {
  pane2.style.display = 'unset'
  pane1.style.display = 'none';
  question.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis, laboriosam recusandae et sunt quaerat quos a delectus ipsum sapiente! Voluptatem rerum voluptatibus reiciendis qui unde inventore asperiores culpa ut!"
  answer1.textContent = "test answer"
  answer2.textContent = "test answer"
  answer3.textContent = "test answer"
  answer4.textContent = "test answer"
});




