export const gameRules = () => { 
const game = document.createElement('div');
game.classList.add('rules');
document.getElementById("app").appendChild(game);

const exit = document.createElement('div');
exit.classList.add('exit');
game.appendChild(exit);

const circle = document.createElement('div');
circle.classList.add('circle');
exit.appendChild(circle);

const bar1 =document.createElement('div');
bar1.classList.add('bar1');
circle.appendChild(bar1);

const bar2 =document.createElement('div');
bar2.classList.add('bar2');
circle.appendChild(bar2);

const header = document.createElement('div');
header.classList.add('header');
game.appendChild(header);

const name = document.createElement('h1');
name.textContent='The Game Rules';
header.append(name);

const ruleName1 = document.createElement('h2');
ruleName1.textContent='Character - name';
game.appendChild(ruleName1);

const ruleDesc1 = document.createElement('p');
ruleDesc1.textContent='During the quiz, you will have to select the correct picture of the character whose name is displayed on the screen. The game ends after 1minutes or after you answer 20 questions.';
game.appendChild(ruleDesc1);

const ruleName2 = document.createElement('h2');
ruleName2.textContent='Name - character';
game.appendChild(ruleName2);

const ruleDesc2 = document.createElement('p');
ruleDesc2.textContent=' During the quiz, you will have to guess the character name displayed in the picture. The game ends after 60 sec.  or after you answer 20 questions.';
game.appendChild(ruleDesc2);

const ruleName3 = document.createElement('h2');
ruleName3.textContent='Character - family';
game.appendChild(ruleName3);

const ruleDesc3 = document.createElement('p');
ruleDesc3.textContent='During the quiz, you will have to guess the name of the character’s family displayed in the picture. The game ends after 1 minutes or after you answer 20 questions.';
game.appendChild(ruleDesc3);
}