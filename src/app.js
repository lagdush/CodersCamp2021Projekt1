import { apiAccess } from "./components/API/api";
import { FAMILY_NAME_MODE } from "./components/API/newQuestion";
import { quizPage } from "./components/answerQuestions/answerQuestions";
import { menuView } from "./components/MainMenu/MainMenu";

/* eslint-disable no-return-assign */
let availableIds;
apiAccess().then((ids) => {
  availableIds = ids;
});

const renderQuiz = () => {
  quizPage(FAMILY_NAME_MODE, availableIds);
};

const app = () => {
  menuView();
  const addListenerOnButton = () => {
    renderQuiz();
  };
  document
    .querySelector("#startButton")
    .addEventListener("click", addListenerOnButton);
};

export default app;
