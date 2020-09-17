
//dom variables
var startdiv = document.getElementById("starter")
var startbtn = document.getElementById("startbtn")
var starthsbtn = document.getElementById("starths")
var timerdiv = document.getElementById("timer")
//global variables
var questions = {

 }

var score = 0;
var timer = 10;


function settime() {
    //time ticks
    var timerInterval = setInterval(function(){
        timer--;
        timerdiv.textContent = timer;
    //if timer ends
        if (timer <= 0) {
        clearInterval(timerInterval)
    }
  },1000);
}
// settime()
function quizstart(){
    console.log("hi")
    settime()

}

function showhs(){


}

startbtn.addEventListener("click", quizstart)
starthsbtn.addEventListener("click", showhs)