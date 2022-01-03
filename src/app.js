import { StartQuiz } from "./components/StartQuiz";
import { menuCreator, getCurrentGameMode } from "./components/gameMenu";
import {
  GamePlayer,
  storeRankingScores,
} from "./components/LocalStorageScores/LocalStorageScores";

import clickLogo from "./components/logo/logo";
import {
  homePagePoster,
  changePosterByMode,
} from "./components/Homepage_image/Homepage_image";
import { apiAccess } from "./components/API/api";
import {
  HumanPlayer,
  createPlayer,
} from "./components/LogicHumanPlayer/LogicHumanPlayer";

import {
  FAMILY_NAME_MODE,
  newQuestion,
  PHOTO_MODE,
  NAME_MODE,
} from "./components/API/newQuestion";
import { modalWindow } from "./components/modal_window/modalWindow";
import { btn } from "./components/buttonRules/buttonRules";
import { menuView } from "./components/MainMenu/MainMenu";
import { btnHallOfFame } from "./components/buttonHallOfFame/buttonHallOfFame";

import { quizPage } from "./components/answerQuestions/answerQuestions";

let availableIds;
await apiAccess().then((ids) => (availableIds = ids));

export const presentQuestion = (question) => {
  document
    .querySelector("#startButton")
    .addEventListener("click", quizPage(question));
};

const app = () => {
  StartQuiz();
  menuCreator();
  clickLogo();
  // createTimer();
  // createHallOfFame();
  newQuestion(PHOTO_MODE, availableIds).then((currentQuestion) =>
    console.log(currentQuestion)
  );
  // createTimer();
  // createHallOfFame();
  getCurrentGameMode((mode) => console.log(mode));
  btn();
  btnHallOfFame();
  let player = new GamePlayer("Ewelina Mężyk", 20);
  storeRankingScores(FAMILY_NAME_MODE, player);
  changePosterByMode();
  menuView();
  // startNewQuiz();
  const createPromise = () => {
    const currentQuestionPromise = newQuestion(FAMILY_NAME_MODE, [1, 2, 3, 4]);
    currentQuestionPromise
      .then((currentQuestion) => {
        presentQuestion(currentQuestion);

        const player = createPlayer();

        player.askQuestion(currentQuestion, () =>
          console.log("question asked!")
        );

        player.answer(currentQuestion.charactersToChoseFrom[0], () =>
          console.log("player has answered!")
        );

        const answersCount = player.countAnswers();
        console.log(`Total answers: ${answersCount}`);

        const correctAnswersCOunt = player.countCorrectAnswers();
        console.log(`Correct answers: ${correctAnswersCOunt}`);
      })
      .catch((e) => console.log(e));
  };
  document
    .querySelector("#startButton")
    .addEventListener("click", createPromise);
};

export default app;
