'use strict';
var score=0;

function fName () {
var username = prompt('What is your name?');
alert('Welcome' + ' ' + username);
}
fName();


function smoke(){
var ques1 = prompt('does Hala smoke cigaretes?').toLowerCase();

if (ques1 === 'yes' || ques1 === 'y') {
    alert("wrong answer no i don't");
    console.log('wrong answer');
} else if (ques1 === "no" || ques1 === 'n') {
    alert("correct answer");
    console.log('correct answer');
    score++;
}
}
smoke ();

function food(){
var ques2 = prompt('Does Hala love Kofta?').toLowerCase();
if (ques2 === 'yes' || ques2 === 'y') {
    alert('Wrong , Hala hates it');
    console.log('wrong answer');
} else if (ques2 === 'no' || ques2 === 'n') {
    alert('CORRECT!');
    console.log('correct answer')
    score++;
}
}
food ();

function french (){
var ques3 = prompt('Does Hala speak french?').toLowerCase();
if (ques3 === 'yes' || ques3 === 'y') {
    alert('wrong answer!');
    console.log('wrong answer!');
} else if (ques3 === 'no' || ques3 === 'n') {
    alert('correct!');
    console.log('correct!');
    score++;
}
}
french ();

function food2(){
var ques4 = prompt('Does Hala Love Karshat?').toLowerCase();
if (ques4 === 'yes' || ques4 === 'y') {
    alert('CORRECT!');
    console.log('correct answer');
    console.log('Q4');
    score++;
} else if (ques4 === 'no' || ques4 === 'n') {
    console.log('no Q4')
    alert('You do not know Hala!');
    console.log('wrong answer');
}
}
food2 ();

function cats (){
var ques5 = prompt('does Hala love cats?').toLowerCase();
if (ques5 === 'yes' || ques5 === 'y') {
    alert('Wrong answer!');
    console.log('wrong answer');
} else if (ques5 === 'no' || ques5 === 'n') {
    alert('Great! you know Hala Very Well!');
    console.log('correct answer');
    score++;
}
}
cats ();

function age(){
var myage = 24;
var ques6 = prompt('what is my age?')

for (var i = 0; i <=6 ; i++) {
    if (ques6 > myage) {
        alert('too high');
    }
    else if (ques6 < myage) {
        alert('too low');
    }

    else if (myage == 24){
        alert('you are right')
        break;
score++;
    }
}
}
age ();

alert ('Your Score is ' + score);





