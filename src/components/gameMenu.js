//creating game menu
export const menuCreator = () => {
  const choose = document.createElement("div");
  choose.classList.add("choose");
  choose.innerHTML = "Choose your quiz";
  const btn1 = document.createElement("button");
  btn1.classList.add("selection");
  btn1.innerHTML = "Character-name";
  const btn2 = document.createElement("button");
  btn2.classList.add("selection");
  btn2.innerHTML = "Name-character";
  const btn3 = document.createElement("button");
  btn3.classList.add("selection");
  btn3.innerHTML = "Character-family";
  const containerGame = document.querySelector(".container");
  containerGame.append(choose, btn1, btn2, btn3);
};
export function getCurrentGameMode(passGameMode) {
  //getting buttons and conv to array
  const buttonsN = document.getElementsByClassName("selection");
  const buttons = [...buttonsN];
  //adding default active state to character-name btn
  const btnCharName = buttons.find((btn) => {
    return btn.innerHTML === "Character-name";
  });
  btnCharName.classList.add("active");
  //Adding active state to clicked button
  function changeColor() {
    buttons.map((button) => button.classList.remove("active"));
    this.classList.toggle("active");
// const mode =this.innerHTML
//    function passGameMode() {
//       console.log(mode);
//     }
    passGameMode();
  }

  buttons.map((button) => button.addEventListener("click", changeColor));
}
