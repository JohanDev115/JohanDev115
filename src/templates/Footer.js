import user from '@utils/userData';

const Footer = () => {
    const view = `
        <footer>
            <h1 class="title">Contact Me</h1>
            <div class="links-container">
                ${user.socials.map(social => `
                    <a class="link" target="_blank" href="${social.href}">
                        <img src="${social.iconUrl}" alt="${social.name}"/>
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