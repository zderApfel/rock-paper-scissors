/*
---Rock Paper Scissors Game: Impossible Mode---

*Impossible mode works the same, except the AI ALWAYS picks what will beat the player :)

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
    RESULT.innerHTML = "You will not win...";
}

initialize();

//Game logic, this is run whenever a button is pressed
function runGame(choice){
    if (playerScore != 5 && aiScore != 5){
        let aiChoice = makeAIChoice(choice); //Makes the AI mirror your player's choice
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
    else{
        AI_CHOICE.innerHTML = "He wiped the floor with you, I told you...";
        RESULT.innerHTML = "Click on \"Start Over\" to play again.";
    }
}

//Makes the AI generate a "choice" for the game, and return it
function makeAIChoice(choice){
   switch (choice){
    case "Rock":
        return "Paper";
    case "Paper":
        return "Scissors";
    case "Scissors":
        return "Rock";
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
