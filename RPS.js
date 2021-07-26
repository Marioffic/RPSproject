/* First we understand the problem, then we plan in 
pseudo code, the we divide and conquer, lets start 
with understand.

Understand- Not too much here, we need to build a 
program that plays rock paper scissors, meaning 
when a user inputs R, P, or S the computer should
throw out a rock paper or scissors, with an answer
independent of the user's, so probably a random one

-plan in pseudo code-
if input == Rock, Paper, or Scissors {
    display random choide of (Rock Paper or Scissors)
}
else {
    display: Gimme rock, paper, or scissors and 
    nothing else!
}
Ok, now on to actual code!
*/
/*


player = window.prompt("type rock, paper, or scissors please");
computerPlay = function(){
    let Rps = [/rock/g, /paper/g, /scissors/g];
    Rps = Rps.sort((/rock/g, /paper/g, /scissors/g) => 0.5 - Math.random());
    console.log(Rps[0])
    return Rps[0]
};


*


function playRound(playerSelection, computerSelection) {
    /*-------- FAULTY CODE------
    Switch(playerSelection, computerSelection) {
        case playerSelection==/rock/g && computerSelection==/paper/g:
            console.log("you win!")
            break;
        case 
    ---------FAULTY CODE-------
    } I hit a road  block yesterday, after thinking about it I found the solution!
I will commit my initial road block though so I can look back and see how I 
was doing. As a result I have commented out the faulty code and am starting
again*/

/*

--------------------------------------------------------------------

    if (computerSelection === /rock/g) {
        switch(playerSelection) {
            case /rock/g:
                return  "You tie! Rock ties with Rock";
            case /paper/g:
                return  "You Win! Paper beats Rock";
            case /scissors/g:
                return  "You Lose! Rock beats Scissors";
        };
    };
    if (computerSelection === /paper/g) {
        switch(playerSelection) {
            case /rock/g:
                return "You Lose! Paper beats Rock";
            case /paper/g:
                return "You tie! Paper ties with Paper";
            case /scissors/g:
                return "You Win! Scissors beats Paper";
        };
    };
    if (computerSelection === /scissors/g){
        switch(playerSelection) {
            case /rock/g:
                return  "You Win! Rock beats Scissors";
            case /paper/g:
                return  "You Lose! Scissors beats Paper";
            case /scissors/g:
                return  "You tie! Scissors ties with Scissors";
        };
    };
    
};




function game() {
    playRound(player,computerPlay);
    playRound(player ,computerPlay);
    playRound(player,computerPlay);
    playRound(player,computerPlay);
    playRound(player,computerPlay);
};

*/ 

/* LOL So as we will see with this commit, I had to comment out everything,
it was a mess, but I realized I wasn't dividing and conquering. My goal was 
simply 'kill the beast' rather than starting with something like 'take out its
legs first!' so I went back to the drawing board, and our opponent can now 
spit our pseudo-random rock paper scissors choices, lets go!*/



// computer that spits out pseudo random RPS decisions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    let RPS = ['rock', 'paper', 'scissors'];
    let Randomizer = getRandomInt(3);
    let RanRPS = RPS[Randomizer]
    return RanRPS;

};
console.log(computerPlay())


// variable to hold our player's choice
player = window.prompt("type rock, paper, or scissors please");


//function to play the game, called RPS
function RPS(computerSelection, playerSelection){
    //variables for rock paper and scissors so they will be case insesitive
    let rock = /rock/i;
    let scissors = /scissors/i;
    let paper = /paper/i;
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(1)
    if (computerSelection == 'rock') {
        console.log("1")
        switch(playerSelection) {
            case rock:
                return  "You tie! Rock ties with Rock";
            case paper:
                return  "You Win! Paper beats Rock";
            case scissors:
                return  "You Lose! Rock beats Scissors";
        };
    };

    if (computerSelection == 'paper') {
        console.log("2")
        switch(playerSelection) {
            case rock:
                return "You Lose! Paper beats Rock";
            case paper:
                return "You tie! Paper ties with Paper";
            case scissors:
                return "You Win! Scissors beats Paper";
        };
    };

    if (computerSelection == 'scissors'){
        console.log("3")
        switch(playerSelection) {
            case rock:
                return  "You Win! Rock beats Scissors";
            case paper:
                return  "You Lose! Scissors beats Paper";
            case scissors:
                return  "You tie! Scissors ties with Scissors";
        };
    };
    console.log("hello")
};
    console.log(RPS(computerPlay, player));

    /*As we can see from this commit, I made progress, I realized you can input
    a function into another, lol. I still have one glaring issue thoug, my
    switch statements aren't working! I used a bunch of console.logs and 
    realized none of the initial if statements to enter the switchs were 
    working, so that is the next problem to tackle!*/
