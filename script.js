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
let colorsMatch;
greenButton.addEventListener('click', function() {
    playerSequence.push(4);
    checkForMatch();
    greenFlash();
    if(colorsMatch) {
        setTimeout(colorReset, reset/4);
    } else {
        //alert('Incorret Color');
    }
});
redButton.addEventListener('click', function() {
    playerSequence.push(3);
    checkForMatch();
    redFlash();
    if(colorsMatch) {
        setTimeout(colorReset, reset/4);
    } else {
        //alert('Incorret Color');
    }
});
blueButton.addEventListener('click', function () {
    playerSequence.push(2);
    checkForMatch();
    blueFlash();
    if(colorsMatch) {
        setTimeout(colorReset, reset/4);
    } else {
        //alert('Incorret Color');
    }
});
yellowButton.addEventListener('click', function() {
    playerSequence.push(1);
    checkForMatch();
    yellowFlash();
    if(colorsMatch) {
        setTimeout(colorReset, reset/4);
    } else {
        //alert('Incorret Color');
    }
});

//Still need to flesh this out abit.
function checkForMatch() {
    if(playerSequence[playerSequence.length-1] === colorSequenceGenerated[playerSequence.length-1]){
        checkedArray.push('match');
        colorsMatch = true;
        console.log(checkedArray);
    } else {
        checkedArray.push('not-match');
        colorsMatch = false;
    }
    console.log(checkedArray);
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
let isPlaying = false;

//create empty array for color sequence that is generated
//create empty array for player entered sequence
let colorSequenceGenerated = [1,1,2,4,3];
let playerSequence = [];
let checkedArray = [];

//number of successful turns to win
let gameCountToWin = 6;
//level counter
let levelCounter = 5;
//number of colors flashed
let flashNum = 0;
//variable for computer or players turn
let turn;
let reset = 2000;

//flash colors to match an array
setInterval(() => {
if(flashNum<levelCounter) {
       if(colorSequenceGenerated[flashNum]===1) {
        setTimeout(() => {
            yellowFlash();            
        }, reset/2);
    } else if(colorSequenceGenerated[flashNum]===2) {
        setTimeout(() => {
            blueFlash();            
        }, reset/2);
    } else if(colorSequenceGenerated[flashNum]===3) {
        setTimeout(() => {
            redFlash();           
        }, reset/2);
    } else {
        setTimeout(() => {
            greenFlash();            
        }, reset/2);
    } 
}
colorReset();
flashNum++;
}, reset);