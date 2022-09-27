const menuIcon = document.querySelector(".header__menuIcon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
});