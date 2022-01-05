import { PHOTO_MODE, NAME_MODE, FAMILY_NAME_MODE } from "../API/newQuestion";

export class GamePlayer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

export const checkScoresInLocalStorage = () => {
  const GameOfThronesRanking = JSON.parse(
    localStorage.getItem("GameOfThronesRanking")
  ) || {
    photoMode: {
      scores: [],
    },
    nameMode: {
      scores: [],
    },
    familyNameMode: {
      scores: [],
    },
  };
  return GameOfThronesRanking;
};

export const storeRankingScores = (mode, player) => {
  const GameOfThronesRanking = checkScoresInLocalStorage();
  let currentMode;

  switch (mode) {
    case PHOTO_MODE:
      currentMode = GameOfThronesRanking.photoMode.scores;
      break;
    case NAME_MODE:
      currentMode = GameOfThronesRanking.nameMode.scores;
      break;
    case FAMILY_NAME_MODE:
      currentMode = GameOfThronesRanking.familyNameMode.scores;
      break;
  }

  currentMode.push(player);
  currentMode.sort((a, b) => {
    const compareScores = b.score - a.score;
    if (compareScores !== 0) {
      return compareScores;
    }
  });
  if (currentMode.length > 5) {
    currentMode.pop();
  }

  localStorage.setItem(
    "GameOfThronesRanking",
    JSON.stringify(GameOfThronesRanking)
  );
};
