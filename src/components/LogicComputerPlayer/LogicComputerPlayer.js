import { QuestionWrapper } from "../LogicHumanPlayer/LogicHumanPlayer";

export class ComputerPlayer {
  constructor() {
    this.questionWrappers = [];
    this.currentQuestion = null;
  }

  countAnswers() {
    return this.questionWrappers.length;
  }

  countCorrectAnswers() {
    return this.questionWrappers.filter((wrapper) => {
      return (
        wrapper.choosenCharacter.id === wrapper.question.correctCharacter.id
      );
    }).length;
  }

  askQuestion(question, callback) {
    this.currentQuestion = question;

    callback();
  }

  computerAnswer(callback) {
    const randomIndex = Math.floor(
      Math.random() * this.currentQuestion.charactersToChoseFrom.length
    );
    const choosenCharacter =
      this.currentQuestion.charactersToChoseFrom[randomIndex];
    this.questionWrappers.push(
      new QuestionWrapper(this.currentQuestion, choosenCharacter)
    );
    this.currentQuestion = null;
    callback();
  }
}

export function createComputerPlayer() {
  return new ComputerPlayer();
}
