
let guess_count = 0;
const random_number = Math.floor(Math.random() * 100 + 1);

document.querySelector("#check_it").addEventListener("click", checkNumber);

function checkNumber(){
    guess_count++;
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");

    document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;

    if (random_number == userInputElement.value){
        answerLabelElement.innerText = "You are the winner";
    } else if (userInputElement.value == ""){
        answerLabelElement.innerText = "Enter a number";
    } else if (random_number > userInputElement.value){
        answerLabelElement.innerText = "Try a higher number";
    } else if (random_number < userInputElement.value){
        answerLabelElement.innerText = "Try a smaller number";
    } else if (isNaN(userInputElement.value)){
        answerLabelElement.innerText = "It's not a number";
    } 
    console.log(userInputElement.value);
}

console.log(random_number);