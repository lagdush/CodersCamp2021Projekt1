export default function clickLogo() {
  const logo = document.createElement("img");
  logo.setAttribute("src", "./assets/logo.png");
  logo.classList.add("logo");
  logo.addEventListener("click", () => window.location.reload());
  return logo;
}
