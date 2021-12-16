export const homePagePoster = () => {
  const poster = document.createElement("img");
  poster.setAttribute("src", "../photos/game-of-thrones-poster.png");
  poster.classList.add("poster");
  poster.setAttribute("id", "poster");
  document.getElementById("app").appendChild(poster);
};

export const changePosterByMode = () => {
  let btn1Id = document
    .getElementsByClassName("selection")[0]
    .setAttribute("id", "btn1");
  let btn2Id = document
    .getElementsByClassName("selection")[1]
    .setAttribute("id", "btn2");
  let btn3Id = document
    .getElementsByClassName("selection")[2]
    .setAttribute("id", "btn3");

  document
    .getElementById("btn1")
    .addEventListener(
      "click",
      () =>
        (document.getElementById("poster").src =
          "../photos/got_module1_photo.jpg")
    );
  document
    .getElementById("btn2")
    .addEventListener(
      "click",
      () =>
        (document.getElementById("poster").src =
          "../photos/got_module2_photo.jpg")
    );
  document
    .getElementById("btn3")
    .addEventListener(
      "click",
      () =>
        (document.getElementById("poster").src =
          "../photos/got_module3_photo.jpg")
    );
};
