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
import {
  ComputerPlayer,
  createComputerPlayer,
} from "./components/LogicComputerPlayer/LogicComputerPlayer";
import { FAMILY_NAME_MODE, newQuestion } from "./components/API/newQuestion";

const app = () => {
  startButton();
  menuCreator();
  getCurrentGameMode();
  clickLogo();
  homePagePoster();
  changePosterByMode();

  const currentQuestionPromise = newQuestion(FAMILY_NAME_MODE, [1, 2, 3, 4]);
  currentQuestionPromise.then((currentQuestion) => {
    const computer = createComputerPlayer();
    computer.askQuestion(currentQuestion, () => console.log("question asked!"));
    computer.computerAnswer(() => console.log("computer has answered!"));
    const answersCount = computer.countAnswers();
    console.log("Total answers: " + answersCount);
    const correctAnswersCOunt = computer.countCorrectAnswers();
    console.log("Correct answers: " + correctAnswersCOunt);
    // const player = createPlayer();
    // player.askQuestion(currentQuestion, () => console.log("question asked!"));
    // player.answer(currentQuestion.charactersToChoseFrom[0], () =>
    //   console.log("player has answered!")
    // );
    // const answersCount = player.countAnswers();
    // const correctAnswersCOunt = player.countCorrectAnswers();
  });
  // .catch((e) => console.log(e));
};

export default app;
