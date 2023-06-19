//variables for all sections
let questionsBooleanTrue = true;
let questionsBooleanFalse = false;

//start page variables
var button = document.querySelector('#begin');

//timer variables
var timeEl = document.querySelector("#timer");
var secondsLeft = 60;
timeEl.textContent = "Time: " + secondsLeft;

//question one variables
var yesOrNo = document.querySelector("#yesOrNo");
var aNumber = document.querySelector("#aNumber");
var trueOrFalse = document.querySelector("#trueOrFalse");
var text = document.querySelector("#text");

//question two variables
var searchesAndReturns = document.querySelector("#searchesAndReturns");
var taskOrValue = document.querySelector("#taskOrValue");
var createsVariable = document.querySelector("#createsVariable");
var activatesButton = document.querySelector("#activatesButton");

//start game button
button.addEventListener('click', function(){
    document.getElementById('homePage').style.display = 'none'
    document.getElementById('questionOne').style.display = 'flex'
    document.getElementById('questionOneAnswers').style.display = 'flex'
    
//function for timer
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

//question one responses
yesOrNo.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
    yesOrNo = questionsBooleanFalse;
    console.log(questionsBooleanFalse);
    setTimeout (function() {
      document.getElementById('questionOne').style.display = 'none'
      document.getElementById('questionOneAnswers').style.display = 'none'
      document.getElementById('incorrect').style.display = 'none'
    }, 3000);

    //question two appears
    setTimeout (function(){
      document.getElementById('questionTwo').style.display = 'flex'
      document.getElementById('questionTwoAnswers').style.display = 'flex'
  },3000);

  //question two responses
  searchesAndReturns.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
    searchesAndReturns = questionsBooleanFalse;
    console.log(questionsBooleanFalse);
    setTimeout (function() {
      document.getElementById('questionTwo').style.display = 'none'
      document.getElementById('questionTwoAnswers').style.display = 'none'
      document.getElementById('incorrect').style.display = 'none'
    }, 3000);

    //question three appears - no question three in HTML or CSS yet
  //   setTimeout (function(){
  //     document.getElementById('questionThree').style.display = 'flex'
  //     document.getElementById('questionThreeAnswers').style.display = 'flex'
  // },3000);
}); 

  taskOrValue.addEventListener('click', function(){
    document.getElementById('correct').style.display = 'flex'
    taskOrValue = questionsBooleanTrue;
    console.log(questionsBooleanTrue);
    setTimeout (function() {
      document.getElementById('questionTwo').style.display = 'none'
      document.getElementById('questionTwoAnswers').style.display = 'none'
      document.getElementById('correct').style.display = 'none'
    }, 3000);

    //question three appears - no question three in HTML or CSS yet
  //   setTimeout (function(){
  //     document.getElementById('questionThree').style.display = 'flex'
  //     document.getElementById('questionThreeAnswers').style.display = 'flex'
  // },3000);
  });

  createsVariable.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
    createsVariable = questionsBooleanFalse;
    console.log(questionsBooleanFalse);
    setTimeout (function() {
      document.getElementById('questionTwo').style.display = 'none'
      document.getElementById('questionTwoAnswers').style.display = 'none'
      document.getElementById('incorrect').style.display = 'none'
    }, 3000);

    //question three appears - no question three in HTML or CSS yet
  //   setTimeout (function(){
  //     document.getElementById('questionThree').style.display = 'flex'
  //     document.getElementById('questionThreeAnswers').style.display = 'flex'
  // },3000);
  }); 

  activatesButton.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
    activatesButton = questionsBooleanFalse;
    console.log(questionsBooleanFalse);
    setTimeout (function() {
      document.getElementById('questionTwo').style.display = 'none'
      document.getElementById('questionTwoAnswers').style.display = 'none'
      document.getElementById('incorrect').style.display = 'none'
    }, 3000);

    //question three appears - no question three in HTML or CSS yet
  //   setTimeout (function(){
  //     document.getElementById('questionThree').style.display = 'flex'
  //     document.getElementById('questionThreeAnswers').style.display = 'flex'
  // },3000);
  }); 
}); 

aNumber.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
    aNumber = questionsBooleanFalse;
    console.log(questionsBooleanFalse);
    setTimeout (function() {
      document.getElementById('questionOne').style.display = 'none'
      document.getElementById('questionOneAnswers').style.display = 'none'
      document.getElementById('incorrect').style.display = 'none'
    }, 3000);

    //question two appears
    setTimeout (function(){
      document.getElementById('questionTwo').style.display = 'flex'
      document.getElementById('questionTwoAnswers').style.display = 'flex'
  },3000);

    //question two responses
    searchesAndReturns.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      searchesAndReturns = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
  
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
  }); 
  
    taskOrValue.addEventListener('click', function(){
      document.getElementById('correct').style.display = 'flex'
      taskOrValue = questionsBooleanTrue;
      console.log(questionsBooleanTrue);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('correct').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    });
    
    createsVariable.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      createsVariable = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    }); 
    
    activatesButton.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      activatesButton = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    }); 
}); 

trueOrFalse.addEventListener('click', function(){
  document.getElementById('correct').style.display = 'flex'
  trueOrFalse = questionsBooleanFalse;
  console.log(questionsBooleanTrue);
  setTimeout (function() {
    document.getElementById('questionOne').style.display = 'none'
    document.getElementById('questionOneAnswers').style.display = 'none'
    document.getElementById('correct').style.display = 'none'
  }, 3000);

  //question two appears
  setTimeout (function(){
    document.getElementById('questionTwo').style.display = 'flex'
    document.getElementById('questionTwoAnswers').style.display = 'flex'
},3000);

    //question two responses
    searchesAndReturns.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      searchesAndReturns = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
  
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
  }); 
  
    taskOrValue.addEventListener('click', function(){
      document.getElementById('correct').style.display = 'flex'
      taskOrValue = questionsBooleanTrue;
      console.log(questionsBooleanTrue);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('correct').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    });
    
    createsVariable.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      createsVariable = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    }); 
    
    activatesButton.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      activatesButton = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    }); 


}); 

text.addEventListener('click', function(){
    document.getElementById('incorrect').style.display = 'flex'
    text = questionsBooleanFalse;
    console.log(questionsBooleanFalse);
    setTimeout (function() {
      document.getElementById('questionOne').style.display = 'none'
      document.getElementById('questionOneAnswers').style.display = 'none'
      document.getElementById('incorrect').style.display = 'none'
    }, 3000);

    //question two appears
    setTimeout (function(){
      document.getElementById('questionTwo').style.display = 'flex'
      document.getElementById('questionTwoAnswers').style.display = 'flex'
  },3000);

    //question two responses
    searchesAndReturns.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      searchesAndReturns = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
  
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
  }); 
  
    taskOrValue.addEventListener('click', function(){
      document.getElementById('correct').style.display = 'flex'
      taskOrValue = questionsBooleanTrue;
      console.log(questionsBooleanTrue);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('correct').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    });
    
    createsVariable.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      createsVariable = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    }); 
    
    activatesButton.addEventListener('click', function(){
      document.getElementById('incorrect').style.display = 'flex'
      activatesButton = questionsBooleanFalse;
      console.log(questionsBooleanFalse);
      setTimeout (function() {
        document.getElementById('questionTwo').style.display = 'none'
        document.getElementById('questionTwoAnswers').style.display = 'none'
        document.getElementById('incorrect').style.display = 'none'
      }, 3000);
    
      //question three appears - no question three in HTML or CSS yet
    //   setTimeout (function(){
    //     document.getElementById('questionThree').style.display = 'flex'
    //     document.getElementById('questionThreeAnswers').style.display = 'flex'
    // },3000);
    });   
}); 

});  