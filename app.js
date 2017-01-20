var score = 0;
var next = document.getElementsByClassName("cont");

function ques(ans) {
    if (ans =="correct") {
    alert("Correct Answer");
    score++;
    next[0].className = "show";
    //next = next.className += " hidden";
    }
    else {
    alert("Wrong Answer");
    next[0].className = "show";
    //next = next.className += " hidden";
    }
 }; 

//var span = document.getElementsByTagName("span");
function result() {
    var num = ((score * (8.3/100)) * 100);
    var res = Math.round(num);
    document.getElementByTagName("span").innerHTML = ("<b>Your Result</b>" + res + "%");
    alert(res);
    };

 