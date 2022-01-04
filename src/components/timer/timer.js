import { modalWindow } from "../modal_window/modalWindow";

export const createTimer = (getGameResult) => {
  const timer = document.createElement("div");
  timer.setAttribute("id", "timer");
  document.getElementById("app").appendChild(timer);

  let timeLeft = 60;
  let timeFormatChange = 10;
  let downloadTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "00:00";
      modalWindow();
      getGameResult();
      return;
    }
    timeLeft -= 1;

    const check =
      timeLeft >= timeFormatChange
        ? "00" + ":" + timeLeft
        : "00" + ":" + "0" + timeLeft;
    document.getElementById("timer").innerHTML = check;
  }, 1000);
};
