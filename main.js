// let button1= document.getElementById('rock');
// let thingText = document.getElementById('playerChoice');

// button1.addEventListener('click', function(){
//     thingText.textContent = "This is the test";
// })
let pc;
let cc;
let outcome;
let choices = ["rock", "paper","scissors"];
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', function(){
    pc  = "rock";
    cc = computerChoice(choices);
    outcome = determine(pc, cc);

    document.getElementById('playerChoice').textContent = pc;
    document.getElementById('computerChoice').textContent = cc;
    document.getElementById('outcomeOfChoice').textContent = outcome;
})

paperButton.addEventListener('click', function(){
    pc  = "paper";
    cc = computerChoice(choices);
    outcome = determine(pc, cc);

    document.getElementById('playerChoice').textContent = pc;
    document.getElementById('computerChoice').textContent = cc;
    document.getElementById('outcomeOfChoice').textContent = outcome;
})

scissorsButton.addEventListener('click', function(){
    pc  = "scissors";
    cc = computerChoice(choices);
    outcome = determine(pc, cc);

    document.getElementById('playerChoice').textContent = pc;
    document.getElementById('computerChoice').textContent = cc;
    document.getElementById('outcomeOfChoice').textContent = outcome;
})

function computerChoice(arr){
    let randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}

function determine(pc, cc){
    if(pc === cc){return "it's a draw";}
    else if(pc === "rock" && cc === "paper"){return "Computer wins! :(";}
    else if(pc === "rock" && cc === "scissors"){return "Player wins! Congrats :)";}

    else if(pc === "paper" && cc === "rock"){return "Player wins! Congrats :)";}
    else if(pc === "paper" && cc === "scissors"){return "Computer wins! :(";}

    else if(pc === "scissors" && cc === "rock"){return "Computer wins! :(";}
    else if(pc === "scissors" && cc === "paper"){return "Player wins! Congrats :)";}
}
