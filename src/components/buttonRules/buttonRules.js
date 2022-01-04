export const btn = () => {
  const button = document.createElement("div");
  button.classList.add("showButton");
  button.setAttribute("id", "gameRulesButton");
  button.innerText = "Game rules";
  return button;
};
