// export const createHallOfFame = () => {
//   const ls = checkScoresInLocalStorage();
//   console.log(ls.familyNameMode.scores);
//   const list = document.createElement("ol");
//   const listItem = document.createElement("li");
//   const wrapper = document.createElement("div");
//   wrapper.classList.add("wrapper");
//   const header = document.createElement("div");
//   header.classList.add("ranking");
//   const tigerIcon = document.createElement("img");
//   tigerIcon.setAttribute("src", "../photos/podium.png");
//   const rankingHeader = document.createElement("p");
//   rankingHeader.innerText = "Mode Ranking";

//   const place = document.createElement("p");
//   place.textContent = "Score";
//   wrapper.append(place);

//   const player = document.createElement("p");
//   player.textContent = "Player";
//   wrapper.append(player);
//   for (const hofPlayer of ls.familyNameMode.scores) {
//     place.append((document.createElement("p").textContent = hofPlayer.score));
//     player.append((document.createElement("p").textContent = hofPlayer.name));
//   }

//   // const answers = document.createElement("p");
//   // answers.textContent = "Answers";
//   // wrapper.append(answers);

//   document.getElementById("app").appendChild(wrapper);
//   wrapper.append(header);
//   header.append(tigerIcon, rankingHeader);
// };
