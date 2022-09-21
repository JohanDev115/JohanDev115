const Blog = () => {
    const view = `
        <header class="header">
            <a class="blog-header__icon" id="menu-side-nav">
                <div></div>
                <div></div>
                <div></div>
            </a>
            <h1 class="title">My Blog</h1>
            <button id="goback" onclick="window.history.back()"> Go back</button>
        </header>
        <div class="sidenav" id="sidenav">
            <span class="close-btn" id="close-side-nav">&times;</span>
            <div class="blog-header blog-header--mobile">
                <h1 class="title blog-header__title">My Blog</h1>
                <button class="btn blog-header__btn" id="goback" onclick="window.history.back()"> Go back</button>
            </div>
            <nav class="blog-nav">
                <a href="#">Web Development</a>
                <a href="#">Personal growth</a>
                <a href="#">Councils</a>
                <a href="#">Others...</a>
            </nav>
        </div>
        <main class="blog-main">
            <div class="main-container">
                <h1>Available soon...</h1>
            </div>
        </main>
    `;

    return view;
}

export default Blog;