import { PHOTO_MODE, NAME_MODE, FAMILY_NAME_MODE } from "./API/newQuestion";

const mapToMode = (innerHtml) => {
  switch (innerHtml) {
    case "Character-name":
      return PHOTO_MODE;
    case "Name-character":
      return NAME_MODE;
    case "Character-family":
      return FAMILY_NAME_MODE;
    default:
      throw new Error("Unknown game mode");
  }
};

// creating game menu
export const menuCreator = () => {
  const choose = document.createElement("div");
  choose.classList.add("choose");
  choose.innerHTML = "Choose your quiz";
  const btn1 = document.createElement("button");
  btn1.classList.add("selection");
  btn1.innerHTML = "Character-name";
  const btn2 = document.createElement("button");
  btn2.classList.add("selection");
  btn2.innerHTML = "Name-character";
  const btn3 = document.createElement("button");
  btn3.classList.add("selection");
  btn3.innerHTML = "Character-family";
  const containerGame = document.querySelector(".container");
  containerGame.append(choose, btn1, btn2, btn3);
};
export function getCurrentGameMode(passGameMode) {
  // getting buttons and conv to array
  const buttonsN = document.querySelectorAll(".selection");
  const buttons = [...buttonsN];
  // adding default active state to character-name btn
  const btnCharName = buttons.find((btn) => {
    return btn.innerHTML === "Character-name";
  });
  btnCharName.classList.add("active");
  // Adding active state to clicked button
  function changeColor(e) {
    buttons.map((button) => button.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
    passGameMode(mapToMode(e.currentTarget.innerHTML));
  }

  buttons.map((button) => button.addEventListener("click", changeColor));
}
