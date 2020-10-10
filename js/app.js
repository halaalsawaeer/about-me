'use strict';
var score = 0;
function username1() {
    var username = prompt('What is your name?');
    alert('Welcome' + ' ' + username);
}
username1();

function q1() {
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
q1() ;

function q2() {
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
q2() ;

function q3() {

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
q3() ;

function q4() {

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
q4() ;

function q5() {

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
q5() ;



function theage() {
    var myage = 24;
    var ques6 = prompt('what is my age?')

    for (var i = 0; i <= 6; i++) {
        if (ques6 > myage) {
            alert('too high');
        }
        else if (ques6 < myage) {
            alert('too low');
        }

        else {
            alert('you are right');
            score++;
        }
    }
    theage();


     var mydish = ["karshat", "mansaf", "magloba", "pizza", "grapes leafs", "mlokhea", "natural vegetable soup", "machbos", "zinger", "chicken with cream"];


    for (var j = 1; j <= 6; j++) { var Topten = prompt('what do you think are my favourite food?') }; toLowerCase();
    for (var i = 0; i <= mydish.lenghth; i++) {
        if (Topten === mydish[i]) {
            alert('You are correct!');
            score++;
            j = 10;
            breake;
        }
    }
}




alert('my favourite food is the folowing : karshat, mansaf, magloba, pizza, grapes leafs, mlokhea, natural vegetable soup, machbos, zinger, chicken with cream.');

alert('you scored ' + score + ' out of 7');





