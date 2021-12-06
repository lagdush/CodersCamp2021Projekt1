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
  const containerGame =document.querySelector(".container")
  containerGame.append(choose, btn1, btn2, btn3);
  const link1 = document.createElement("a");
  btn1.append(link1);

  //Adding active state to clicked button
  function changeColor() {
    this.classList.toggle("active");
  }
  //  btn1.addEventListener('click', changeColor)
  const buttons = [btn1, btn2, btn3];
  buttons.map((button) => button.addEventListener("click", changeColor));
};
