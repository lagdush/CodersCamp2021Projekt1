import { Question } from "../API/newQuestion";

class QuestionWrapper {
  constructor(question, choosenCharacter) {
    this.question = question;
    this.choosenCharacter = choosenCharacter;
  }
}

export class HumanPlayer {
  constructor(playerName) {
    this.playerName = playerName;
    this.questionWrappers = [];
    this.currentQuestion = null;
  }

  countAnswers() {
    return this.questionWrappers.length;
  }

  countCorrectAnswers() {
    return this.questionWrappers.filter((wrapper) => {
      return (
        wrapper.choosenCharacter.id == wrapper.question.correctCharacter.id
      );
    }).length;
  }

  askQuestion(question, callback) {
    this.currentQuestion = question;

    callback();
  }

  answer(choosenCharacter, callback) {
    this.questionWrappers.push(
      new QuestionWrapper(this.currentQuestion, choosenCharacter)
    );
    this.currentQuestion = null;
    callback();
  }
}

export function createPlayer(name) {
  return new HumanPlayer(name);
}
