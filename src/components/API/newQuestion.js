
import {apiAccess} from "./api";
import {randomFourCharacters} from "./random.js";
    
export const PHOTO_MODE = 'PhotoMode'
export const NAME_MODE = 'NameMode'
export const FAMILY_NAME_MODE = 'FamilyNameMode'

export class Question {
    constructor(questionTitle, correctCharacter, charactersToChoseFrom){
    this.questionTitle = questionTitle;
    this.correctCharacter = correctCharacter;
    this.charactersToChoseFrom = charactersToChoseFrom;}
}

export const newQuestion = (mode) => {
    const characters = randomFourCharacters();
    const randomIndex = Math.floor(Math.random() * characters.length);
    const correctCharacter = characters[randomIndex];
   
    if (mode === PHOTO_MODE) {
     
        return new Question("What does this person look like?", correctCharacter, characters)
    
    } else if (mode === NAME_MODE) {

    return new Question("Who is that character?", correctCharacter, characters)

    } else if (mode === FAMILY_NAME_MODE) {

    return new Question("What is family name?", correctCharacter, characters)
    }

}



