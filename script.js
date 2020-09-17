
//dom variables
var startdiv = document.getElementById("starter")
var startbtn = document.getElementById("startbtn")
var starthsbtn = document.getElementById("starths")
var timerdiv = document.getElementById("timer")
var abtn =document.getElementById("a")
var bbtn=document.getElementById("b")
var cbtn=document.getElementById("c")
var dbtn=document.getElementById("d")
var questiondiv=document.getElementById("question")
//global variables
var questions = 
[{
    question:"Which HTML element does javascript go into", 
    a:"<js>",
    b:"<script>",
    c:"<scripting>",
    d:"<javascript>",
    correctanswer:"b",
},
{
    question:"how to get a random number from 0 to 10",
    a:"Math.Random(0,10)",
    b:"Math.Floor(Math.Random()*10)",
    c:"Math.floor(Math.random()*10)",
    d:"Math.floor(Math.random(0,10)",
    correctanswer:"c",
}]

var score = 0;
var timer = questions.length*10;
var questionnumber=0
var correct;

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
    generate()

}
//generates question
function generate(){
    var currentquestions=questions[questionnumber]
    questiondiv.innerHTML = "<p>" + currentquestions.question + "</p>"
    abtn.textContent=currentquestions.a
    bbtn.textContent=currentquestions.b
    cbtn.textContent=currentquestions.c
    dbtn.textContent=currentquestions.d
}
//check answers
function checka (){
    generate()
    questionnumber++
}

function checkb (){
    generate()
    questionnumber++
}
function checkc (){
    generate()
    questionnumber++
}
function checkd (){
    generate()
    questionnumber++
}
function showhs(){


}
abtn.addEventListener("click", checka)
bbtn.addEventListener("click", checkb)
cbtn.addEventListener("click", checkc)
dbtn.addEventListener("click", checkd)
startbtn.addEventListener("click", quizstart)
starthsbtn.addEventListener("click", showhs)