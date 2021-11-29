
export const clickLogo  = () => {
const logo = document.querySelector(".logoName");     

function reloadThePage(){
    window.location.reload(true);
} 

logo.addEventListener('click', reloadThePage)}
