import { HumanPlayer } from "../LogicHumanPlayer/LogicHumanPlayer";

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
  text.textContent = `Congratulations during 60 seconds you answered ${HumanPlayer.countAnswers} questions.`;
  header.appendChild(text);

  // funkcja przeliczająca na procenty?
  const correctAnsPercent = () => {
    const percent = HumanPlayer.countCorrectAnswers;
    return percent * 0.1;
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
    <span>Correct</span>
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
  playerName.required = "required";

  labelForInput.appendChild(playerName);
  inputField.appendChild(labelForInput);

  const answersTable = document.createElement("div");
  answersTable.className = "answersTable";
  results.appendChild(answersTable);

  const answerTableDiv = document.createElement("div");
  answerTableDiv.className = "answerTableDiv";
  answersTable.appendChild(answerTableDiv);

  const computerAnswerImage = document.createElement("img");
  computerAnswerImage.className = "answerImage";
  answerTableDiv.appendChild(computerAnswerImage);

  const humanAnswerImage = document.createElement("img");
  humanAnswerImage.className = "answerImage";
  answerTableDiv.appendChild(humanAnswerImage);

  const correctAnswerElement = document.createElement("p");
  correctAnswerElement.className = "answerElement";
  correctAnswerElement.innerText = "Ferdek Kiepski z domu Kiepski";
  answerTableDiv.appendChild(correctAnswerElement);

  const correctAnswerImage = document.createElement("img");
  correctAnswerImage.className = "answerImage";
  answerTableDiv.appendChild(correctAnswerImage);

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
    refresh();
  });
};
