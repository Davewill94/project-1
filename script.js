// querySelectors for the colored buttons
const greenButton = document.querySelector('#green');
const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const yellowButton = document.querySelector('#yellow');

//query selectors for the start and end buttons
const startButton = document.querySelector('#start');
const quitButton = document.querySelector('#end');

//event listeners for all the buttons
//push to player sequence array and flash button
//still need to add check function
let colorsMatch;
greenButton.addEventListener('click', function() {
    playerSequence.push(4);
    //checking function()
    check();
    greenFlash();
    console.log(colorsMatch);
    if(colorsMatch) {
        setTimeout(colorReset, 250);
    }
});
redButton.addEventListener('click', function() {
    playerSequence.push(3);
    //checking function()
    redFlash();
    console.log(playerSequence);
});
blueButton.addEventListener('click', function () {
    playerSequence.push(2);
    //checking function()
    blueFlash();
    console.log(playerSequence);
});

yellowButton.addEventListener('click', function() {
    playerSequence.push(1);
    //checking function()
    yellowFlash();
    console.log(playerSequence);
});


let isPlaying = false;

startButton.addEventListener('click', function () {
    isPlaying = true;
    startEnd(isPlaying);
});

quitButton.addEventListener('click', function () {
    isPlaying = false;
    startEnd(isPlaying);
});


//create empty array for color sequence that is generated
//create empty array for player entered sequence
let colorSequenceGenerated = [];
let playerSequence = [];

//number of successful turns to win
let gameCountToWin = 30;
//level counter
let levelCounter = 1;


function startEnd(event) {
    //reset arrays to empty on click
    colorSequenceGenerated = [];
    playerSequence = [];
    if(event){
        colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);
        console.log(colorSequenceGenerated)
    //function call for play game
        playGame();
    
    } else {
        //end game
    }

};


function playGame() {
    for(let i = 0; i < colorSequenceGenerated.length; i++) {
        console.log("made")
        setTimeout(flashComputerColor(i), 500);
        setTimeout(colorReset, 1000);
    }

}



function flashComputerColor(i) {
    if(colorSequenceGenerated[i] === 1){
        yellowButton.style.backgroundColor = "yellow";
    } else if(colorSequenceGenerated[i] === 2) {
        blueButton.style.backgroundColor = "lightblue";
    } else if(colorSequenceGenerated[i]===3) {
        redButton.style.backgroundColor = "lightcoral"; 
    } else {
        greenButton.style.backgroundColor = "lightgreen";       
    }
}

function yellowFlash() {
    yellowButton.style.backgroundColor = "yellow";
}

function blueFlash() {
    blueButton.style.backgroundColor = "lightblue";
}

function redFlash() {
    redButton.style.backgroundColor = "lightcoral";
}

function greenFlash() {
    greenButton.style.backgroundColor = "lightgreen";
}

function colorReset() {
    greenButton.style.backgroundColor = "green";
    redButton.style.backgroundColor = "red";
    yellowButton.style.backgroundColor = "darkkhaki";
    blueButton.style.backgroundColor = "blue";
}

function check() {
    colorsMatch = true;
}