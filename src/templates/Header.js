const Header = (title) => {
    const view = `
        <header class="header">
            <h1>${title}</h1>
            <button class="btn" id="goback" onclick="window.history.back()"> Go back</button>
        </header>
    `;

    return view;
}

export default Header;