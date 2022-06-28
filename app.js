const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => 
{
    let userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice()
{

    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber == 1)
    {
        computerChoice = 'Rock'
    }

    if (randomNumber == 2)
    {
        computerChoice = 'Paper'
    }

    if (randomNumber == 3)
    {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice

}