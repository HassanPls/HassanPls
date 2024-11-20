const buttonYes = document.getElementById("yes");
const buttonNo = Array.from(document.getElementsByClassName("no"));
const buttonFinal = document.getElementById("final");
const ghostButton = Array.from(document.getElementsByClassName("ghostButton"));

const divButtonsPart1 = document.getElementById("part1");
const divButtonsPart2 = document.getElementById("part2")

const emoteFlushed = document.getElementById("emote1");
const emoteRoses = document.getElementById("emote2");

const textShow = document.getElementById("textShow");

let check = true;

buttonNo.forEach((element) => {
    element.addEventListener("click", () => {

        if (divButtonsPart2.style.display == "flex" && check == false) {
            check = true;
            ghostButton[1].style.display = "block";
        } else {
            ghostButton.forEach((element) => {
                element.style.display = "block"
            });
        }

        element.style.position = "absolute";
        element.style.zIndex = "100";
    
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        let randomX = Math.random() * (windowWidth - element.offsetWidth);
        let randomY = Math.random() * (windowHeight - element.offsetHeight);
    
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    });
});

buttonYes.addEventListener("click", () => {
    divButtonsPart1.style.display = "none";
    divButtonsPart2.style.display = "flex";

    check = false;

    ghostButton.forEach((element) => {
        element.style.display = "none"
    });
    
    textShow.innerText = "O quanto você me ama?"
});

buttonFinal.addEventListener("click", () => {
    divButtonsPart2.style.display = "none";

    ghostButton.forEach((element) => {
        element.style.display = "none"
    });

    emoteFlushed.style.display = "none";
    emoteRoses.style.display = "block";
    
    textShow.innerText = "Eu amo mais! Toma essas flores!!"
});
