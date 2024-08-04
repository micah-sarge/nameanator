function main () {
    alert("You pressed the button, how dare you...you monster");
}

function myFunction() {
    document.getElementById("demo").innerHTML = "How did you do that? You must be a wizard!";
}

/*
if (dataInput==textBox) {
    Read from text box
} else if (dataInput==file) {
    Read from file
} else {
    skip to generation
}

change all letters to lowercase

*/


//Initialize the 1D, 2D, and 3D arrays
var firstLetters = new Array();
for (var i=0; i<27; i++) {
    firstLetters[i] = 0;
}

var doubleLetters = new Array();
for (var i=0; i<27; i++) {
    doubleLetters[i] = new Array();
    for(var j=0; j<27; j++) {
        doubleLetters[i][j] = 0;
    }
}

var tripleLetters = new Array();
for (var i=0; i<27; i++) {
    tripleLetters[i] = new Array();
    for(var j=0; j<27; j++) {
        tripleLetters[i][j] = new Array();
        for(var k=0; k<27; k++) {
            tripleLetters[i][j][k] = 0;
        }
    }
}

//Loop through list of names to generate probabilities from
for (until end of file) {
    var currentName = "John";
    var a = "J", b = "o", c = "h";
    var x=0;

    //Read name from list of names
    //this needs to be added still

    //Add 1 to index of starting letter
    a = currentName.charAt(x);
    firstLetters[(a.charCodeAt(0)-97)] += 1;

    //Add 1 to index of starting pair
    b = currentName.charAt(x+1);
    doubleLetters[(a.charCodeAt(0)-97)][(b.charCodeAt(0)-97)] += 1;

    //Loop through sets of three letters starting with the first three, advancing by one, through the last three
    for (;x < (currentName.length-2); x++) {
        a = currentName.charAt(x);
        b = currentName.charAt(x+1);
        c = currentName.charAt(x+2);
        
        //Add 1 to index of three letter combo
        tripleLetters[(a.charCodeAt(0)-97)][(b.charCodeAt(0)-97)][(c.charCodeAt(0)-97)] += 1;
    }
    
    //Add 1 to index of the final two characters and a terminating character
    a = currentName.charAt(x);
    b = currentName.charAt(x+1);

    tripleLetters[(a.charCodeAt(0)-97)][(b.charCodeAt(0)-97)][26] += 1;

}