import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { clickLogo } from "./components/logo/logo";
import { createTimer } from "./components/timer/timer";


const app = () => {
  clickLogo();
  createTimer();
  createHallOfFame();

};

export default app;
