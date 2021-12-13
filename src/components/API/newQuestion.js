import { apiAccess } from "./api";
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

const isCorrectAnswer = (choosenId, question) => {
  if (question.correctCharacter.id === choosenId) {
    return true;
  }
  return false;
};

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
