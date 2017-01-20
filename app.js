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
var score = 0;
//var div = document.getElementById("ques");
var next = document.getElementsByClassName("cont");

// begin_contain.className += " hidden";
//     ques_cls[0].className = "show";

function ques(ans) {
    if (ans =='correct') {
    alert("Correct Answer");
    score++;
    next[0].className = "show";
    next = next.className += " hidden";
    // for (var i = 0; i < div.length; i++) {
    //   div = div.className += " hidden";
      console.log(i);
    // };
    //this.parentElement.style.display = "none";
    }
    else {
    alert("Wrong Answer");
    // document.getElementByClassName("cont").className += "display";   
    next[0].className = "show";
    next = next.className += " hidden";
    // div.previousSibling.style.visibility = "hidden";
    // div.className += " hidden";
    //this.parentElement.style.display = "none";
    }
 }; 
if (score <= 1) {
 function result(total) {
    var num = (score * (12/100));
    var resultShow = (num + "%") ;
    span.innerHTML = score;
    span.innerHTML = per + '%';
    alert(resultShow);
    }
 };

 