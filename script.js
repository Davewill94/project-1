// querySelectors for the colored buttons
const greenButton = document.querySelector('#green');
const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const yellowButton = document.querySelector('#yellow');

//query selectors for the start and end buttons
const startButton = document.querySelector('#start');
const quitButton = document.querySelector('#end');

//event listeners for all the buttons
// greenButton.addEventListener('click', );
// redButton.addEventListener('click', );
// blueButton.addEventListener('click', );
// yellowButton.addEventListener('click', );
let isPlaying = false;

startButton.addEventListener('click', function () {
    isPlaying = true;
    playingGame(isPlaying);
});

quitButton.addEventListener('click', function () {
    isPlaying = false;
    playingGame(isPlaying);
});


//create empty array for color sequence that is generated
//create empty array for player entered sequence
let colorSequenceGenerated = [];
let playerSequence = [];

//number of successful turns to win
let gameCountToWin = 30;
//level counter

function playingGame(event) {
    //reset arrays to empty on click
    console.log(event);
    colorSequenceGenerated = [];
    playerSequence = [];
    if(event){
        for( let i = 0; i < gameCountToWin; i++) {
            colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);
        }
    console.log(colorSequenceGenerated);    
    } else {
        //end game
    }

};





