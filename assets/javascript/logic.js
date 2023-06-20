//start page variables
var button = document.querySelector('#begin');
var homePage= document.querySelector("#homePage")

//question one variables
var btn1 = document.querySelector("#ans1");
var btn2 = document.querySelector("#ans2");
var btn3 = document.querySelector("#ans3");
var btn4 = document.querySelector("#ans4");
var questionCont= document.querySelector(".questionContainer");
var questionEL= document.querySelector("#question")
var btnGrid= document.querySelector("#questionAnswers")
var userContainer= document.querySelector(".userInitials")

//timer variables
var timeEl = document.querySelector("#timer");
var secondsLeft = 60;
timeEl.textContent = "Time: " + secondsLeft;
var timerInterval ;

//game variables
var index=0;
var score=0;

function startQuiz(){
homePage.classList.add("hide") 
questionCont.classList.replace("hide", "show")

if(index===questions.length){
    endQuiz()
}
questionEL.textContent=questions[index].question
btn1.textContent=questions[index].option1
btn2.textContent=questions[index].option2
btn3.textContent=questions[index].option3
btn4.textContent=questions[index].option4
}

//function for timer
function setTime() {
  timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
      
      if(secondsLeft === 0) {
        endQuiz()
        sendMessage();
      }
    }, 1000);
  }

function checkAnswer(answer){
    if(answer === questions[index].correct){
        index++
        score+=10
        document.getElementById('correct').style.display = 'flex'
        setTimeout (function() {
            startQuiz()
            document.getElementById('correct').style.display = 'none'
        }, 1500);
    }
    else{
        index++;
        secondsLeft-=10;
        document.getElementById('incorrect').style.display = 'flex'
        setTimeout (function() {
            startQuiz()
            document.getElementById('incorrect').style.display = 'none'
        }, 1500);
    }
}

function endQuiz(){
    questionCont.style.display="none"
    userContainer.classList.replace("hide", "show")
    document.getElementById('incorrect').style.display = 'none'
    document.getElementById('correct').style.display = 'none'
    clearInterval(timerInterval);
}



button.addEventListener("click", ()=>{
    startQuiz()
    setTime();
});

btnGrid.addEventListener("click", ()=>{
    var btnClick= event.target.textContent
    checkAnswer(btnClick);
})