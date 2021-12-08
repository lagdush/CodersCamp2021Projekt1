import {
    apiAccess
} from "./api";


export const randomFourCharacters = () => {
    const characters = JSON.parse(localStorage.getItem("characters"));
    const fourCharacters = [];
    for (let i = 0; i <= 3; i++) {
        const number = Math.floor(Math.random() * characters.length)
        fourCharacters.push(characters[number])
    }
    return fourCharacters;
}

