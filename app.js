//alert("Welcome to the Quiz of Pakistan Super League 2016");
/*var answer = document.getElementById("answer").innerHTML.toString();

var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var q11 = document.getElementById("q11");
var q12 = document.getElementById("q12");
*/
var currentQuestion = 0,
    score = 0,
    askingQuestion = true;



function ques() {
    if (radio[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
    //if (this.className == "answer") {
    alert("Correct Answer");
    }
    else {
    alert("Wrong Answer");   
    }
    }; 