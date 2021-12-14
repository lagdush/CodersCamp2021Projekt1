export const apiAccess = (data) => {
  const API = "https://thronesapi.com/api/v2/Characters/";

  return fetch(API)
    .then((res) => res.json())
    .then((fullCharacters) => {
      const charactersIDs = fullCharacters.map((character) => character.id);
      return charactersIDs;
    })

    .catch((err) => console.error(err));
};
