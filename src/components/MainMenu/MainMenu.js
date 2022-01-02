import { gameRules } from "../gameRules/gameRules";
import { createHallOfFame } from "../hall_of_fame/hall_of_fame";
import { modalWindow } from "../modal_window/modalWindow";

export const menuView = () => {
  document.querySelector("#gameRulesButton").addEventListener("click", () => {
    modalWindow(gameRules());
  });
  document.querySelector("#HallOfFame").addEventListener("click", () => {
    modalWindow(createHallOfFame());
  });
};
