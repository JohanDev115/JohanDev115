import Header from "@templates/Header";

const Blog = () => {
    const view = `
        ${Header('Blog')}
        <main class="blog-main">
            <div class="main-container">
                <h1>Available soon...</h1>
            </div>
        </main>
    `;

    return view;
}

export default Blog;