var score = 0;
var next = document.getElementsByClassName("cont");
var div = document.getElementsByTagName("div");
var show = document.getElementsByClassName("show");
function ques(ans) {
    if (ans =="correct") {
    //alert("Correct Answer");
    score++;
    //div[1].className = "hidden";
    // for (var i = 1; i < div.length; i = i+2) {
    // div[i].className = "hidden";
    // };
    next[0].className = "show";
    //div.previousSibling.className = "hidden"++;
    }
    else {
    // alert("Wrong Answer");
    next[0].className = "show";
    //div[1].className = "hidden";
    }
    var shown = show[0];
    shown.className = "hidden";
    shown.nextElementSibling.className = "show";
 }; 

function result() {
    var num = (score * 8.3333);
    var res = Math.ceil(num);
    document.getElementById("showresult").innerHTML = ("<b>Your Score is </b>" + res + "%");
    var shown = show[0];
    shown.nextElementSibling.className = "show";
    };

 var playagain = document.getElementById("play");
 playagain.onclick = function () {
    location.reload();
}