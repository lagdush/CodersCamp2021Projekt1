// import { HumanPlayer } from "../LogicHumanPlayer/LogicHumanPlayer";

export const gameOver = () => {
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
  // text.textContent = `Congratulations during 20 seconds you answered ${playerHuman.allAnswer} questions.`;
  text.textContent = `Congratulations during 20 seconds you answered ... questions.`;
  header.appendChild(text);

  const textCorrect = document.createElement("p");
  textCorrect.className = "textCorrect";
  textCorrect.textContent = `Correct 50%`;
  header.appendChild(textCorrect);

  // create result board
  const results = document.createElement("div");
  results.className = "results";
  game.appendChild(results);

  const resultHeader = document.createElement("div");
  resultHeader.className = "resultHeader";
  results.appendChild(resultHeader);
  resultHeader.innerHTML = `
    <span>Detailed answers:</span>
    <span>Computer</span>
    <span>You</span>
    <span>Correct</span>
    `;

  const resultBody = document.createElement("div");
  resultBody.className = "resultBody";
  results.appendChild(resultBody);

  const inputField = document.createElement("form");
  inputField.className = "inputField";
  resultBody.appendChild(inputField);

  const labelForInput = document.createElement("label");
  labelForInput.className = "labelForInput";
  labelForInput.textContent = "Enter your name for the rankboard:";

  const playerName = document.createElement("input");
  playerName.type = "text";
  playerName.minLength = "2";
  playerName.maxLength = "20";
  playerName.className = "player-input";
  playerName.required = "required";

  labelForInput.appendChild(playerName);
  inputField.appendChild(labelForInput);

  // button
  const btn = document.createElement("input");
  btn.value = "Submit";
  btn.type = "submit";
  btn.className = "submitButton";

  inputField.appendChild(btn);
};
