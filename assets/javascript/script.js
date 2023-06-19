//start page variables
var button = document.querySelector('#begin');

//question one variables
var timeEl = document.querySelector("#timer");
var secondsLeft = 60;
timeEl.textContent = "Time: " + secondsLeft;
var yesOrNo = document.querySelector("#yesOrNo");
var aNumber = document.querySelector("#aNumber");
var trueOrFalse = document.querySelector("#trueOrFalse");
var text = document.querySelector("#text");



//start game button
button.addEventListener('click', function(){
    document.getElementById('homePage').style.display = 'none'
    document.getElementById('questionOne').style.display = 'flex'
    document.getElementById('questionOneAnswers').style.display = 'flex'
    

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Done";
}

setTime();

yesOrNo.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
}); 

aNumber.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
}); 

text.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
}); 

trueOrFalse.addEventListener('click', function(){
    document.getElementById('correct').style.display = 'flex'
}); 


});  