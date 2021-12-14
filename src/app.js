import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { createTimer } from "./components/timer/timer";
import clickLogo from "./components/logo/logo";
import { apiAccess } from "./components/API/api";
import {
  newQuestion,
  PHOTO_MODE,
  NAME_MODE,
  FAMILY_NAME_MODE,
} from "./components/API/newQuestion";

let availableIds;
await apiAccess().then((ids) => (availableIds = ids));

const app = () => {
  clickLogo();
  createTimer();
  createHallOfFame();
  newQuestion(PHOTO_MODE, availableIds).then((currentQuestion) =>
    console.log(currentQuestion)
  );
};

export default app;
