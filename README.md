# Copy Cat

### Project Overview
Copy Cat is a version of the classic Simon game. The goal is to match an ever increasing number of color patterns. More experienced players can up the challenge by changing the number of new colors added each round.
The following links contain more information on the project:  
  [WireFrames](https://github.com/Davewill94/project-1#wireframes)  
  [Installation/Link to play](https://github.com/Davewill94/project-1#installation-instructions)  
  [Technologies Used](https://github.com/Davewill94/project-1#technologies-used)  
  [Approach Taken](https://github.com/Davewill94/project-1#approach-taken)  
  [Project Goals](https://github.com/Davewill94/project-1#mvp)


### WireFrames:
![wireframe](https://i.imgur.com/OHueYbj.png)
Original idea for the general layout of the game.
### Installation Instructions:

No installation is needed to play the game.
Just a web browser and internet connection.  
Game Link: [Click Here](https://davewill94.github.io/project-1/).

### Technologies Used:
    
* Basic html, css and javascript were used to construct much of the game.
* Color flashes were achieved using a combination of setInterval and setTimeout.
* Audio was incorporated using new Audio and Play method. The links found were from (https://s3.amazonaws.com/freecodecamp/).
* Local storage was used to keep and update the high score through browser refresh and window close.
* Cat image from (https://knowyourmeme.com/memes/chemistry-cat).


### Approach Taken:

The game works by generating a random color array and adding to it every round.
The number of random colors is equal to the difficulty level selected. As a player pushes a color button that value is pushed into an array for player selected colors. 
The two arrays are then compared at the current index.
* If the current indices match then the player wins the round or is allowed to continue with the round. 
* If the current indices do not match the player looses and the game is restarted.

### Challenges:
* I had challenges getting the timing of the computer generated color flashing spaced enough for a player to actually know which color was flashing. I struggled with it for most of the first day. Eventually I went trough the code I had kept what I knew worked which was mostly sub functions and scrapped the rest and started over.
* Getting the sounds to play was also a new thing that required me to do some searching. I settled on the code below:
```javascript
const greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

greenAudio.play();
``` 
* The persistent high score also took some research. I found localStorage and sessionStorage, with the main difference bing that localStorage is shared between all tabs and windows from the same origin and it does not expire after browser restart or OS reboot, while sessionStorage only survives refresh. I decided to use the localStorage. The first code block below is what I use to update the high score if the player reaches a high enough score. The second block is used to populate the current high score on page load.
```javascript
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
``` 
### MVP:

Bronze)

1. Functionality: Complete
* A game with four different tiles that light up for one second when they are active.
* Once a game has been started a random color should light up. 
* The game should light same existing pattern every turn and add one additional color on each turn. 
* After each click the in the pattern make sure the click is correct. 
* If an incorrect click is made end the game and tell them they lost. 
* If the player makes it thourgh the entire turns sequence without an error increment their score. 
* Make a start game and reset game button.

2. Styling: Complete
* At this point I hope to have decent styling in place.
* Four basic squares in a 2x2 pattern.

Silver)

1. Functionality: Complete
* If time permits maybe add an option for the player to elect how many new colors are added to the combo pattern each turn.

2. Styling: Partially Complete
* Add in a picture of a cat to the center of the color pattern.
* Add a visible score counter. Add updating score counter here?

Gold)

1. Functionality: Complete
* If time permits maybe add sounds for the colors like in the real game.

2. Styling:
* Polish to more closely resemble the actual game.

Post-MVP:

1. Post MVP I think it would be fun to make the squares move around the screen while playing.
