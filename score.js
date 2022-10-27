// Iteration 5: Store the player score and display it on the game over screen
let playagain = document.getElementById("play-again-button");
playagain.onclick=ab;
function ab(){
    location.href=('game.html');
}
let scoreBox = document.getElementById("score-box");
scoreBox.innerHTML=localStorage.score;
