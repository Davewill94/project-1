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
        setTimeout(colorReset, 250);
    }
});
redButton.addEventListener('click', function() {
    playerSequence.push(3);
    checkForMatch();
    redFlash();
    if(colorsMatch) {
        setTimeout(colorReset, 250);
    }
});
blueButton.addEventListener('click', function () {
    playerSequence.push(2);
    checkForMatch();
    blueFlash();
    if(colorsMatch) {
        setTimeout(colorReset, 250);
    }
});
yellowButton.addEventListener('click', function() {
    playerSequence.push(1);
    checkForMatch();
    yellowFlash();
    if(colorsMatch) {
        setTimeout(colorReset, 250);
    }
});

//Still need to flesh this out abit.
function checkForMatch() {
    if(playerSequence[playerSequence.length-1] === colorSequenceGenerated[playerSequence.length-1]){
        colorsMatch = true;
        console.log('Match')
    } else {
        colorsMatch = false;
        console.log('Not a Match')
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
let gameCountToWin = 6;
//level counter
let levelCounter = 1;
//number of colors flashed
let flashNum = 0;
//variable for computer or players turn
let turn;


// function startEnd(event) {
//     //reset arrays to empty on click
//     colorSequenceGenerated = [];
//     playerSequence = [];    
//     flashNum = 0;
//     turn = 'computer';
//     if(event){
//         for(let i = 0; i < gameCountToWin; i++) {
//             colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);  
//         }
//         console.log(colorSequenceGenerated)
//     //function call for play game
//         playGame();
    
//     } else {
//         //end game
//         colorReset();
//     }

// };


// function playGame() {
//     setInterval(eachTurn, 1000);
// }

// function eachTurn () {
//     if(turn==='computer') {
//         colorReset();
//         //console.log(colorSequenceGenerated[flashNum]); 
//         setTimeout(function() {
//             switch (colorSequenceGenerated[flashNum]) {
//                 case 1:
//                     yellowFlash();
//                     break;
//                 case 2:
//                     blueFlash();
//                     break;
//                 case 3:
//                     redFlash();
//                     break;
//                 case 4:
//                     greenFlash();
//                     break;
//             }
//             flashNum ++;
//         }, 200);
//     }
//     if(flashNum === levelCounter) {
//         colorReset();        
//         turn = 'player';

//     }
// }




