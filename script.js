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
startButton.addEventListener('click', playingGame);
quitButton.addEventListener('click', playingGame);


//create empty array for color sequence that is generated
//create empty array for player entered sequence
let colorSequenceGenerated = [];
let playerSequence = [];

//number of successful turns to win
let gameCountToWin = 30;
//level counter

function playingGame() {
    //reset arrays to empty on click
    colorSequenceGenerated = [];
    playerSequence = [];
    for( let i = 0; i < gameCountToWin; i++) {
        colorSequenceGenerated.push(Math.floor(Math.random()*4)+1);
    }
    console.log(colorSequenceGenerated);
};





