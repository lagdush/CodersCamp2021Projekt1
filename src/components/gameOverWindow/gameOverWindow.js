import {
  GamePlayer,
  storeRankingScores,
} from "../LocalStorageScores/LocalStorageScores";
import { NAME_MODE } from "../API/newQuestion";

export const gameOver = (gameResults) => {
  const game = document.createElement("div");
  game.classList.add("gameOverWindow");
  document.getElementById("app").appendChild(game);

  // create header
  const header = document.createElement("div");
  header.classList.add("headerofGameOver");
  game.appendChild(header);

  const timeIsUp = document.createElement("h1");
  timeIsUp.textContent = "Time is up!";
  header.appendChild(timeIsUp);

  const text = document.createElement("p");
  text.textContent = `Congratulations during 60 seconds you answered ${gameResults.humanPlayer.questions} questions.`;
  header.appendChild(text);

  const correctAnsPercent = () => {
    const percent =
      gameResults.humanPlayer.goodAnswers / gameResults.humanPlayer.questions;

    return (percent * 100).toFixed();
  };

  const textCorrect = document.createElement("p");
  textCorrect.className = "textCorrect";
  textCorrect.textContent = `Correct ${correctAnsPercent()}%`;
  header.appendChild(textCorrect);
  // the end of header

  // create result board
  const results = document.createElement("div");
  results.className = "results";
  game.appendChild(results);
  results.innerHTML = `
    <span>Detailed answers:</span>
    <span>Computer</span>
    <span>You</span>
    <span>Total Answers</span>
    `;

  const inputField = document.createElement("form");
  inputField.className = "inputField";
  results.appendChild(inputField);

  const labelForInput = document.createElement("label");
  labelForInput.className = "labelForInput";
  labelForInput.textContent = "Enter your name for the rankboard:";

  const playerName = document.createElement("input");
  playerName.type = "text";
  playerName.minLength = "2";
  playerName.maxLength = "20";
  playerName.className = "player-input";
  playerName.id = "player-input";
  playerName.required = "required";

  labelForInput.appendChild(playerName);
  inputField.appendChild(labelForInput);

  const answersTable = document.createElement("div");
  answersTable.className = "answersTable";
  results.appendChild(answersTable);

  const answerTableDiv = document.createElement("div");
  answerTableDiv.className = "answerTableDiv";
  answersTable.appendChild(answerTableDiv);

  const playerAnswersDiv = document.createElement("div");
  playerAnswersDiv.className = "playerAnswer";
  results.appendChild(playerAnswersDiv);

  const totalAnswersDiv = document.createElement("div");
  totalAnswersDiv.className = "totalAnswers";
  results.appendChild(totalAnswersDiv);

  const correctAnswerElement = document.createElement("p");
  correctAnswerElement.className = "answerElement";
  correctAnswerElement.innerText = `correct: ${gameResults.computerPlayer.goodAnswers}`;

  const wrongAnswerElement = document.createElement("p");
  wrongAnswerElement.className = "answerElement";
  wrongAnswerElement.innerText = `incorrect: ${gameResults.computerPlayer.wrongAnswers}`;
  answerTableDiv.append(correctAnswerElement, wrongAnswerElement);

  const playerNumCorAnswers = document.createElement("p");
  playerNumCorAnswers.className = "answerElement";
  playerNumCorAnswers.innerText = `correct: ${gameResults.humanPlayer.goodAnswers}`;

  const playerNumWrongAnswers = document.createElement("p");
  playerNumWrongAnswers.className = "answerElement";
  playerNumWrongAnswers.innerText = `incorrect: ${gameResults.humanPlayer.wrongAnswers}`;

  playerAnswersDiv.append(playerNumCorAnswers, playerNumWrongAnswers);

  const totalAnswerElement = document.createElement("p");
  totalAnswerElement.className = "totalAnswer";
  totalAnswerElement.innerText = gameResults.humanPlayer.questions;
  totalAnswersDiv.appendChild(totalAnswerElement);

  // button
  const btn = document.createElement("input");
  btn.value = "Confirm";
  btn.type = "submit";
  btn.className = "submitButton";
  inputField.appendChild(btn);

  const refresh = () => {
    window.location.reload();
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const nameOfThePlayer = document.getElementById("player-input").value;
    const player = new GamePlayer(
      nameOfThePlayer,
      gameResults.humanPlayer.goodAnswers
    );
    storeRankingScores(NAME_MODE, player);
    refresh();
  });
};
