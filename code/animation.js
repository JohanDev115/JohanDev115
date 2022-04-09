const scrollAnimate = () => {
    const elements = document.getElementsByClassName("sideAnim");

    for (let i = 0; i < elements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = elements[i].getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 50) {
            elements[i].classList.add("normalState");
        } else {
            elements[i].classList.remove("normalState");
        }
    }
}

const autoAnimation = () => {
    const elements = document.getElementsByClassName("autoAnim");

    for (let i = 0; i < elements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = elements[i].getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 50) {
            elements[i].classList.add("normalState");
        } else {
            elements[i].classList.remove("normalState");
        }
    }
}

window.addEventListener("scroll", scrollAnimate);
window.onload = function() {
    autoAnimation();
}