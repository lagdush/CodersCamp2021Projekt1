export const btn = () => {
  const button = document.createElement('div');
  button.classList.add('button');
  document.getElementById("app").appendChild(button);

  const pic = document.createElement('img');
  pic.classList.add('quest-mark')
  pic.setAttribute('src', 'src/image/question_mark.png');
  button.appendChild(pic);
};