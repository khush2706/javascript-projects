alert("Hello!\nIn this game I will choose a random number between 1-10 and you will have to guess it in 3 turns.");

var chance;
var num;
const heading = document.querySelector("h1");

//creates a global Javascript variable for input text
var guess;

function startGame(){
    num = Math.floor(Math.random() *10)+1;
    chance = 0;
    document.querySelector("input").value = " ";
    document.querySelector("input").disabled = false;
    heading.innerHTML = "Enter Your Guess";
}
startGame();

//Adds an event listener on button to reset game
document.querySelector("button").addEventListener("click", startGame);

//creates a listener for when you press a key
document.querySelector("input").addEventListener("keydown", keyup);

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  guess = e.target.value;

  //listens for you to press the ENTER key, at which point compare function will be called.
  if (e.keyCode == 13) {
    compare(guess);
  }
}

//Compares the guess value and keeps track of turns
function compare(guess){
    if(guess == num){
        heading.innerHTML = "Right guess!!"
        document.querySelector("input").disabled = true;
    }
    else if(guess>num){
        heading.innerHTML = "Too high"
    }
    else{
        heading.innerHTML = "Too low"
    }
    chance++;
    if(chance == 3){
        document.querySelector("input").value = " ";
        document.querySelector("input").disabled = true;
        alert("You ran out of turns :(");
        
    }
}



