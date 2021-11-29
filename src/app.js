import { hello } from "./components/testComponent/helloWorld";
import { clickLogo } from "./components/testComponent/logo";

const app = () => {
  hello();
  clickLogo();
};

export default app;
