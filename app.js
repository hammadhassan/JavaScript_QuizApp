var score = 0;
var question = 0;
var next = document.getElementsByClassName("cont");
var div = document.getElementsByTagName("div");
var show = document.getElementsByClassName("show");
var li = document.getElementById("answer");
var sec = 0;
var min = 0;
var t;
var quest = document.getElementById("quesnum");
var startbutton = document.getElementById("startbutton");
//start Button
function start() {
    startbutton.className += " hidden";
    next[0].className = "show";
    show.className = "show";
    t = setInterval(time, 1100);
};
//time
function time() {
    if (sec >= 60) {
        sec = 00;
        min++;
    };
    document.getElementById("timer").innerHTML = (min + ":" + sec++ );
};
//Answer Validation
function ques(ans) {
    if (ans =="correct") {
    //alert("Correct Answer");
    score++;
    question++;
    next[0].className = "show";
    }
    else {
    question++;
    // alert("Wrong Answer");
    next[0].className = "show";
    }
    document.getElementById("quesnum").innerHTML = (question + "/12");
    var shown = show[0];
    shown.className = "hidden";
    shown.nextElementSibling.className = "show";
 }; 
//Result
function result() {
    clearTimeout(t);
    var num = (score * 8.3333);
    var res = Math.ceil(num);
    document.getElementById("showresult").innerHTML = ("<b>Your Score is </b>" + res + "%");
    var shown = show[0];
    shown.nextElementSibling.className = "show";
    };

 var playagain = document.getElementById("play");
 playagain.onclick = function () {
    location.reload();
};