//CONST'S FOR MENU ELEMENTS
const menuIcon = document.querySelector(".header__menuIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");



//CONST'S FOR IMAGES FROM GALLERY IN PROJECTS PAGE
const projectsCloseIcon1 = document.querySelector(".project1 .close-icon");
const projectsCloseIcon2 = document.querySelector(".project2 .close-icon");
const projectsCloseIcon3 = document.querySelector(".project3 .close-icon");
const projectsCloseIcon4 = document.querySelector(".project4 .close-icon");
const projectsCloseIcon5 = document.querySelector(".project5 .close-icon");
const projectsCloseIcon6 = document.querySelector(".project6 .close-icon");
const projectsCloseIcon7 = document.querySelector(".project7 .close-icon");
const projectsCloseIcon8 = document.querySelector(".project8 .close-icon");
const projectsCloseIcon9 = document.querySelector(".project9 .close-icon");
const projectsImg1 = document.querySelector(".project1");
const projectsImg2 = document.querySelector(".project2");
const projectsImg3 = document.querySelector(".project3");
const projectsImg4 = document.querySelector(".project4");
const projectsImg5 = document.querySelector(".project5");
const projectsImg6 = document.querySelector(".project6");
const projectsImg7 = document.querySelector(".project7");
const projectsImg8 = document.querySelector(".project8");
const projectsImg9 = document.querySelector(".project9");



//CLICKS ON MENU
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("active");
});



//CLICKS ON IMAGES FROM GALLERY IN PROJECTS PAGE
projectsCloseIcon1.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project1 .close-icon");

    projectsImg1.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon2.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project2 .close-icon");

    projectsImg2.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon3.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project3 .close-icon");

    projectsImg3.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon4.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project4 .close-icon");

    projectsImg4.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon5.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project5 .close-icon");

    projectsImg5.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon6.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project6 .close-icon");

    projectsImg6.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon7.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project7 .close-icon");

    projectsImg7.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon8.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project8 .close-icon");

    projectsImg8.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg9.classList.toggle("hide");
});

projectsCloseIcon9.addEventListener("click", () => {
    const projectsCloseIcon = document.querySelector(".project9 .close-icon");

    projectsImg9.classList.toggle("active");
    projectsCloseIcon.classList.toggle("active");

    projectsImg1.classList.toggle("hide");
    projectsImg2.classList.toggle("hide");
    projectsImg3.classList.toggle("hide");
    projectsImg4.classList.toggle("hide");
    projectsImg5.classList.toggle("hide");
    projectsImg6.classList.toggle("hide");
    projectsImg7.classList.toggle("hide");
    projectsImg8.classList.toggle("hide");
});