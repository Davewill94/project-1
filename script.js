// querySelectors for the colored buttons
const greenButton = document.querySelector('#green');
const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const yellowButton = document.querySelector('#yellow');

//query selectors for the start and end buttons
const startButton = document.querySelector('#start');
const quitButton = document.querySelector('#end');

//query selector for the round
const scoreUpdate = document.querySelector('#round');

//event listeners for all the buttons
//push to player sequence array and flash button
let colorsMatch;
greenButton.addEventListener('click', function(event) {
    if(turn==='player') {
        playerSequence.push(4);
        checkForMatch();
        greenFlash();
        if(colorsMatch) {
            setTimeout(colorReset, reset/4);
        } else {
            alert('Incorret Color');
            location.reload();
        }  
    } else {
        event.preventDefault();
    }

});
redButton.addEventListener('click', function(event) {
    if(turn==='player') {
        playerSequence.push(3);
        checkForMatch();
        redFlash();
        if(colorsMatch) {
            setTimeout(colorReset, reset/4);
        } else {
            alert('Incorret Color');
            location.reload();
        }
    } else {
        event.preventDefault();
    }

});
blueButton.addEventListener('click', function (event) {
    if(turn==='player') {
        playerSequence.push(2);
        checkForMatch();
        blueFlash();
        if(colorsMatch) {
            setTimeout(colorReset, reset/4);
        } else {
            alert('Incorret Color');
            location.reload();
        }        
    } else {
        event.preventDefault();
    }

});
yellowButton.addEventListener('click', function(event) {
    if(turn==='player') {
        playerSequence.push(1);
        checkForMatch();
        yellowFlash();
        if(colorsMatch) {
            setTimeout(colorReset, reset/4);
        } else {
            alert('Incorret Color');
            location.reload();
        }
    } else {
        event.preventDefault();
    }

});

//Still need to flesh this out abit.
function checkForMatch() {
    if(playerSequence[playerSequence.length-1] === 
        colorSequenceGenerated[playerSequence.length-1]){
        checkedArray.push('match');
        colorsMatch = true;
        if(checkedArray.length === colorSequenceGenerated.length) {
            levelCounter++;
            roundComplete=true;
            sequenceGen();
            console.log(turn);
            turn="cpu";
            flashNum=0;
            playTurn();
        }
    } else {
        checkedArray.push('not-match');
        colorsMatch = false;
    }
    // console.log(checkedArray);
    // console.log(levelCounter);
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
let colorSequenceGenerated = [];
let playerSequence = [];
let checkedArray = [];

//number of successful turns to win
let gameCountToWin = 6;
//level counter
let levelCounter = 1;
//number of colors flashed
let flashNum = 0;
//variable for computer or players turn
let turn='cpu';
let reset = 2000;
let roundComplete = false;

//only run after start game is pushed
startButton.addEventListener('click', function() {
    if(levelCounter===1){
        sequenceGen();
    }
    playTurn();
})
 function sequenceGen() {
     console.log("madit")
     if(colorSequenceGenerated.length===levelCounter-1){
         colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);
         console.log(colorSequenceGenerated);
     }
 }

 function playTurn() {
    scoreUpdate.innerText = `${levelCounter}`;
    playerSequence = [];
    checkedArray = []; 
    //prevent user click before sequence complete
    if(turn==='cpu'){

        //flash colors to match an array
        let computer = setInterval(() => {
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
            } else {
                turn='player';
                clearInterval(computer)
            }
            colorReset();
            flashNum++;
            //console.log(turn);
            }, reset);
    } else if(turn==="player") {
        let playercheck =  setInterval(() => {
            if (roundComplete) {
                clearInterval(playercheck);
                turn==="cpu";
            }
        }, 100);
    }
 };