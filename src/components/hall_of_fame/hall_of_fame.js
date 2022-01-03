export const createHallOfFame = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.setAttribute("id", "hof");
  const header = document.createElement("div");
  header.classList.add("ranking");
  const tigerIcon = document.createElement("img");
  tigerIcon.setAttribute("src", "../public/assets/podium.png");
  const rankingHeader = document.createElement("p");
  rankingHeader.innerText = "Mode Ranking";

  const place = document.createElement("p");
  place.textContent = "Place";
  wrapper.append(place);

  const player = document.createElement("p");
  player.textContent = "Player";
  wrapper.append(player);

  const answers = document.createElement("p");
  answers.textContent = "Answers";
  wrapper.append(answers);

  document.getElementById("app").appendChild(wrapper);
  wrapper.append(header);
  header.append(tigerIcon, rankingHeader);
};
