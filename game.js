/*
---Rock Paper Scissors Game---

* Scores start out at 0 - 0
* Function to run the game:
    - Sets default scores as 0
    - While loop until player OR AI gets 3 points
        - In this loop, make AI generate a choice
        - Activate another funciton that waits for the player to make a choice. The return of this choice is judged against the AI's choice,
        which is passed through the function. 
        - Add a point for the winnner
    * Once the while loop is over, the winner is selected.
* Add a "start over" button which restarts the game logic

---End pseudocode---
*/

//Represents the player's and AI's scoreboard HTML elements
const PLAYER_SCOREBOARD = document.getElementById("player-score");
const AI_SCOREBOARD = document.getElementById("ai-score");
const ROCK_BUTTON = document.getElementById("rock-button");
const PAPER_BUTTON = document.getElementById("paper-button");
const SCISSORS_BUTTON = document.getElementById("scissors-button");
const START_OVER_BUTTON = document.getElementById("start-over");
const AI_CHOICE = document.getElementById("ai-choice");
const RESULT = document.getElementById("result");
ROCK_BUTTON.addEventListener("click", function(){runGame("Rock");});
PAPER_BUTTON.addEventListener("click", function(){runGame("Paper");});
SCISSORS_BUTTON.addEventListener("click", function(){runGame("Scissors");});
START_OVER_BUTTON.addEventListener("click", function(){initialize();})

//Setting variables for score and choices
let playerScore;
let playerChoice;
let aiScore;
let aiChoice;

//Sets the default scores
function initialize(){
    playerScore = 0;
    aiScore = 0;
    PLAYER_SCOREBOARD.innerHTML = playerScore;
    AI_SCOREBOARD.innerHTML = aiScore;
    AI_CHOICE.innerHTML = "--";
    RESULT.innerHTML = "Make a choice...";
}

initialize();

//Game logic, this is run whenever a button is pressed
function runGame(choice){
    if (playerScore != 5 && aiScore != 5){
        let aiChoice = makeAIChoice() //Runs the RNG function to determine aiChoice
        let result = judge(choice, aiChoice); //Will be a string that determines the winner of the round.
        AI_CHOICE.innerHTML = aiChoice;
        RESULT.innerHTML = `You chose ${choice}. You ${result} this round.`;
        switch (result){ //Checks whether or not you won the round, and incriments your score 
            case "win":
                playerScore++;
                PLAYER_SCOREBOARD.innerHTML = playerScore;
                break;
            case "lose":
                aiScore++;
                AI_SCOREBOARD.innerHTML = aiScore;
                break;
        }
    }
    else if (playerScore == 5){
        AI_CHOICE.innerHTML = "You won the game! Congratulations!";
        RESULT.innerHTML = "Click on \"Start Over\" to play again.";
    }
    else if (aiScore = 5){
        AI_CHOICE.innerHTML = "You lost the game! Better luck next time!";
        RESULT.innerHTML = "Click on \"Start Over\" to play again.";
    }
}

//Makes the AI generate a "choice" for the game, and return it
function makeAIChoice(){
   let x =  Math.floor((Math.random()*3) + 1);
   switch (x){
    case 1:
        return "Rock";
    case 2:
        return "Paper";
    case 3:
        return "Scissors";
   }
}

//Judges the player's choice against the AI
function judge(playerChoice, aiChoice){
    if (playerChoice == "Rock"){
        switch(aiChoice){
            case "Paper":
                return "lose";
                break;
            case "Scissors":
                return "win";
                break;
            case "Rock":
                return "tie";
                break;
        }
    }
    else if (playerChoice == "Paper"){
        switch(aiChoice){
            case "Scissors":
                return "lose";
                break;
            case "Rock":
                return "win";
                break;
            case "Paper":
                return "tie";
                break;
        }
    }
    else{
        switch(aiChoice){
            case "Rock":
                return "lose";
                break;
            case "Paper":
                return "win";
                break;
            case "Scissors":
                return "tie";
                break;
        }
    }
}
