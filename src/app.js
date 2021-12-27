import { startButton } from "./components/startButton";
import { menuCreator, getCurrentGameMode } from "./components/gameMenu";
import clickLogo from "./components/logo/logo";
import {
  homePagePoster,
  changePosterByMode,
} from "./components/Homepage_image/Homepage_image";
import {
  HumanPlayer,
  createPlayer,
} from "./components/LogicHumanPlayer/LogicHumanPlayer";
import { FAMILY_NAME_MODE, newQuestion } from "./components/API/newQuestion";

const app = () => {
  startButton();
  menuCreator();
  getCurrentGameMode();
  clickLogo();
  homePagePoster();
  changePosterByMode();

  const currentQuestionPromise = newQuestion(FAMILY_NAME_MODE, [1, 2, 3, 4]);
  currentQuestionPromise
    .then((currentQuestion) => {
      const player = createPlayer();

      player.askQuestion(currentQuestion, () => console.log("question asked!"));

      player.answer(currentQuestion.charactersToChoseFrom[0], () =>
        console.log("player has answered!")
      );

      const answersCount = player.countAnswers();
      console.log("Total answers: " + answersCount);

      const correctAnswersCOunt = player.countCorrectAnswers();
      console.log("Correct answers: " + correctAnswersCOunt);
    })
    .catch((e) => console.log(e));
};

export default app;
