export const modalWindow = (component) => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.getElementById("app").appendChild(overlay);

  const modal = document.createElement("div");
  modal.classList.add("modal-window");
  document.getElementById("app").appendChild(modal);

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = "&times;";
  modal.appendChild(btn);

  const closeModal = () => {
    modal.remove();
    overlay.remove();
  };

  btn.addEventListener("click", closeModal);
  modal.append(component());
};
