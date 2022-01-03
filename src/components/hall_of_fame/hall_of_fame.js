import { checkScoresInLocalStorage } from "../LocalStorageScores/LocalStorageScores";

export const createHallOfFame = () => {
  const ranking = checkScoresInLocalStorage();
  const rankingArray = ranking.familyNameMode.scores;
  const hallOfFame = document.createElement("div");
  hallOfFame.classList.add("hall-of-fame-wrapper");
  hallOfFame.innerHTML = `
  <div class="ranking-header">
  <img src="./assets/podium.png" alt=""/>
  <h2>Ranking</h2>
  </div>
  <div class="ranking-content">
        <ul class="ranking-flex">
            <li class="bold">Place</li>
            <li>1st</li>
            <li>2nd</li>
            <li>3rd</li>
            <li>4th</li>
            <li>5th</li>
        </ul>
        <ul class="ranking-people ranking-flex">
            <li class="bold">Player</li>
            ${rankingArray.map((player) => `<li>${player.name}</li>`).join("")}
        </ul>
        <ul class="ranking-score ranking-flex">
            <li class="bold">Points</li>
            ${rankingArray
              .map((player) => `<li>${player.score} points</li>`)
              .join("")}
        </ul>
</div>
    `;
  const header = document.createElement("div");
  header.classList.add("ranking");
  const tigerIcon = document.createElement("img");
  tigerIcon.setAttribute("src", "./assets/podium.png");
  const rankingHeader = document.createElement("p");
  rankingHeader.innerText = "Mode Ranking";

  return hallOfFame;
};
