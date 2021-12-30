import { gameRules } from "../gameRules/gameRules";
import { createHallOfFame } from "../hall_of_fame/hall_of_fame";

export const menuView = () => {
  const startButton = document.getElementsByClassName("startButton");
  const logo = document.getElementsByClassName("logo");
  const gameRulesButton = document.querySelector("#gameRulesButton");
  gameRulesButton.addEventListener("click", () => {
    gameRules(document.querySelector(".rules"));
    const mainPoster = document.getElementById("poster");
  });
  const HallOfFameButton = document.querySelector("#HallOfFame");
  HallOfFameButton.addEventListener("click", () => {
    createHallOfFame(document.querySelector(".wrapper"));
  });
};
