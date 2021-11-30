import { hello } from "./components/testComponent/helloWorld";
import { clickLogo } from "./components/logo/logo";

const app = () => {
  hello();
  clickLogo();
};

export default app;
