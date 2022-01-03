import { btn } from "../buttonRules/buttonRules";
import { menuCreator } from "../gameMenu";
import { gameRules } from "../gameRules/gameRules";
import { createHallOfFame } from "../hall_of_fame/hall_of_fame";
import {
  changePosterByMode,
  homePagePoster,
} from "../Homepage_image/Homepage_image";
import clickLogo from "../logo/logo";
import { modalWindow } from "../modal_window/modalWindow";
import { startButton } from "../startButton";

function createLogoAndMenu(app) {
  const logoAndMenuWrapper = document.createElement("div");
  logoAndMenuWrapper.classList.add("main-menu-and-logo");
  logoAndMenuWrapper.append(clickLogo());
  logoAndMenuWrapper.append(menuCreator());
  app.append(logoAndMenuWrapper);
}

function createPosterAndButton(gameWrapper) {
  const posterAndButtonWrapper = document.createElement("div");
  posterAndButtonWrapper.classList.add("poster-and-button");
  posterAndButtonWrapper.append(homePagePoster());
  posterAndButtonWrapper.append(btn());
  gameWrapper.append(posterAndButtonWrapper);
}

function createhallOfFameAndStartButton(gameWrapper) {
  const hofAndStartWrapper = document.createElement("div");
  hofAndStartWrapper.classList.add("hof-and-start");
  hofAndStartWrapper.append(createHallOfFame());
  hofAndStartWrapper.append(startButton());
  gameWrapper.append(hofAndStartWrapper);
}

export const menuView = () => {
  const app = document.getElementById("app");
  createLogoAndMenu(app);
  const gameWrapper = document.createElement("div");
  gameWrapper.classList.add("gameWrapper");
  createPosterAndButton(gameWrapper);
  createhallOfFameAndStartButton(gameWrapper);
  app.append(gameWrapper);

  document.querySelector("#gameRulesButton").addEventListener("click", () => {
    modalWindow(gameRules());
  });
  changePosterByMode();
};
