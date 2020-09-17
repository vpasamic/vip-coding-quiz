
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
var scoreel=document.getElementById("score")
var quiz=document.getElementById("quiz")
quiz.style.display="none"
endgame.style.display="none"
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
},
{   
    question:"which is a logical operator in javascript",
    a:"&&",
    b:"|",
    c:"%",
    d:"/",
    correctanswer:"a",
},
{   
    question:"how to set variables?",
    a:"vic",
    b:"variable",
    c:"v",
    d:"var",
    correctanswer:"d",
},
]

var score = 0;
var timer = questions.length*10;
var questionnumber=0
var correct;
var quizlength = 4

//starts quiz
function quizstart(){
    //interval creation
    timerdiv.textContent = timer;
    var timerInterval = setInterval(function(){
        timer--;
        timerdiv.textContent = timer;
    //if timer ends
        if (timer <= 0) {
        clearInterval(timerInterval)
        showscore()
    }
  },1000);
    
    console.log("hi")
  
   
    generate()
  startdiv.style.display="none"
  quiz.style.display="block"
}
//generates question
function generate(){
   if (questionnumber === 4){
       return showscore()
   }
    var currentquestions=questions[questionnumber]
    questiondiv.innerHTML = "<p>" + currentquestions.question + "</p>"
    abtn.textContent=currentquestions.a
    bbtn.textContent=currentquestions.b
    cbtn.textContent=currentquestions.c
    dbtn.textContent=currentquestions.d
    

}
//check answers
function checka (){
    var correct = questions[questionnumber].correctanswer
    if (correct === "a" && questionnumber !== quizlength){
        score++
        questionnumber++
        generate()   
    }
    else if (correct !== "a" && questionnumber !== quizlength){
        questionnumber++
        score--
        generate() 
        timer=timer-15
    }
    else{
        showscore();
    }
}

function checkb (){
    
    var correct = questions[questionnumber].correctanswer
    if (correct === "b"&& questionnumber !== quizlength){
        score++
        questionnumber++
        generate()   
    }
    else if(correct !== "b"&& questionnumber !== quizlength) {
        questionnumber++
        generate() 
        score--
        timer=timer-15
    }
    else{
        showscore();
    }
}

function checkc (){
    var correct = questions[questionnumber].correctanswer
    if(correct === "c"&& questionnumber !== quizlength){
        score++
        questionnumber++
        generate()   
        

    }
    else if(correct !== "c"&& questionnumber !== quizlength){
        questionnumber++
        generate() 
        score--
        timer=timer-15

    }
    else{
        showscore();
    }
}

function checkd (){
    var correct = questions[questionnumber].correctanswer
    if(correct === "d"&& questionnumber !== quizlength){
        score++
        questionnumber++
        generate()   
       

    }
    else if(correct !== "d"&& questionnumber !== quizlength){
        score--
        questionnumber++
        generate() 
        timer=timer-15

    }
    else{
        showscore();
    }
}
//shows high score
function showscore(){
    scoreel.textContent=score
    quiz.style.display="none"
    endgame.style.display="block"
    startdiv.style.display="none"
}
abtn.addEventListener("click", checka)
bbtn.addEventListener("click", checkb)
cbtn.addEventListener("click", checkc)
dbtn.addEventListener("click", checkd)
startbtn.addEventListener("click", quizstart)
starthsbtn.addEventListener("click", showscore)