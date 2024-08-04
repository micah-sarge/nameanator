window.onload = init;

// Get/initialize existing name dictionary
let existingNames = {};
function init() {
    // set existingNames here
}

function generateNumbers () {
    var nameList = document.getElementById("nameList");
    var uniqueList = [];

    nameList.insertAdjacentHTML("afterbegin", "<hr>");

    for (let i = 0; i < 10; i++) {
        do {
            var rand = Math.floor(Math.random() * 10) + 1;
        } while (uniqueList.includes(rand));
        uniqueList.push(rand);
        
        nameList.insertAdjacentHTML("afterbegin", "<li>" + rand + "</li>");
    }
}

function clearList() {
    var nameList = document.getElementById("nameList");
    nameList.innerHTML = "";
}





//if random needs init, use systime

var countingNumber = 0, arraySum = 0;
var theName = "John";

//sum the starting letter array to use for next calculation
for (var i=0; i<27; i++) {
    arraySum += firstLetters[i];
}

//generate a random number and use the previous sum for mod to get a random number between 1 and the sum
countingNumber = (random % arraySum) + 1;

//use mod result to count through the array of values to get letter result
for (var i=0; countingNumber>firstLetters[i]; i++) {
    countingNumber -= firstLetters[i];
}

//convert i index to corresponding letter for first letter of name
theName.charAt(0) = String.fromCharCode(i+97);

//repeat the process of sum, random, and mod
for (var j=0, arraySum=0; j<27; j++) {
    arraySum += doubleLetters[i][j];
}

countingNumber = (random % arraySum) + 1;

//use mod result to count through the array of values using i as first index to get second letter result
for (var j=0; countingNumber>firstLetters[i][j]; j++) {
    countingNumber -= firstLetters[i][j];
}

//convert j index to corresponding letter for second letter of name
theName.charAt(1) = String.fromCharCode(j+97);

//start a loop to generate letters based on the two previous letters
var wordEnd=false
for (var x=2; !wordEnd; x++) {
    //sum, random, and mod as before
    for (var k=0, arraySum=0; k<27; k++) {
        arraySum += doubleLetters[i][j][k];
    }

    countingNumber = (random % arraySum) + 1;

    //use mod result to count through the array of values using i and j as indices to get third letter result
    for (var k=0; countingNumber>firstLetters[i][j][k]; k++) {
        countingNumber -= firstLetters[i][j][k];
    }

    //convert k index to corresponding letter for next letter based on previous two, if terminating character, use " "
    if (k<26) {
        theName.charAt(x) = String.fromCharCode(k+97);
    } else {
        theName.charAt(x) = " ";
        wordEnd = true;
    }

    //shift second and third letters to first and second to prep for next loop
    i=j;
    j=k;
}

/*
some kind of function to avoid weird names

importantly, they cannot be too long

also they cannot be real (check input list)

print.theName
*/