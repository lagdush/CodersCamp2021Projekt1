import { createTimer } from "../timer/timer";
import {
  newQuestion,
  isCorrectAnswer,
  clearStatusClass,
} from "../API/newQuestion";

export const QUIZ_STYLES = {
  quizPageClass: "quiz-page",
  quizForm: "quiz-form",
  quizFormWrapper: "quiz-wrapper",
  answerListClass: "answer-list",
  answerTextClass: "answer-text",
  questionImageClass: "question-image",
  wrongAnswerClass: "wrong-answer",
  correctAnswerClass: "correct-answer",
  //   answerImageClass: "answer-image",
  //   questionTextClass: "question-class",
};

let currentMode;
let currentAvailableIds;
let currentQuestion;
let numberOfQuestions = 0;
let numberOfCorrectAnswers = 0;
let numberOfWrongAnswers = 0;

const presentNewQuestion = () => {
  clearStatusClass();
  const promisedQuestion = newQuestion(currentMode, currentAvailableIds);
  promisedQuestion
    .then((question) => {
      currentQuestion = question;
      const imageToRecognize = document.getElementById("photo-quiz");
      imageToRecognize.src = question.correctCharacter.imageUrl;
      console.log("Got new question!");
      console.log(question);

      for (let i = 0; i <= question.charactersToChoseFrom.length - 1; i++) {
        const namesToChoose = document.getElementById("nameToChoose" + i);
        namesToChoose.innerHTML = question.charactersToChoseFrom[i].fullName;
      }
    })
    .catch((e) => console.log("Failed to load question.", e));
};

const createQuizForm = () => {
  const quizFormWrapper = document.createElement("div");
  quizFormWrapper.classList.add(QUIZ_STYLES.quizFormWrapper);
  document.getElementById("app").appendChild(quizFormWrapper);

  const quizForm = document.createElement("div");
  quizForm.classList.add(QUIZ_STYLES.quizForm);
  quizFormWrapper.appendChild(quizForm);

  const quizMainAnswer = document.createElement("p");
  quizMainAnswer.setAttribute("id", "quiz-question");
  quizMainAnswer.textContent = "What does this person look like?";
  quizForm.appendChild(quizMainAnswer);

  const questionImage = document.createElement("div");
  questionImage.classList.add(QUIZ_STYLES.questionImageClass);
  quizForm.appendChild(questionImage);

  const image = document.createElement("img");
  image.setAttribute("id", "photo-quiz");
  questionImage.appendChild(image);

  const quizAnswerList = document.createElement("ul");
  quizAnswerList.classList.add(QUIZ_STYLES.answerListClass);
  quizForm.appendChild(quizAnswerList);

  for (let i = 0; i <= 3; i++) {
    const answerElement = document.createElement("li");
    answerElement.classList.add(QUIZ_STYLES.answerTextClass);
    answerElement.setAttribute("id", "answerParent" + i);
    answerElement.addEventListener("click", function () {
      const namesToChoose = document.getElementById("nameToChoose" + i);
      const isResponseCorrect = isCorrectAnswer(
        namesToChoose.innerHTML,
        currentQuestion,
        "answerParent" + i
      );
      if (isResponseCorrect) {
        numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
      }
      if (!isResponseCorrect) {
        numberOfWrongAnswers = numberOfWrongAnswers + 1;
      }
      numberOfQuestions = numberOfQuestions + 1;

      setTimeout(presentNewQuestion, 500);
    });
    clearStatusClass();
    quizAnswerList.append(answerElement);
    const innerParagraph = document.createElement("p");
    innerParagraph.setAttribute("id", "nameToChoose" + i);

    answerElement.appendChild(innerParagraph);
  }
};

export const quizPage = (mode, availableIds) => {
  currentMode = mode;
  currentAvailableIds = availableIds;
  //clear screen
  const quizPageView = document.querySelector("#app");
  quizPageView.classList.add(QUIZ_STYLES.quizPageClass);
  document.getElementById("startButton").remove();
  document.getElementById("gameRulesButton").remove();
  document.getElementById("HallOfFame").remove();
  document.getElementById("poster").style.display = "none";

  //create quiz view
  createQuizForm();
  presentNewQuestion();
  createTimer(() => {
    console.log(
      "Koniec gry",
      "lb odpowiedzi:",
      numberOfQuestions,
      "lb poprawnych odpowiedzi:",
      numberOfCorrectAnswers,
      "lb złych odpowiedzi:",
      numberOfWrongAnswers
    );
  });
};
