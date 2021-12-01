export const createHallOfFame = () => {

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const header = document.createElement("div");
    header.classList.add("ranking");
    const icon = document.createElement("img");
    icon.setAttribute("src", "../photos/podium.png");
    const p = document.createElement("p")
    p.innerText = 'Mode Ranking'

    const place = document.createElement("p");
    place.textContent = 'Place';
    wrapper.append(place);

    const player = document.createElement("p");
    player.textContent = 'Player';
    wrapper.append(player);

    const answers = document.createElement("p");
    answers.textContent = 'Answers';
    wrapper.append(answers);

    document.getElementById("app").appendChild(wrapper);
    wrapper.append(header);
    header.append(icon, p);
}

