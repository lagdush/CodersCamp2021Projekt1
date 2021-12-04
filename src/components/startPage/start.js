////[[.................. Creating HTML structure............................]]////

const body = document.querySelector("body");
const main = document.createElement("main");
body.appendChild(main);

//creating left section
const siteSection = document.createElement("div");
siteSection.classList.add("siteSection");
main.appendChild(siteSection);
const buttonContainer = document.createElement("div");

///Creating left section inside elements

//creating poster

const img2 = document.createElement("img");
siteSection.appendChild(img2);
img2.classList.add("poster");
img2.setAttribute(
  "src",
  "/src/components/startPage/img/poster.png"
);
img2.setAttribute("alt", "Game of Thrones Poster");

//creating option round buttons
buttonContainer.classList.add("buttonContainer");
siteSection.appendChild(buttonContainer);

const roundButton = ["settings", "info", "fame"];
const divs = roundButton.map((buttonClass) => {
  const div = document.createElement("div");
  div.classList.add(buttonClass);
  return div;
});

buttonContainer.append(...divs);
const setButton = document.querySelector(".settings");
const infoButton = document.querySelector(".info");
const fame = document.querySelector(".fame");
const imgS = document.createElement("img");
imgS.classList.add("imgs");
setButton.appendChild(imgS);
imgS.setAttribute(
  "src",
  "/src/components/startPage/img/settings.png"
);

const imgI = document.createElement("img");
imgI.classList.add("imgI");
infoButton.appendChild(imgI);
imgI.setAttribute(
  "src",
  "/src/components/startPage/img/question.png"
);

const imgF = document.createElement("img");
imgF.classList.add("imgF");
fame.appendChild(imgF);
imgF.setAttribute(
  "src",
  "/src/components/startPage/img/fame.png"
);

//creating game menu

const containerGame = document.createElement("div");
containerGame.classList.add("container");
main.appendChild(containerGame);

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
const btnStart = document.createElement("button");
btnStart.classList.add("start");
btnStart.innerHTML = "Start";
containerGame.append(choose, btn1, btn2, btn3, btnStart);
const link1 = document.createElement("a");
btn1.append(link1);

//Adding active state to clicked button
 function changeColor(){
   this.classList.toggle('active')
 }
//  btn1.addEventListener('click', changeColor)
 const buttons =[btn1,btn2,btn3]
 buttons.map(button=>button.addEventListener('click',changeColor))