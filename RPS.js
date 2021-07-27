/* Ok, we have done it! I tried to crack the problem from yesterday for a while
until I finally broke down and headed to the TOP discord, where GuezlaneKarim
helped me to realize that I wasn't calling the game function right, I had 
forgotton to put parenthesis on one of the arguements that happend to also be 
a function, so the output was never touching our main one, which is why none
of the if statements were triggering. So, our if statements triggered once we
fixed that (I confirmed with console,logs) but my switch statements weren't
triggering. I realized it was because my regex variables weren't working, so
instead I just set our player choice to lowercase with a method to achieve case
insensitivity. Overall I am pretty proud of myself and really enjoyed this 
project!*/

//------------------------------------------------------------
// computer that spits out pseudo random RPS decisions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function computerPlay() {
    let RPS = ['rock', 'paper', 'scissors'];
    let Randomizer = getRandomInt(3);
    let RanRPS = RPS[Randomizer]
    return RanRPS;

};


// variable to hold our player's choice
player = window.prompt("type rock, paper, or scissors please");


//function to play the game, called RPS
function playRound(computerSelection, playerSelection){
    //variables for rock paper and scissors so they will be case insesitive
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == 'rock') {
        console.log('The oppenent chose: rock')
        switch(playerSelection) {
            case 'rock':
                console.log("You tie! Rock ties with Rock")
                return  "You tie! Rock ties with Rock";
            case 'paper':
                console.log("You Win! Paper beats Rock")
                return  "You Win! Paper beats Rock";
            case 'scissors':
                console.log("You Lose! Rock beats Scissors")
                return  "You Lose! Rock beats Scissors";
        
        };
    }else if (computerSelection == 'paper') {
        console.log('The oponent chose: paper')
        switch(playerSelection) {
            case 'rock':
                console.log("You Lose! Paper beats Rock")
                return "You Lose! Paper beats Rock";
            case 'paper':
                console.log("You tie! Paper ties with Paper")
                return "You tie! Paper ties with Paper";
            case 'scissors':
                console.log("You Win! Scissors beats Paper")
                return "You Win! Scissors beats Paper";
        };
    }else if (computerSelection == 'scissors'){
        console.log('The openent chose: scissors')
        switch(playerSelection) {
            case 'rock':
                console.log("You Win! Rock beats Scissors")
                return  "You Win! Rock beats Scissors";
            case 'paper':
                console.log("You Lose! Scissors beats Paper")
                return  "You Lose! Scissors beats Paper";
            case 'scissors':
                console.log("You tie! Scissors ties with Scissors")
                return  "You tie! Scissors ties with Scissors";
        };
    }else {
        return "Sorry, but this is an error!"
    }
    console.log("hello")
};


function game() {
    playRound(computerPlay(), player)
}
game();