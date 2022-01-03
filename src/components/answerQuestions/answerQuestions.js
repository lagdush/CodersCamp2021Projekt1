import { createTimer } from "../timer/timer";
import { newQuestion } from "../API/newQuestion";

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

const createQuizForm = () => {
  const quizFormWrapper = document.createElement("div");
  quizFormWrapper.classList.add(QUIZ_STYLES.quizFormWrapper);
  document.getElementById("app").appendChild(quizFormWrapper);

  const quizForm = document.createElement("div");
  quizForm.classList.add(QUIZ_STYLES.quizForm);
  quizFormWrapper.appendChild(quizForm);

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
    quizAnswerList.append(answerElement);
    const innerParagraph = document.createElement("p");
    innerParagraph.setAttribute("id", "nameToChoose" + i);
    answerElement.appendChild(innerParagraph);
  }
};

export const quizPage = (question) => {
  const quizPageView = document.querySelector("#app");
  quizPageView.classList.add(QUIZ_STYLES.quizPageClass);
  document.getElementById("startButton").remove();
  document.getElementById("gameRulesButton").remove();
  document.getElementById("HallOfFame").remove();
  document.getElementById("poster").style.display = "none";
  createQuizForm();
  createTimer();

  const imageToRecognize = document.getElementById("photo-quiz");
  imageToRecognize.src = question.correctCharacter.imageUrl;
  console.log(question);

  for (let i = 0; i <= question.charactersToChoseFrom.length - 1; i++) {
    const namesToChoose = document.getElementById("nameToChoose" + i);
    namesToChoose.innerHTML = question.charactersToChoseFrom[i].fullName;
  }
};

const colorAnswer = (element, correct) => {
  if (correct) {
    element.classList.add(QUIZ_STYLES.correctAnswerClass);
  } else {
    element.classList.add(QUIZ_STYLES.wrongAnswerClass);
  }
};
