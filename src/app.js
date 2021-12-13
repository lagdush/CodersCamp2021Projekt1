import { createHallOfFame } from "./components/hall_of_fame/hall_of_fame";
import { createTimer } from "./components/timer/timer";
import clickLogo from "./components/logo/logo";
import {gameRules} from "./components/gameRules/gameRules";
import {btn} from "./components/buttonRules/buttonRules";
const app = () => {
  // clickLogo();
  // createTimer();
  // createHallOfFame();
  gameRules();
  btn();
};

export default app