'use strict'
var score = 0;
var userName = " ";
function getName(fName, sName) {

    fName = prompt(' What is your name? ');
    
    userName = [fName];
    alert('Welcome ' + fName )
    return userName;
}
getName();



function question1() {
    var food1 = prompt('Does Hala Loves Kofta?').toLowerCase();

    if (food1 == 'yes' || food1 == 'Y' || food1 == 'y') {
        alert('NO!, Hala Hates It!');

        score++;
    } else if (food1 == 'no' || food1 == 'N' || food1 == 'n') {
        alert('Hala Hates Kofta');

    }
}

question1();

function question2() {
    var ksa = prompt('Does Hala Loves Karshat?').toLowerCase();
    if (ksa == 'yes' || ksa == 'Y' || ksa == 'y') {
        alert('You are  correct!');
    } else if (ksa == 'no' || ksa == 'N' || ksa == 'n') {
        alert('opps! I am in Love with Karshat!');
        score++;
    }
}

question2();

function question3() {
    var cats = prompt('Does Hala Love cats?').toLowerCase();
    if (cats == 'yes' || cats == 'Y' || cats == 'y') {
        alert('Yes, I do love them!');
        score++;
    } else if (cats == 'no' || cats == 'N' || cats == 'n') {
        alert('Sorry! You are wrong!');
    }
}
question3();

function smokes() {
    var smoke = prompt('Does Hala smokes?').toLowerCase();
    if (smoke== 'yes' || smoke == 'Y' || smoke == 'y') {
        alert('No!! !');
    } else if (smoke == 'no' || smoke == 'N' || smoke == 'n') {
        alert('You are totally right!');
        score++;
    }
}
smokes();
function age() {
    for (var i = 0; i < 5; i++) {
        var realage = prompt('How old am I?');
        if (realage == 24) {
            alert('You are correct!')
            score++;
            break;
        } else if (realage > 24) {
            alert('Too High!')
        } else if (realage < 24) {
            alert('Too Low!')
        }
    }

}

age();
var correctanswer = ['Lebanon', 'Mexico', 'Turkey', 'Egypt', 'Tunisia', 'UAE', 'KSA', 'Kuwait', 'USA'];


function country() {
    for (var j = 1; j <= 6; j++) {
        var topten = prompt('What Countries Does Hala want to visit?');


        for (var i = 0; i <= correctanswer.length; i++) {
            if (topten === correctanswer[i]) {
                alert('You are correct!');
                score++;
                j = 10;
                break;
            }
        }
    }
}
country();

alert('Countries That I wish to visit : Lebanon , Mexico, Turkey, Egypt, Tunisia, UAE, KSA, Kuwait, USA') ;
alert(' You scored ' + score + ' out of 7 on this quiz. Hope you enjoyed it!');
