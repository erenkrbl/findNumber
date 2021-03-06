
let guess_count = 0;
let random_number = Math.floor(Math.random() * 100 + 1);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function (event) {
    if(event.keyCode === 13)
    checkNumber();
})

function checkNumber(){
    
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    let guessLabelElement = document.querySelector("#count_it");

    
    if (random_number == userInputElement.value){
        alert("You are the winner!Guess time: " + ++guess_count);
        guess_count = 0;
        
        const choice = confirm("Game again?");

        if(choice){
            guess_count = 0;
            random_number = Math.floor(Math.random() * 100 + 1);
            answerLabelElement.innerText = "";
        } else {
            alert("Thanks for playing");
            answerLabelElement.innerText = "Best guess time: " + guess_count;
            guessLabelElement.innerText = "";
        }
        //console.log(choice);
        
    } else if (userInputElement.value == ""){
        answerLabelElement.innerText = "Enter a number";
    } else if (random_number > userInputElement.value){
        guess_count++;
        guessLabelElement.innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number";
    } else if (random_number < userInputElement.value){
        guess_count++;
        guessLabelElement.innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number";
    } else if (isNaN(userInputElement.value)){
        answerLabelElement.innerText = "It's not a number";
    }
    userInputElement.focus();
    userInputElement.value = ""; 
    //console.log(userInputElement.value);
}

console.log(random_number);