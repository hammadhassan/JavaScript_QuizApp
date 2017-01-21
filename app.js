var score = 0;
var next = document.getElementsByClassName("cont");

var div = document.getElementsByTagName("div");
//var classes = document.getElementsByClassName("");

function ques(ans) {
    if (ans =="correct") {
    //alert("Correct Answer");
    score++;
    //div[1].className = "hidden";
    // for (var i = 1; i < div.length; i = i+2) {
    // div[i].className = "hidden";
    // };
    next[0].className = "show";
    }
    else {
    // alert("Wrong Answer");
    next[0].className = "show";
    // div[1].className = "hidden";
    }
 }; 

//var span = document.getElementsByTagName("span");
function result() {
    var num = ((score * (8.3/100)) * 100);
    var res = Math.ceil(num);
    document.getElementById("result").innerHTML = ("<b>Your Score is </b>" + res + "%");
    alert(res);
    };

 