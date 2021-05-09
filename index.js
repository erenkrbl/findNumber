
let guess_count = 0;
const random_number = Math.floor(Math.random() * 100 + 1);

document.querySelector("#check_it").addEventListener("click", checkNumber);

function checkNumber(){
    guess_count++;
    let userInputElement = document.querySelector("#nr_game");
    document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;

    if(random_number == userInputElement.value){
        document.querySelector("#answer").innerText = "You are the winner";
    }
    else{

        if(random_number > userInputElement.value){
            document.querySelector("#answer").innerText = "Try a higher number";
    
        } else if(random_number < userInputElement.value){
            document.querySelector("#answer").innerText = "Try a smaller number";
        } 
    } 
    //console.log(userInputElement.value);
}

//console.log(random_number);