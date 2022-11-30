let SECRET_CODE = "LA VADE"
let guess = prompt("Enter the secret code!!");
while(guess != SECRET_CODE){
    guess = prompt("Enter the secret code!!");
}
console.log("Congrats. You have guesseed it right!!")