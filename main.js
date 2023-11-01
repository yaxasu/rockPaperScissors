document.querySelectorAll("[data-choice]").forEach(button => {
    button.addEventListener("click", (e) => {
        const userChoice = e.target.getAttribute("data-choice");
        playRound(userChoice);
    });
});


function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    // Display the results
    document.getElementById("userChoice").textContent = "User chose: " + userChoice;
    document.getElementById("computerChoice").textContent = "Computer chose: " + computerChoice;
    document.getElementById("winner").textContent = "Winner: " + winner;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')) {
        return "User wins!";
    } else {
        return "Computer wins!";
    }
}
