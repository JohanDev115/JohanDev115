import getHash from "./getHash";

function elementEvents() {
    if (getHash() == "blog") {
        const sidenav = document.querySelector('#sidenav');
        const menu = document.querySelector('#menu-side-nav');
        const close = document.querySelector('#close-side-nav');
    
        menu.addEventListener('click', () => {
            sidenav.style.transform = "translate(0)";
        });
    
        close.addEventListener('click', () => {
            sidenav.style.transform = "translate(-100%)";
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
}

export default elementEvents;