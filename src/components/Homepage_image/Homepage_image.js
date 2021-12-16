import { getCurrentGameMode } from "../gameMenu";
import { PHOTO_MODE, NAME_MODE, FAMILY_NAME_MODE } from "../API/newQuestion";

export const homePagePoster = () => {
  const poster = document.createElement("img");
  poster.setAttribute("src", "../photos/game-of-thrones-poster.png");
  poster.classList.add("poster");
  poster.setAttribute("id", "poster");
  document.getElementById("app").appendChild(poster);
  return poster;
};

export const changePosterByMode = () => {
  const poster = homePagePoster();
  getCurrentGameMode((mode) => {
    switch (mode) {
      case PHOTO_MODE:
        poster.src = "../photos/got_module1_photo.jpg";
        break;
      case NAME_MODE:
        poster.src = "../photos/got_module2_photo.jpg";
        break;
      case FAMILY_NAME_MODE:
        poster.src = "../photos/got_module3_photo.jpg";
        break;
    }
  });
};
