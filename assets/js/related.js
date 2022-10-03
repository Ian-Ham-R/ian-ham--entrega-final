//CONST'S FOR MENU ELEMENTS
const menuIcon = document.querySelector(".header__menuIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");



//CLICKS ON MENU
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("active");
});