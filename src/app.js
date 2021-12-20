import { startButton } from "./components/startButton";
import { menuCreator, getCurrentGameMode } from "./components/gameMenu";
import clickLogo from "./components/logo/logo";
import {
  homePagePoster,
  changePosterByMode,
} from "./components/Homepage_image/Homepage_image";

const app = () => {
  startButton();
  menuCreator();
  getCurrentGameMode();
  clickLogo();

  homePagePoster();
  changePosterByMode();
};

export default app;
