export const hallOfFame = () => {

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const header = document.createElement("div");
    header.classList.add("ranking");
    const icon = document.createElement("img");
    icon.setAttribute("src", "../photos/podium.png");
    const p = document.createElement("p")
    p.innerText = 'Mode Ranking'

    let multiP = document.createElement("p");
    multiP.textContent = 'Place';
    wrapper.append(multiP);   

    multiP = document.createElement("p");
    multiP.textContent = 'Player';
    wrapper.append(multiP);   

    multiP = document.createElement("p");
    multiP.textContent = 'Answeared';
    wrapper.append(multiP);   

    document.getElementById("app").appendChild(wrapper);
    wrapper.append(header);
    header.append(icon, p);
}