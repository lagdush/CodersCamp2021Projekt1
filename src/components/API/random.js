import { apiAccess } from "./api";

export const randomFourCharactersIds = (availableIds) => {
  const answersIds = new Set();
  for (let i = 0; answersIds.size < 4; i++) {
    answersIds.add(getRandomId(availableIds));
  }
  return [...answersIds];
};

const getRandomId = (availableIds) => {
  const randomIndex = Math.floor(Math.random() * availableIds.length);
  return availableIds[randomIndex];
};
