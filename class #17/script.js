function play(userChoice){

    let choices = ['Rock', 'Paper', 'Scissors']

    // let computerChoice = choices[0]
    let computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log('userChoice: ' + userChoice)
    console.log('computerChoice: ' + computerChoice)

    if(userChoice == computerChoice){
        console.log('Its a draw!')
    }
else if(
    (userChoice == 'Rock' && computerChoice == 'Scissors') ||
    (userChoice == 'Paper' && computerChoice == 'Rock') ||
    (userChoice == 'Scissors' && computerChoice == 'Paper')
){
    console.log('You won the match!')
}else{
    console.log('Computer won the match!')
}
}
