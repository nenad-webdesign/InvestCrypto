let menu = document.querySelector(".menu-icon");
let buttons = document.querySelector(".menu");

menu.addEventListener("click" , menuOpen = () => {

if(buttons.style.display === "none") {
buttons.style.display = "flex";
buttons.style.flexDirection = "column";
buttons.style.gap = "16px";
buttons.style.width = "100%";
buttons.style.textAlign = "center";
} else {
buttons.style.display = "none";
}

});

let line = document.querySelector(".line");
let animationHeight = 0;
let roadmap = document.querySelector(".Roadmap");
let token = document.querySelector(".Token")
let oldScroll = 0;

window.onscroll = () => {
    let sectionPosition = roadmap.getBoundingClientRect().top;
    let sectionPosition2 = token.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        if (oldScroll > window.scrollY) {
            animationHeight -= 0.7;
        } else {
            animationHeight += 0.7;
        }

        if (animationHeight > 80) {
            animationHeight = 80;
        }

        if (animationHeight <= 0) {
            animationHeight = 0;
        }

        line.style.height = animationHeight + "%";
    }


    oldScroll = window.scrollY;
    
};
