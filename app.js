const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let userChoice


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => 
{
   userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
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

function getResult() 
{
    if (userChoice === computerChoice)
    {
        result = "It's a draw!"
    }

    if(userChoice == 'Rock' && computerChoice == 'Paper')
    {
        result = 'Oops! You lost'
    }

    if(userChoice == 'Rock' && computerChoice == 'Scissors')
    {
        result = 'Congrats! You win'
    }

    if(userChoice == 'Paper' && computerChoice == 'Rock')
    {
        result = 'Congrats! You win'
    }

    if(userChoice == 'Paper' && computerChoice == 'Scissors')
    {
        result = 'Oops! You lost'
    }
    
    if(userChoice == 'Scissors' && computerChoice == 'Paper')
    {
        result = 'Congrats! You win'
    }
    
    if(userChoice == 'Scissors' && computerChoice == 'Rock')
    {
        result = 'Oops! You lost'
    }
    
    resultDisplay.innerHTML = result
}