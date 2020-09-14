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
            updateHighScore();
            //localStorage.setItem("highScoreKey", `${levelCounter}`);
            // let highScore = `${levelCounter}`;
            levelCounter++;
            roundComplete=true;
            sequenceGen();
            turn="cpu";
            flashNum=0;
            playTurn();
        }
    } else {
        checkedArray.push('not-match');
        colorsMatch = false;
    }
}
function yellowFlash() {
    if(audio) {
        yellowAudio.volume = 0.5;
        yellowAudio.play();  
    }
    yellowButton.style.backgroundColor = "rgba(255, 255, 2, 0.6)";
}
function blueFlash() {
    if(audio) {
        blueAudio.volume = 0.5;
        blueAudio.play();
    }
    blueButton.style.backgroundColor = "lightblue";
}
function redFlash() {
    if(audio) {
        redAudio.volume = 0.5;
        redAudio.play();
    }
    redButton.style.backgroundColor = "lightcoral";
}
function greenFlash() {
    if(audio) {
        greenAudio.volume = 0.5;
        greenAudio.play();        
    }
    greenButton.style.backgroundColor = "lightgreen";
}
function colorReset() {
    greenButton.style.backgroundColor = "green";
    redButton.style.backgroundColor = "red";
    yellowButton.style.backgroundColor = "yellow";
    blueButton.style.backgroundColor = "blue";
}
let isPlaying = false;

//create empty array for color sequence that is generated
//create empty array for player entered sequence
let colorSequenceGenerated = [];
let playerSequence = [];
let checkedArray = [];

//number of successful turns to advance speed of game
let gameCountToAdvance = 5;
//level counter
let levelCounter = 1;
//number of colors flashed
let flashNum = 0;
//variable for computer or players turn
let turn='cpu';
let reset = 1500;
let roundComplete = false;

//only run after start game is pushed
startButton.addEventListener('click', function() {
    if(isPlaying===false) {
        isPlaying=true;
        if(levelCounter===1){
            sequenceGen();
        }
        playTurn();
    }
})

 function sequenceGen() {
     //create one random color
     if(colorSequenceGenerated.length===levelCounter-1 && diffLevel===1){
         colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);
     } else {
    //create multiple random colors to match difficulty level selected
         for(let i = 0; i < diffLevel; i++) {
            colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);
         }
     }
 }

 function playTurn() {
    scoreUpdate.innerText = `${levelCounter}`;
    playerSequence = [];
    checkedArray = [];
    //incrament color frequence to make game more challenging
    //if is too keep reset time above 500ms at that speed sounds are delayed
    ////incomparison to the flashes
    if(gameCountToAdvance===levelCounter && reset-250!=500) {
        reset -=250;
        gameCountToAdvance+=5;
    } 
    //prevent user click before sequence complete
    if(turn==='cpu'){
        //flash colors to match an array
        let computer = setInterval(() => {
            if(flashNum<colorSequenceGenerated.length) {
                whosTurn.innerText = "Pay attention";
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
                whosTurn.innerText = "You're Up!";
                clearInterval(computer);
            }
            colorReset();
            flashNum++;
            }, reset);
    } else if(turn==="player") {
        let playercheck =  setInterval(() => {
            if (roundComplete) {
                clearInterval(playercheck);
                turn="cpu";
            }
        }, 100);
    }
 };
//auto set the difficulty to 1
let diffLevel = 1;
 //adding functionality for the difficulty selector
const diffSubmit = document.querySelector('#diffSubmit');
diffSubmit.addEventListener('click', function() {
    event.preventDefault();
    const difficulty = document.getElementsByTagName("select");
    diffLevel = parseInt(difficulty.value.value);
});

//audio links to use
const greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

//dissable audio option
let audio = true;
const muteButton = document.querySelector('#mute');
muteButton.addEventListener('click', function() {
    if(audio) {
        audio = false;
        muteButton.innerText = 'Unmute';
    } else {
        audio = true;
        muteButton.innerText = 'Mute';
    }

});

//display to show that it is the computers tern or players turn
const whosTurn = document.querySelector('#whosTurn');


//Change color of the title every few seconds
const pageTitle = document.getElementsByTagName('h1');
let titleColor = 0;
function titleColorChange() {
    setInterval(() => {
        if(!isPlaying) {
            if(titleColor===0) {
                startButton.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                pageTitle[0].style.color = 'yellow';
                titleColor++;
            } else if(titleColor===1) {
                startButton.style.backgroundColor = 'rgba(255, 255, 255)';
                pageTitle[0].style.color = 'blue';
                titleColor++;
            } else if(titleColor===2) {
                startButton.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                pageTitle[0].style.color = 'red';
                titleColor++;                
            } else {
                startButton.style.backgroundColor = 'rgba(255, 255, 255)';
                pageTitle[0].style.color = 'green'; 
                titleColor=0;           
            }            
        }

    }, 5000);
};
titleColorChange();


//end game button
const endGameButton = document.querySelector('#end');
endGameButton.addEventListener('click', function() {
    //reset everthing if the end game button is pressed
    whosTurn.innerText = 'Press Start to Begin Playing';
    colorSequenceGenerated = [];
    playerSequence = [];
    checkedArray = [];
    gameCountToAdvance = 5;
    levelCounter = 1;
    scoreUpdate.innerText = `0`;
    flashNum = 0;
    turn='cpu';
    reset = 1500;
    roundComplete = false;
    isPlaying = false;
    titleColor = 0;
});

let highScoreMem = document.querySelector('#highScore');
//add the current score to the high score storage if it is higher
//parse int was used on localstorage because it returns as string
function updateHighScore () {
    if(levelCounter > parseInt(localStorage.getItem('highScoreKey')) || !(localStorage.getItem('highScoreKey'))) {
        localStorage.setItem("highScoreKey", levelCounter);
        highScoreMem.innerText = localStorage.getItem('highScoreKey');   
    }
};

//on page load current value of high score is loaded
window.onload = function () {
    if(localStorage.getItem('highScoreKey')) {
        highScoreMem.innerText = localStorage.getItem('highScoreKey');
    } else {
        highScoreMem.innerText = '0';
    }
 
};
 
