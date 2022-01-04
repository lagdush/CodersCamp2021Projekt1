export const btn = () => {
  const button = document.createElement("div");
  button.classList.add("showButton");
  button.setAttribute("id", "gameRulesButton");
  const pic = document.createElement("img");
  pic.classList.add("quest-mark");
  pic.setAttribute("src", "./assets//question_mark.png");
  button.appendChild(pic);
  return button;
};
