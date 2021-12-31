export const btnHallOfFame = () => {
  const button = document.createElement("div");
  button.classList.add("showButton");
  button.setAttribute("id", "HallOfFame");
  document.getElementById("app").appendChild(button);
  const pic = document.createElement("img");
  pic.classList.add("hof-mark");
  pic.setAttribute("src", "src/image/HallOfFame_mark.png");
  button.appendChild(pic);
};
