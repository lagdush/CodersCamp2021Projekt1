import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { createTimer } from "./components/timer/timer";
import clickLogo from "./components/logo/logo";
import { apiAccess } from "./components/API/api";
import { randomFourCharacters } from "./components/API/random";

await apiAccess();

const app = () => {
  clickLogo();
  createTimer();
  createHallOfFame();
};

export default app;
