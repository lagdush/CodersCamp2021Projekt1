import { gameRules } from "../gameRules/gameRules";
import { createHallOfFame } from "../hall_of_fame/hall_of_fame";
import { modalWindow } from "../modal_window/modalWindow";

export const menuView = () => {
  const startButton = document.getElementsByClassName("startButton");
  const logo = document.getElementsByClassName("logo");
  const gameRulesButton = document.querySelector("#gameRulesButton");
  document.querySelector("#gameRulesButton").addEventListener("click", () => {
    modalWindow(gameRules());
  });
  const HallOfFameButton = document.querySelector("#HallOfFame");
  HallOfFameButton.addEventListener("click", () => {
    createHallOfFame(document.querySelector(".wrapper"));
  });
};
