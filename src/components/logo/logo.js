
export const clickLogo  = () => {
const logo = document.createElement("img");    
logo.setAttribute("src", "../photos/logo.png");
logo.setAttribute("height", "200");
logo.setAttribute("width", "400");
logo.setAttribute("alt", "logo");
document.getElementById("app").appendChild(logo);
logo.addEventListener('click', ()=>window.location.reload());
// const logoEvent = document.getElementsByName("img");

// logoEvent.classList.toggle('active');

};


// const xIcon = document.querySelector('.fa-times')
// const iIcon = document.querySelector('.fa-bars')
// const btnBurger = document.querySelector('.burger')
// const nav = document.querySelector('nav ul')



// const burgerShow = () => {
//     nav.classList.toggle('active')    // menu ma sie wysunac
//     btnBurger.classList.toggle('active')     // ikonka tez ma sie przesunac
//     xIcon.classList.toggle('hide')     // zmieniamy x na zwykly nalesnik
//     iIcon.classList.toggle('hide')
// }

// btnBurger.addEventListener('click', burgerShow)



// export const hello = () => {
//     const header = document.createElement("h1");
//     header.innerText = "Hello CodersCamp2021!";
//     header.style.textAlign = "center";
//     header.id = "header";
//     document.body.appendChild(header);
//   };
  
//   export const sum = (a, b) => a + b;
  

