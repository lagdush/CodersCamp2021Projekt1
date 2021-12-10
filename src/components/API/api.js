import {
  newQuestion,
  Question,
  PHOTO_MODE,
  NAME_MODE,
  FAMILY_NAME_MODE,
} from "./newQuestion";

export const apiAccess = () => {
  const API = "https://thronesapi.com/api/v2/Characters";

  return fetch(API)
    .then((res) => res.json())
    .then((fullCharacters) => {
      const characters = fullCharacters.map((character) => {
        return {
          family: character.family,
          id: character.id,
          imageURL: character.imageUrl,
          fullName: character.fullName,
        };
      });

      localStorage.setItem("characters", JSON.stringify(characters));
      const currentQuestion = newQuestion(NAME_MODE);
      console.log(currentQuestion);
    })

    .catch((err) => console.error(err));
};
