// Welcome player and collect their name
let playerName = prompt("Welcome to Bear Ninja Hunter! Please enter your name:");

// Greet player
alert("Hello " + playerName + "! Let's play Bear Ninja Hunter!");

// Ask for player's choice
let playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

// Computer choice is hardcoded
const computerChoice = "Bear";

// Create result message
let gameMessage =
playerName + ", you chose " + playerChoice +
". The computer chose " + computerChoice + ".";

// Print to console
console.log(gameMessage);

// Print to webpage
document.getElementById("gameOutput").innerHTML = gameMessage;
