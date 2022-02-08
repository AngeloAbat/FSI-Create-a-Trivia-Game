// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore= 0

for(let x = 0; x < questions.length; x++){
    let question = questions[x]
    let Answer = window.prompt(question.text)
    if (Answer === question.correctAnswer){
        console.log("Correct!"), userScore = userScore + 10}
    

}

window.alert("Your score is: " + userScore)