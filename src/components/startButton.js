export const startButton = () => {
  const body = document.querySelector("body");
  const containerGame = document.createElement("div");
  containerGame.classList.add("container");
  body.appendChild(containerGame);
  const startButton = document.createElement("div");
  startButton.classList.add("startButton");
  startButton.innerText = "Start";
  containerGame.appendChild(startButton);
};
