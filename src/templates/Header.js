const Header = (title) => {
    const view = `
        <header class="header header_pages">
            <h1>${title}</h1>
            <a href="/JohanDev115/index.html" class="button-link" id="goback"> Go back</a>
        </header>
    `;

    return view;
}

export default Header;