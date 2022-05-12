let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let targetNumber = Math.floor(Math.random() * 9);
  return targetNumber;
};

let targetNumber = generateTarget();

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess < 0 || humanGuess > 9 || humanGuess === "") {
    alert("Choose number between 0 and 9");
  }

  let humanGuessDifference = getAbsoluteDistance(humanGuess, targetNumber);
  let computerGuessDifference = getAbsoluteDistance(
    computerGuess,
    targetNumber
  );
  console.log(humanGuessDifference, computerGuessDifference);
  if (humanGuessDifference <= computerGuessDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  }
  if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};
