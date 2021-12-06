import { hello } from "./components/testComponent/helloWorld";
import { startButton } from "./components/startButton";
import { menuCreator } from "./components/gameMenu";
const app = () => {
  hello();
  startButton();
  menuCreator();
};

export default app;
