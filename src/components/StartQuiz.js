export const StartQuiz = () => {
  const startB = document.createElement("button");
  startB.classList.add("startButton");
  startB.setAttribute("id", "startButton");
  startB.innerText = "Start";
  document.body.appendChild(startB);
  startB.style.textAlign = "center";
  startB.style.textTransform = "uppercase";
  return startB;
};
