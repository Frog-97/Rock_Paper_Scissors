let Player_Score = 0;
let Computer_Score = 0;
function computerplay() {
    let x = Math.random();
    let computerselection = ""
    console.log(x);
    if (x <= 0.333) {
       return "rock";
    } else if (x > 0.333 && x < 0.666) {
        return "paper";
    } else (x > 0.666 && x < 1) ;{
        return "scissors";
    }
    console.log(computerselection);
}

let ComputerSelction = computerplay();

function playround(playerselection, computerselection) {
    if (playerselection.toLowerCase() === computerselection) {
        return "Draw"
    } else if (playerselection.toLowerCase() === "rock" && computerselection === "paper") {
        Computer_Score++
        return "You Lose! Paper beats Rock"
    } else if (playerselection.toLowerCase() === "rock" && computerselection === "scissors") {
        Player_Score++
        return "You Win! Rock beats Scissors"
    } else if (playerselection.toLowerCase() === "paper" && computerselection === "rock") {
        Player_Score++
        return "You Win! Paper beats Rock"
    } else if (playerselection.toLowerCase() === "paper" && computerselection === "scissors") {
        Computer_Score++
        return "You Lose! Scissors beats paper"
    } else if (playerselection.toLowerCase() === "scissors" && computerselection === "rock") {
        Computer_Score++
        return "You Lose! Rock beats Scissors"
    } else if (playerselection.toLowerCase() === "scissors" && computerselection === "paper") {
        Player_Score++
        return "You Win! Scissors beats Paper"
    }
}

/*for (let i=0; i < 5; i++) {
    console.log(playround(prompt("Enter"),ComputerSelction))
    console.log(`Player-Score = ${Player_Score}`)
    console.log(`Computer-Score = ${Computer_Score}`)
}*/






function computerplay() {
    let x = Math.random();
   alert(x);
    switch (x) {
        case x <= 0.333 :
            console.log("Rock");
            break;
        
        case x > 0.333 && x < 0.666 :
            console.log("Paper");
            break;

        case x > 0.666 && x < 1 :
            console.log("Scissors");
            break;
    }
}
alert(x);

computerplay();