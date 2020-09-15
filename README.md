# Copy Cat
A version of the Simon Game

### WireFrames:
![wireframe](https://i.imgur.com/OHueYbj.png)

### Installation Instructions:

No installation is needed to play the game.
Just a web browser and internet connection.
Game Link: 
[Click Here](https://davewill94.github.io/project-1/).

### Technologies Used:
    
* Basic html, css and javascript were used to construct much of the game.
* Color flashes were achieved using a combination of setInterval and setTimeout.
* Audio was incorporated using new Audio and Play method. The links found were from (https://s3.amazonaws.com/freecodecamp/).
* Local storage was used to keep and update the high score through browser refresh and close.
* Cat image from (https://knowyourmeme.com/memes/chemistry-cat).


### Approach Taken:

The game works by generating a random color array and adding to it every round.
The number of random colors is equal to the difficulty level selected. As a player pushes a color button that value is pushed into an array for player selected colors. 
The two arrays are then compared at the current index.
* If the current indices match then the player wins the round or is allowed to continue with the round. 
* If the current indices do not match the player looses and the game is restarted.

### MVP:

Bronze)

Functionality: Complete
* A game with four different tiles that light up for one second when they are active.
* Once a game has been started a random color should light up. 
* The game should light same existing pattern every turn and add one additional color on each turn. 
* After each click the in the pattern make sure the click is correct. 
* If an incorrect click is made end the game and tell them they lost. 
* If the player makes it thourgh the entire turns sequence without an error increment their score. 
* Make a start game and reset game button.

Styling: Complete
* At this point I hope to have decent styling in place.
* Four basic squares in a 2x2 pattern.
Silver)

Functionality: Complete
* If time permits maybe add an option for the player to elect how many new colors are added to the combo pattern each turn.

Styling: Partially Complete
* Add in a picture of a cat to the center of the color pattern.
* Add a visible score counter. Add updating score counter here?

Gold)

Functionality: Complete
* If time permits maybe add sounds for the colors like in the real game.

Styling:
* Polish to more closely resemble the actual game.

Post-MVP:

Post MVP I think it would be fun to make the squares move around the screen while playing.
