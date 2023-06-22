//start page variables
var button = document.querySelector('#begin');
var homePage= document.querySelector("#homePage");
var submitButton = document.querySelector("#submitButton");

//question/answer variables
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
var secondsLeft = 75;
timeEl.textContent = "Time: " + secondsLeft;
var timerInterval ;

//game variables
var index=0;
var score=0;


//game start 
function startQuiz(){
homePage.classList.add("hide") 
questionCont.classList.replace("hide", "show")

if(index >= questions.length){
    endQuiz()
}
questionEL.textContent=questions[index].question;
btn1.textContent=questions[index].option1;
btn2.textContent=questions[index].option2;
btn3.textContent=questions[index].option3;
btn4.textContent=questions[index].option4;
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

// checks if answer is correct or incorrect and adds to score or deducts time
function checkAnswer(answer){
    if(answer === questions[index].correct){
        index++
        score+=10
        document.getElementById('correct').style.display = 'flex'
        console.log(score);
        setTimeout (function() {
            startQuiz()
            document.getElementById('correct').style.display = 'none'
        }, 1500);
    }
    else{
        index++;
        secondsLeft-=10;
        document.getElementById('incorrect').style.display = 'flex'
        console.log(score);
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


btnGrid.addEventListener("click", (event)=>{
    var btnClick= event.target.textContent
    checkAnswer(btnClick);
});

submitButton.addEventListener("click", function() {
    localStorage.setItem("score", score)
    userContainer.classList.replace("show", "hide")
    document.getElementById("highScoresDisplay").style.display = "flex";
    var initials = document.getElementById("initials").value;
    console.log(initials);
  });



  // submitButton.addEventListener("click", function() {
//   localStorage.getItem(score)
//   highScoresDisplay = score;
// });


// possible assets for local storage

// if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");