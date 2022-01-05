import { menuCreator, getCurrentGameMode } from "./components/gameMenu";
import {
  GamePlayer,
  storeRankingScores,
} from "./components/LocalStorageScores/LocalStorageScores";
import clickLogo from "./components/logo/logo";
import { changePosterByMode } from "./components/Homepage_image/Homepage_image";
import { apiAccess } from "./components/API/api";
import { createPlayer } from "./components/LogicHumanPlayer/LogicHumanPlayer";
import { FAMILY_NAME_MODE, newQuestion } from "./components/API/newQuestion";
import { btn } from "./components/buttonRules/buttonRules";
import { quizPage } from "./components/answerQuestions/answerQuestions";
import { menuView } from "./components/MainMenu/MainMenu";
import {
  ComputerPlayer,
  createComputerPlayer,
} from "./components/LogicComputerPlayer/LogicComputerPlayer";

let availableIds;
apiAccess().then((ids) => (availableIds = ids));

const renderQuiz = () => {
  quizPage(FAMILY_NAME_MODE, availableIds);
};

const app = () => {
  menuCreator();
  clickLogo();
  getCurrentGameMode(() => {});
  btn();
  let player = new GamePlayer("Ewelina Mężyk", 20);
  storeRankingScores(FAMILY_NAME_MODE, player);
  changePosterByMode();
  menuView();
  const addListenerOnButton = () => {
    renderQuiz();
  };
  document
    .querySelector("#startButton")
    .addEventListener("click", addListenerOnButton);
};

export default app;
