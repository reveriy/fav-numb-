
const thefavNumber = 21;

let guess = null;

while (guess !== thefavNumber) {
  guess = prompt("Guess my favorite number:");

  if (guess > thefavNumber) {
    alert("Too high! Try again.");
  } else if (guess < thefavNumber) {
   alert("Too low! Try again.");
  } else {
    alert("Correct! You guessed my favorite number.");
  }
}
