import { startButton } from "./components/startButton";
import { menuCreator, getCurrentGameMode } from "./components/gameMenu";
const app = () => {
  startButton();
  menuCreator();
  getCurrentGameMode((mode)=>console.log(mode));
};

export default app;
