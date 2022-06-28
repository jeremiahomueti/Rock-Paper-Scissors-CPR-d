computerChoiceDisplay = document.getElementById('computer-choice')
userChoiceDisplay = document.getElementById('user-choice')
resultDisplay = document.getElementById('result')
possibleChoices = document.querySelectorAll('button')
let possibleChoices
let userChoice




possibleChoices.forEach(possibleChoice => addEventListener('click', (e) =>
{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
})
)
