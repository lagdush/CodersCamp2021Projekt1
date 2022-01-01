export const startButton = () => {
  const containerGame = document.createElement("div");
  containerGame.classList.add("container");
  document.getElementById("app").appendChild(containerGame);
  const startB = document.createElement("button");
  startB.classList.add("startButton");
  startB.innerText = "Start";
  containerGame.appendChild(startB);
  startB.style.textAlign = "center";
  startB.style.textTransform = "uppercase";
};
