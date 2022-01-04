import { randomFourCharactersIds } from "./random.js";

export const PHOTO_MODE = "PhotoMode";
export const NAME_MODE = "NameMode";
export const FAMILY_NAME_MODE = "FamilyNameMode";

export class Question {
  constructor(questionTitle, correctCharacter, charactersToChoseFrom) {
    this.questionTitle = questionTitle;
    this.correctCharacter = correctCharacter;
    this.charactersToChoseFrom = charactersToChoseFrom;
  }
}

export const newQuestion = (mode, availableIds) => {
  const randomCharacterIds = randomFourCharactersIds(availableIds);
  const randomIndex = Math.floor(Math.random() * randomCharacterIds.length);

  return Promise.all(randomCharacterIds.map((id) => fetchCharacterById(id)))
    .then((characters) => {
      const correctCharacter = characters[randomIndex];
      if (mode === PHOTO_MODE) {
        return new Question(
          "What does this person look like?",
          correctCharacter,
          characters
        );
      } else if (mode === NAME_MODE) {
        return new Question(
          "Who is that character?",
          correctCharacter,
          characters
        );
      } else if (mode === FAMILY_NAME_MODE) {
        return new Question(
          "What is family name?",
          correctCharacter,
          characters
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const isCorrectAnswer = (choosenName, question, elementId) => {
  if (question.correctCharacter.fullName === choosenName) {
    document.getElementById(elementId).classList.add("correct-answer");
    return true;
  } else {
    document.getElementById(elementId).classList.add("wrong-answer");
    return false;
  }
};

let allLi = document.getElementsByClassName("answer-text");
export function clearStatusClass() {
  [].forEach.call(allLi, function (el) {
    el.classList.remove("wrong-answer", "correct-answer");
  });
}

const fetchCharacterById = (id) => {
  const API = "https://thronesapi.com/api/v2/Characters/" + id;

  return fetch(API)
    .then((res) => res.json())
    .then((fullCharacter) => {
      return {
        id: fullCharacter.id,
        fullName: fullCharacter.fullName,
        family: fullCharacter.family,
        imageUrl: fullCharacter.imageUrl,
      };
    })
    .catch((err) => console.error(err));
};
