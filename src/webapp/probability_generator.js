// global vars
var firstLetters = new Array();
var doubleLetters = new Array();
var tripleLetters = new Array();

function generateProbabilityFile () {
    alert("Patience Iago, there is nothing to submit at this point. ");
}

function fileSelected(event) {
    //Initialize the 1D, 2D, and 3D arrays
    for (var i=0; i<27; i++) {
        firstLetters[i] = 0;
    }

    for (var i=0; i<27; i++) {
        doubleLetters[i] = new Array();
        for(var j=0; j<27; j++) {
            doubleLetters[i][j] = 0;
        }
    }

    for (var i=0; i<27; i++) {
        tripleLetters[i] = new Array();
        for(var j=0; j<27; j++) {
            tripleLetters[i][j] = new Array();
            for(var k=0; k<27; k++) {
                tripleLetters[i][j][k] = 0;
            }
        }
    }

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        let listOfNames = reader.result.split(/\r?\n/);

        listOfNames.forEach(processName);

        // Probably show the user that their probability tables are being generated
    }
    
}

function processName(item) {
    // change currentName to all lowercase
    var currentName = item.toLowerCase();
    var a = "J", b = "o", c = "h";
    var x=0;

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
