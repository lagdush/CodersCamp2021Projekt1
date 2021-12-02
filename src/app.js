import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { createTimer } from "./components/timer/timer";
import clickLogo from "./components/logo/logo";


const app = () => {
  clickLogo();
  createTimer();
  createHallOfFame();

};

export default app;
