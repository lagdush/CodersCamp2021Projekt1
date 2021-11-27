export const hello = () => {
  const header = document.createElement("h1");
  header.innerText = "Hello CodersCamp2021!";
  header.style.textAlign = "center";
  header.id = "header";
  document.body.appendChild(header);
};

export const sum = (a, b) => a + b;
