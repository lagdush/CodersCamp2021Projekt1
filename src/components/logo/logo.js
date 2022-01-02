export default function clickLogo() {
  const logo = document.createElement("img");
  logo.setAttribute("src", "../photos/logo.png");
  logo.classList.add("logo");
  document.getElementById("app").appendChild(logo);
  logo.addEventListener("click", () => window.location.reload());
}
