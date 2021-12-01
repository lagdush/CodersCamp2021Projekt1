import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { clickLogo } from "./components/logo/logo";
import { time } from "./components/timer/timer";


const app = () => {
  clickLogo();
  time();
  createHallOfFame();

};

export default app;
