


const getComputerChoice = () => {
const choices = ['Rock', 'Paper', 'Scissors']
return choices[Math.floor(Math.random()*3)]
}

const playRound = (playerSelection, computerSelection) => {

    switch (playerSelection) {
        case 'Rock':
            if (computerSelection === 'Scissors') {
                console.log('You win')
            } else if(computerSelection === 'Paper') {
                console.log('You lose')
            } else {
                console.log('It\'s a tie')
            }
            break;

        case 'Paper':
        case 'Scissors':
            break;
        default:
            break;
    }

}

const playerSelection = 'Rock'

const computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection)















