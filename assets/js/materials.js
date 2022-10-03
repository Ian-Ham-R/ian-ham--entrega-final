//CONST'S FOR SIMULATED BUTTONS FROM CARDS IN MATERIALS PAGE
const material1Char1Num = document.querySelector(".carousel-item1 .features .char1-num");
const material1Char2Num = document.querySelector(".carousel-item1 .features .char2-num");
const material1Char3Num = document.querySelector(".carousel-item1 .features .char3-num");
const material1Char1Text = document.querySelector(".carousel-item1 .features .char1-text");
const material1Char2Text = document.querySelector(".carousel-item1 .features .char2-text");
const material1Char3Text = document.querySelector(".carousel-item1 .features .char3-text");
const material1CharHr = document.querySelector(".carousel-item1 .features hr");



const material2Char1Num = document.querySelector(".carousel-item2 .features .char1-num");
const material2Char2Num = document.querySelector(".carousel-item2 .features .char2-num");
const material2Char3Num = document.querySelector(".carousel-item2 .features .char3-num");
const material2Char1Text = document.querySelector(".carousel-item2 .features .char1-text");
const material2Char2Text = document.querySelector(".carousel-item2 .features .char2-text");
const material2Char3Text = document.querySelector(".carousel-item2 .features .char3-text");
const material2CharHr = document.querySelector(".carousel-item2 .features hr");



const material3Char1Num = document.querySelector(".carousel-item3 .features .char1-num");
const material3Char2Num = document.querySelector(".carousel-item3 .features .char2-num");
const material3Char3Num = document.querySelector(".carousel-item3 .features .char3-num");
const material3Char1Text = document.querySelector(".carousel-item3 .features .char1-text");
const material3Char2Text = document.querySelector(".carousel-item3 .features .char2-text");
const material3Char3Text = document.querySelector(".carousel-item3 .features .char3-text");
const material3CharHr = document.querySelector(".carousel-item3 .features hr");



const material4Char1Num = document.querySelector(".carousel-item4 .features .char1-num");
const material4Char2Num = document.querySelector(".carousel-item4 .features .char2-num");
const material4Char3Num = document.querySelector(".carousel-item4 .features .char3-num");
const material4Char1Text = document.querySelector(".carousel-item4 .features .char1-text");
const material4Char2Text = document.querySelector(".carousel-item4 .features .char2-text");
const material4Char3Text = document.querySelector(".carousel-item4 .features .char3-text");
const material4CharHr = document.querySelector(".carousel-item4 .features hr");



const material5Char1Num = document.querySelector(".carousel-item5 .features .char1-num");
const material5Char2Num = document.querySelector(".carousel-item5 .features .char2-num");
const material5Char3Num = document.querySelector(".carousel-item5 .features .char3-num");
const material5Char1Text = document.querySelector(".carousel-item5 .features .char1-text");
const material5Char2Text = document.querySelector(".carousel-item5 .features .char2-text");
const material5Char3Text = document.querySelector(".carousel-item5 .features .char3-text");
const material5CharHr = document.querySelector(".carousel-item5 .features hr");



const material6Char1Num = document.querySelector(".carousel-item6 .features .char1-num");
const material6Char2Num = document.querySelector(".carousel-item6 .features .char2-num");
const material6Char3Num = document.querySelector(".carousel-item6 .features .char3-num");
const material6Char1Text = document.querySelector(".carousel-item6 .features .char1-text");
const material6Char2Text = document.querySelector(".carousel-item6 .features .char2-text");
const material6Char3Text = document.querySelector(".carousel-item6 .features .char3-text");
const material6CharHr = document.querySelector(".carousel-item6 .features hr");



//CLICKS ON SIMULATED BUTTONS FROM CARDS IN MATERIALS PAGE
material1Char1Num.addEventListener("click", () => {
    if ((material1Char2Num.classList.contains("active")) || (material1Char3Num.classList.contains("active"))) {
        material1Char2Num.classList.remove("active");
        material1Char3Num.classList.remove("active");
        material1Char2Text.classList.remove("active");
        material1Char3Text.classList.remove("active");
        material1CharHr.classList.remove("active");
    }
    
    material1Char1Num.classList.toggle("active");
    material1Char1Text.classList.toggle("active");
    material1CharHr.classList.toggle("active");
});

material1Char2Num.addEventListener("click", () => {
    if ((material1Char1Num.classList.contains("active")) || (material1Char3Num.classList.contains("active"))) {
        material1Char1Num.classList.remove("active");
        material1Char3Num.classList.remove("active");
        material1Char1Text.classList.remove("active");
        material1Char3Text.classList.remove("active");
        material1CharHr.classList.remove("active");
    }
    
    material1Char2Num.classList.toggle("active");
    material1Char2Text.classList.toggle("active");
    material1CharHr.classList.toggle("active");
});

material1Char3Num.addEventListener("click", () => {
    if ((material1Char1Num.classList.contains("active")) || (material1Char2Num.classList.contains("active"))) {
        material1Char1Num.classList.remove("active");
        material1Char2Num.classList.remove("active");
        material1Char1Text.classList.remove("active");
        material1Char2Text.classList.remove("active");
        material1CharHr.classList.remove("active");
    }
    
    material1Char3Num.classList.toggle("active");
    material1Char3Text.classList.toggle("active");
    material1CharHr.classList.toggle("active");
});



material2Char1Num.addEventListener("click", () => {
    if ((material2Char2Num.classList.contains("active")) || (material2Char3Num.classList.contains("active"))) {
        material2Char2Num.classList.remove("active");
        material2Char3Num.classList.remove("active");
        material2Char2Text.classList.remove("active");
        material2Char3Text.classList.remove("active");
        material2CharHr.classList.remove("active");
    }
    
    material2Char1Num.classList.toggle("active");
    material2Char1Text.classList.toggle("active");
    material2CharHr.classList.toggle("active");
});

material2Char2Num.addEventListener("click", () => {
    if ((material2Char1Num.classList.contains("active")) || (material2Char3Num.classList.contains("active"))) {
        material2Char1Num.classList.remove("active");
        material2Char3Num.classList.remove("active");
        material2Char1Text.classList.remove("active");
        material2Char3Text.classList.remove("active");
        material2CharHr.classList.remove("active");
    }
    
    material2Char2Num.classList.toggle("active");
    material2Char2Text.classList.toggle("active");
    material2CharHr.classList.toggle("active");
});

material2Char3Num.addEventListener("click", () => {
    if ((material2Char1Num.classList.contains("active")) || (material2Char2Num.classList.contains("active"))) {
        material2Char1Num.classList.remove("active");
        material2Char2Num.classList.remove("active");
        material2Char1Text.classList.remove("active");
        material2Char2Text.classList.remove("active");
        material2CharHr.classList.remove("active");
    }
    
    material2Char3Num.classList.toggle("active");
    material2Char3Text.classList.toggle("active");
    material2CharHr.classList.toggle("active");
});



material3Char1Num.addEventListener("click", () => {
    if ((material3Char2Num.classList.contains("active")) || (material3Char3Num.classList.contains("active"))) {
        material3Char2Num.classList.remove("active");
        material3Char3Num.classList.remove("active");
        material3Char2Text.classList.remove("active");
        material3Char3Text.classList.remove("active");
        material3CharHr.classList.remove("active");
    }
    
    material3Char1Num.classList.toggle("active");
    material3Char1Text.classList.toggle("active");
    material3CharHr.classList.toggle("active");
});

material3Char2Num.addEventListener("click", () => {
    if ((material3Char1Num.classList.contains("active")) || (material3Char3Num.classList.contains("active"))) {
        material3Char1Num.classList.remove("active");
        material3Char3Num.classList.remove("active");
        material3Char1Text.classList.remove("active");
        material3Char3Text.classList.remove("active");
        material3CharHr.classList.remove("active");
    }
    
    material3Char2Num.classList.toggle("active");
    material3Char2Text.classList.toggle("active");
    material3CharHr.classList.toggle("active");
});

material3Char3Num.addEventListener("click", () => {
    if ((material3Char1Num.classList.contains("active")) || (material3Char2Num.classList.contains("active"))) {
        material3Char1Num.classList.remove("active");
        material3Char2Num.classList.remove("active");
        material3Char1Text.classList.remove("active");
        material3Char2Text.classList.remove("active");
        material3CharHr.classList.remove("active");
    }
    
    material3Char3Num.classList.toggle("active");
    material3Char3Text.classList.toggle("active");
    material3CharHr.classList.toggle("active");
});



material4Char1Num.addEventListener("click", () => {
    if ((material4Char2Num.classList.contains("active")) || (material4Char3Num.classList.contains("active"))) {
        material4Char2Num.classList.remove("active");
        material4Char3Num.classList.remove("active");
        material4Char2Text.classList.remove("active");
        material4Char3Text.classList.remove("active");
        material4CharHr.classList.remove("active");
    }
    
    material4Char1Num.classList.toggle("active");
    material4Char1Text.classList.toggle("active");
    material4CharHr.classList.toggle("active");
});

material4Char2Num.addEventListener("click", () => {
    if ((material4Char1Num.classList.contains("active")) || (material4Char3Num.classList.contains("active"))) {
        material4Char1Num.classList.remove("active");
        material4Char3Num.classList.remove("active");
        material4Char1Text.classList.remove("active");
        material4Char3Text.classList.remove("active");
        material4CharHr.classList.remove("active");
    }
    
    material4Char2Num.classList.toggle("active");
    material4Char2Text.classList.toggle("active");
    material4CharHr.classList.toggle("active");
});

material4Char3Num.addEventListener("click", () => {
    if ((material4Char1Num.classList.contains("active")) || (material4Char2Num.classList.contains("active"))) {
        material4Char1Num.classList.remove("active");
        material4Char2Num.classList.remove("active");
        material4Char1Text.classList.remove("active");
        material4Char2Text.classList.remove("active");
        material4CharHr.classList.remove("active");
    }
    
    material4Char3Num.classList.toggle("active");
    material4Char3Text.classList.toggle("active");
    material4CharHr.classList.toggle("active");
});



material5Char1Num.addEventListener("click", () => {
    if ((material5Char2Num.classList.contains("active")) || (material5Char3Num.classList.contains("active"))) {
        material5Char2Num.classList.remove("active");
        material5Char3Num.classList.remove("active");
        material5Char2Text.classList.remove("active");
        material5Char3Text.classList.remove("active");
        material5CharHr.classList.remove("active");
    }
    
    material5Char1Num.classList.toggle("active");
    material5Char1Text.classList.toggle("active");
    material5CharHr.classList.toggle("active");
});

material5Char2Num.addEventListener("click", () => {
    if ((material5Char1Num.classList.contains("active")) || (material5Char3Num.classList.contains("active"))) {
        material5Char1Num.classList.remove("active");
        material5Char3Num.classList.remove("active");
        material5Char1Text.classList.remove("active");
        material5Char3Text.classList.remove("active");
        material5CharHr.classList.remove("active");
    }
    
    material5Char2Num.classList.toggle("active");
    material5Char2Text.classList.toggle("active");
    material5CharHr.classList.toggle("active");
});

material5Char3Num.addEventListener("click", () => {
    if ((material5Char1Num.classList.contains("active")) || (material5Char2Num.classList.contains("active"))) {
        material5Char1Num.classList.remove("active");
        material5Char2Num.classList.remove("active");
        material5Char1Text.classList.remove("active");
        material5Char2Text.classList.remove("active");
        material5CharHr.classList.remove("active");
    }
    
    material5Char3Num.classList.toggle("active");
    material5Char3Text.classList.toggle("active");
    material5CharHr.classList.toggle("active");
});



material6Char1Num.addEventListener("click", () => {
    if ((material6Char2Num.classList.contains("active")) || (material6Char3Num.classList.contains("active"))) {
        material6Char2Num.classList.remove("active");
        material6Char3Num.classList.remove("active");
        material6Char2Text.classList.remove("active");
        material6Char3Text.classList.remove("active");
        material6CharHr.classList.remove("active");
    }
    
    material6Char1Num.classList.toggle("active");
    material6Char1Text.classList.toggle("active");
    material6CharHr.classList.toggle("active");
});

material6Char2Num.addEventListener("click", () => {
    if ((material6Char1Num.classList.contains("active")) || (material6Char3Num.classList.contains("active"))) {
        material6Char1Num.classList.remove("active");
        material6Char3Num.classList.remove("active");
        material6Char1Text.classList.remove("active");
        material6Char3Text.classList.remove("active");
        material6CharHr.classList.remove("active");
    }
    
    material6Char2Num.classList.toggle("active");
    material6Char2Text.classList.toggle("active");
    material6CharHr.classList.toggle("active");
});

material6Char3Num.addEventListener("click", () => {
    if ((material6Char1Num.classList.contains("active")) || (material6Char2Num.classList.contains("active"))) {
        material6Char1Num.classList.remove("active");
        material6Char2Num.classList.remove("active");
        material6Char1Text.classList.remove("active");
        material6Char2Text.classList.remove("active");
        material6CharHr.classList.remove("active");
    }
    
    material6Char3Num.classList.toggle("active");
    material6Char3Text.classList.toggle("active");
    material6CharHr.classList.toggle("active");
});