const menuIcon = document.querySelector(".header__menuIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("active");
});