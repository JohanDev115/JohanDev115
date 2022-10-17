const Header = (title) => {
    const view = `
        <header class="header header_pages">
            <h1>${title}</h1>
            <a href="/" class="button-link" id="goback"> Go back</a>
        </header>
    `;

    return view;
}

export default Header;