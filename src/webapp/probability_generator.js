// global vars
var firstLetters = new Array();
var doubleLetters = new Array();
var tripleLetters = new Array();

// Existing name map
var existingNames = new Map();

// // Set min/max name lengths
var minNameLength = 0;
var maxNameLength = 0;

// Alphabet array, map, and length
var alphabetArray = new Array();
var alphabetMap = new Map();
var alphaLength = 0;

function generateProbabilityFile () {
    let selectedList = document.getElementById("probability_lists");

    if (selectedList.value == "top400") {
        fetch("data/top_400_baby_names_2010s.txt")
            .then(response => response.text())
            .then(text => {
                let listOfNames = text.split(/\r?\n/);
                // Create an alphabet using the characters in the data set
                createAlphabet(listOfNames);
                listOfNames.forEach(processName);
            })
            alertUserAfterGeneration("top_400_baby_names_2010s.txt");
    } else if (selectedList.value == "1200Males") {
        fetch("data/1200MaleNames.txt")
            .then(response => response.text())
            .then(text => {
                let listOfNames = text.split(/\r?\n/);
                // Create an alphabet using the characters in the data set
                createAlphabet(listOfNames);
                listOfNames.forEach(processName);
            })
        alertUserAfterGeneration("1200MaleNames.txt");
    } else {
        alert("No list of names was selected.");
    }
    
}

function fileSelected(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        let listOfNames = reader.result.split(/\r?\n/);

        // Create an alphabet using the characters in the data set
        createAlphabet(listOfNames);

        listOfNames.forEach(processName);
    }

    alertUserAfterGeneration(file.name);
    
}

function processName(currentName) {
    var a = "J", b = "o", c = "h";
    let x = 0;

    //Add 1 to index of starting letter
    a = currentName.charAt(x);
    firstLetters[alphabetMap.get(a)] += 1;

    //Add 1 to index of starting pair
    b = currentName.charAt(x+1);
    doubleLetters[alphabetMap.get(a)][alphabetMap.get(b)] += 1;

    //Loop through sets of three letters starting with the first three, advancing by one, through the last three
    for (;x < (currentName.length-2); x++) {
        a = currentName.charAt(x);
        b = currentName.charAt(x+1);
        c = currentName.charAt(x+2);
        
        //Add 1 to index of three letter combo
        tripleLetters[alphabetMap.get(a)][alphabetMap.get(b)][alphabetMap.get(c)] += 1;
    }
    
    //Add 1 to index of the final two characters and a terminating character
    a = currentName.charAt(x);
    b = currentName.charAt(x+1);

    tripleLetters[alphabetMap.get(a)][alphabetMap.get(b)][alphaLength] += 1;

    // Set the min/max name lengths
    checkMinMax(currentName.length);

    // Add the name to the map of existing names
    addNameToExistingNames(currentName);

}

function checkMinMax(nameLength) {
    // Check for if this is the first name
    if (minNameLength == 0) {
        minNameLength = nameLength;
    }
    
    if (nameLength < minNameLength) {
        minNameLength = nameLength;
    }

    if (nameLength > maxNameLength) {
        maxNameLength = nameLength;
    }
}

function addNameToExistingNames(nameToAdd) {
    // Set the map to be checked to the current map of existing names
    let currentMap = existingNames;
    let letter;
    for (let x = 0; x < nameToAdd.length; x++) {
        letter = nameToAdd.charAt(x);
        if (!currentMap.has(letter)) {
            // If the letter isn't in the map, add the key and set the value to a new map
            currentMap.set(letter, new Map());
            currentMap = currentMap.get(letter);
        }
        else {
            // If the letter already exists in this map layer, set the current map to the next layer map for this letter
            currentMap = currentMap.get(letter);
        }
    }
    // Set a final entry for this letter indicating that this end is a valid name
    currentMap.set(" ", "");
}

function createAlphabet(listOfNames) {
    alphabetArray = new Array();
    alphabetMap = new Map();
    alphaLength = 0;

    listOfNames.forEach(addLetters);

    initializeArrays();
}

function addLetters(currentWorkingName) {
    //Do you want to build an alphabet
    
    for(let x=0;x<currentWorkingName.length;x++) {
        if (!alphabetMap.has(currentWorkingName.charAt(x))) {
            alphabetMap.set(currentWorkingName.charAt(x), alphaLength);
            alphabetArray[alphaLength] = currentWorkingName.charAt(x);
            alphaLength += 1;
        }
    }

}

function initializeArrays() {
    //Initialize the 1D, 2D, and 3D arrays
    for (var i=0; i<alphaLength+1; i++) {
        firstLetters[i] = 0;
    }

    for (var i=0; i<alphaLength+1; i++) {
        doubleLetters[i] = new Array();
        for(var j=0; j<alphaLength+1; j++) {
            doubleLetters[i][j] = 0;
        }
    }

    for (var i=0; i<alphaLength+1; i++) {
        tripleLetters[i] = new Array();
        for(var j=0; j<alphaLength+1; j++) {
            tripleLetters[i][j] = new Array();
            for(var k=0; k<alphaLength+1; k++) {
                tripleLetters[i][j][k] = 0;
            }
        }
    }
}

function alertUserAfterGeneration(fileName) {
    // Add a line to the generated name section to inform the user that the list they selected has been used to generate
    // name probabilities
    var userAlert = document.getElementById("userListAlert");
    userAlert.innerHTML = "";
    userAlert.insertAdjacentHTML("afterbegin",  "Name probabilities have been generated from: " + fileName);

}