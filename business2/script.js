const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("current");
    navMenu.classList.remove("current");
}));


document.addEventListener('DOMContentLoaded', () => {
 
});