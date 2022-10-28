
const getComputerChoice = () => {
const choices = ['Rock', 'Paper', 'Scissors']
return choices[Math.floor(Math.random()*3)]
}

const sanitizePlayerSelection = (playerSelection) => {
    return `${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1).toLowerCase()}`
}

const playRound = (playerSelection, computerSelection) => {
  
    switch (playerSelection) {
        case 'Rock':
            if (computerSelection === 'Scissors') {
                return 'player'
            } else if(computerSelection === 'Paper') {
                return 'computer'
            } else {
                return 'tie'
            }

        case 'Paper':
            if (computerSelection === 'Rock') {
                return 'player'
            } else if(computerSelection === 'Scissors') {
                return 'computer'
            } else {
                return 'tie'
            }
        case 'Scissors':
            if (computerSelection === 'Paper') {
                return 'player'
            } else if(computerSelection === 'Rock') {
                return 'computer'
            } else {
                return 'tie'
            }
        default:
            break;
    }

}

const determineWinner = (playerScore, computerScore) => {
if (playerScore > computerScore) {
    return 'You win the GAME!'
} else if (computerScore > playerScore) {
    return 'You lose the GAME!'
} else {
    return 'The GAME is a tie!'
}

}


const game = () => {
let playerScore = 0
let computerScore = 0


for(let i = 0; i < 5; i++) {
    let playerSelection = sanitizePlayerSelection(prompt('Enter Rock, Paper, or Scissors'))
    let computerSelection = getComputerChoice()

    switch (playRound(playerSelection, computerSelection)) {
        case 'player':
            console.log('You win')
            playerScore += 1
            break
        case 'computer':
            console.log('You lose')
            computerScore += 1
            break
        case 'tie':
            console.log('It\'s a tie')
            break
        default:
            console.log('Wrong input')
            break;
    }
}

console.log(`Score: 
Player: ${playerScore}
Computer: ${computerScore}
`)
console.log(determineWinner(playerScore, computerScore))

}

game()
















