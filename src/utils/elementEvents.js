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

    if (getHash() == "") {
        const modal = document.querySelector('#diplomas');
        const btn = document.querySelector('#show-diplomas');
        const btnClose = document.querySelector('#closeDiplomas');

        const openModal = () => {
            modal.style.display = "block";
            document.querySelector("modal-header").focus();
        }

        const closeModal = () => {
            modal.style.display = "none";
        }

        btn.addEventListener('click', () => {
           openModal();
        })

        btnClose.addEventListener('click', () => {
            closeModal();
        })

        document.body.addEventListener("keydown", (evt) => {
            if (evt.keyCode == 27) {
                closeModal();
            }
        });
    }

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('show');
    //         } else {
    //             entry.target.classList.remove('show');
    //         }
    //     });
    // });

    // const hiddenElements = document.querySelectorAll('.hidden');
    // hiddenElements.forEach(el => observer.observe(el));
}

export default elementEvents;