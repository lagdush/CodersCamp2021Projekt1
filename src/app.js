import { startButton } from "./components/startButton";
import { menuCreator, getCurrentGameMode } from "./components/gameMenu";
import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { createTimer } from "./components/timer/timer";
import clickLogo from "./components/logo/logo";
import { gameRules } from "./components/gameRules/gameRules";
import { btn } from "./components/buttonRules/buttonRules";
import { apiAccess } from "./components/API/api";
import {
  newQuestion,
  PHOTO_MODE,
  NAME_MODE,
  FAMILY_NAME_MODE,
} from "./components/API/newQuestion";
import {
  storeRankingScores,
  GamePlayer,
} from "./components/LocalStorageScores/LocalStorageScores";
import {
  homePagePoster,
  changePosterByMode,
} from "./components/Homepage_image/Homepage_image";

let availableIds;
await apiAccess().then((ids) => (availableIds = ids));

const app = () => {
  clickLogo();
  // createTimer();
  // createHallOfFame();
  newQuestion(PHOTO_MODE, availableIds).then((currentQuestion) =>
    console.log(currentQuestion)
  );
  startButton();
  menuCreator();
  getCurrentGameMode((mode) => console.log(mode));
  // gameRules();
  // btn();
  let player = new GamePlayer("Ewelina Mężyk", 20);
  storeRankingScores(FAMILY_NAME_MODE, player);
  homePagePoster();
  changePosterByMode();
};

export default app;
