import { getCurrentGameMode } from "../gameMenu";
import { PHOTO_MODE, NAME_MODE, FAMILY_NAME_MODE } from "../API/newQuestion";

export const homePagePoster = () => {
  const poster = document.createElement("img");
  const src = "./assets/got_module1_photo.png";
  poster.setAttribute("src", src);
  poster.classList.add("poster");
  poster.setAttribute("id", "poster");
  document.getElementById("app").appendChild(poster);
  return poster;
};

const switchPhotoMode = () => {
  const poster = homePagePoster();
  getCurrentGameMode((mode) => {
    switch (mode) {
      case PHOTO_MODE:
        poster.src = "./assets/got_module1_photo.png";
        break;
      case NAME_MODE:
        poster.src = "./assets/got_module2_photo.jpg";
        break;
      case FAMILY_NAME_MODE:
        poster.src = "./assets/got_module3_photo.jpg";
        break;
      default:
        throw new Error("Unknown game mode");
    }
  });
};

export const changePosterByMode = () => {
  switchPhotoMode();
};
