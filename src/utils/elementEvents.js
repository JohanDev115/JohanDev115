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

    if (getHash() == "home") {
        const modal = document.querySelector('#diplomas');
        const btn = document.querySelector('#show-diplomas');
        const btnClose = document.querySelector('#closeDiplomas');
        btn.addEventListener('click', () => {
            modal.style.display = "block";
        })
        btnClose.addEventListener('click', () => {
            modal.style.display = "none";
        })
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