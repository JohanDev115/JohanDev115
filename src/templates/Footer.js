import user from '@utils/userData';

const Footer = () => {
    const view = `
        <footer class="footer">
            <h2 class="footer__title">Contact Me</h2>
            <div class="footer__links">
                ${user.socials.map(social => `
                    <a class="icon-link footer__link" target="_blank" href="${social.href}">
                        <img src="${social.iconUrl}" alt="${social.name}"/>
                        <span class="tooltip">${social.name}</span>
                    </a>
                `).join('')}
            </div>
            <p class="footer__github">Visit my repository on <a href="https://github.com/JohanDev115" target="_blank">GITHUB</a></p>
            <p class="footer__copy">&#169${user.name} - 2022</p>
        </footer>
    `;

    return view;
}

export default Footer;