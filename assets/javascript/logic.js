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
var questionEL= document.querySelector("#question");
var btnGrid= document.querySelector("#questionAnswers");
var userContainer= document.querySelector(".userInitials");
var viewHighScores = document.querySelector("#highScores");

//timer variables
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;
timeEl.textContent = "Time: " + secondsLeft;
var timerInterval ;

//game variables
var index=0;
var score=0;
var userScore = document.querySelector("#userScore");
var restartQuiz = document.querySelector("#restartQuiz");
var clearHighScores = document.querySelector("#clearHighScores");
var highScoresDisplay = document.getElementById("highScoresDisplay");

//game start 
function startQuiz(){
homePage.classList.add("hide") 
questionCont.classList.replace("hide", "show")
// console.log(questions);

if(index >= (questions.length-1)){
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
        // index++
        score+=10
        document.getElementById('correct').style.display = 'flex'
        console.log(score);
        setTimeout (function() {
            startQuiz()
            document.getElementById('correct').style.display = 'none'
        }, 1500);
    }
    else{
        // index++;
        secondsLeft-=10;
        document.getElementById('incorrect').style.display = 'flex'
        console.log(score);
        setTimeout (function() {
            startQuiz()
            document.getElementById('incorrect').style.display = 'none'
        }, 1500);
    }
    if(index >= (questions.length-1)){
    endQuiz()
} else {
    index++
}
}

// ends quiz
function endQuiz(){
    questionCont.style.display="none"
    userContainer.classList.replace("hide", "show")
    document.getElementById('incorrect').style.display = 'none'
    document.getElementById('correct').style.display = 'none'
    clearInterval(timerInterval);
    displayUserScore();
};

// displays user score
function displayUserScore (){
    userScore.style.display = "flex"; 
    userScore.innerHTML = "Your Score:" + score;
};

// Refresh's page
function refreshPage(){
    document.location.reload();
};

// shows high score
function updateHighScoreDisplay() { 
userScore.style.display = 'none'; 
var scoreFromStorage = JSON.parse(localStorage.getItem("scores"))
var highScoreItems = "";
for (score in scoreFromStorage) {
    console.log(score);
    console.log(scoreFromStorage[score]);
    highScoreItems = highScoreItems + "<li>" + score + ": " + scoreFromStorage[score]+ "</li>"
}
userContainer.classList.replace("show", "hide")
highScoresDisplay.style.display = "flex";
document.getElementById("highScoreList").innerHTML=highScoreItems;
}

// displays high score header
function displayHighScoreHeader() {
    var highScoresHeader = document.getElementById("highScoresHeader");
    highScoresHeader.style.display = "flex";
}

// makes restart quiz and clear highscores buttons visible
function displayRestartButtons () {
    restartQuiz.style.display = 'flex';
    clearHighScores.style.display = 'flex';
}

viewHighScores.addEventListener("click", function() {
    homePage.classList.add("hide") 
    var initials = document.getElementById("initials").value;
    localStorage.setItem("initials", initials)
    endQuiz();
    updateHighScoreDisplay();
    displayHighScoreHeader();
    displayRestartButtons(); 
})

button.addEventListener("click", ()=>{
    startQuiz()
    setTime()
});

btnGrid.addEventListener("click", (event)=>{
    var btnClick= event.target.textContent
    checkAnswer(btnClick);
});

submitButton.addEventListener("click", function() {
    var initials = document.getElementById("initials").value;
    
    if (!localStorage.getItem("scores")) {
        localStorage.setItem("scores", JSON.stringify({}))
    }
    
    var localStorageObject = JSON.parse(localStorage.getItem("scores"));
    localStorageObject[initials] = 0;
    
    // if (localStorageObject[initials]) {
    //     // do nothing
    // } else {
    //     localStorageObject[initials] = 0;
    // }

    if (score>localStorageObject[initials]) {
        localStorageObject[initials]=score;
    };

    score = 0;
    localStorage.setItem("scores", JSON.stringify(localStorageObject));
    updateHighScoreDisplay();
    displayHighScoreHeader();  
    displayRestartButtons(); 
});

clearHighScores.addEventListener("click", function(){
    localStorage.clear();
    highScoresDisplay.style.display = "none"; 
});

// To Do on High Scores page:
// 1. Set Button to reset high scores that takes user to homepage and clears local storage
// 2. Get rid of question error

// possible assets for local storage

// if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");