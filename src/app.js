import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { createTimer } from "./components/timer/timer";
import clickLogo from "./components/logo/logo";
import { apiAccess } from "./components/API/api";
import { randomFourCharacters } from "./components/API/random";
import {
  newQuestion,
  Question,
  PHOTO_MODE,
  NAME_MODE,
  FAMILY_NAME_MODE,
} from "./components/API/newQuestion";

const app = () => {
  clickLogo();
  createTimer();
  createHallOfFame();
  apiAccess()
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

export default app;
