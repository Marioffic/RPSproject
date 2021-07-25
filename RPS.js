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
function computerPlay(playerSelection, computerSelection) {
    let Rps = [/rock/g, /paper/g, /scissors/g]
    if (playerSelection === /rock/g || /paper/g || /scissors/g) {
        computerSelection = Math.floor(Math.random() * 3);
    };
    Switch(playerSelection, computerSelection) {
        case playerSelection==/rock/g && computerSelection==/paper/g:
            console.log("you win!")
            break;
        case 
    }
    
}
/*I hit a road  block yesterday, after thinking about it I found the solution!
I will commit my initial road block though so I can look back and see how I 
was doing */