export const modalWindow = () => {
    
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.getElementById("app").appendChild(overlay);
    
    const modal = document.createElement("div");
    modal.classList.add("modal-window");
    document.getElementById("app").appendChild(modal);
    
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = "&times;"
    modal.appendChild(btn);
    
    const closeModal = () => {
        modal.style.display = "none";
        overlay.style.display = "none"
    }
    
    btn.addEventListener("click", closeModal);
}