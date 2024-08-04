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
