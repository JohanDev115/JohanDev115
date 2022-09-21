import user from "@utils/userData";
import Header from "@templates/Header";
import Project from "@templates/Project";

const Portfolio = () => {
    const view = `
        ${Header('My Projects')}
        <main>
            <section class="projects-container">
                <section class="project-section web-pages">
                    <h1 class="title web-pages__title project-section__title">Web Pages</h1>
                    <div class="cards">
                        ${user.projects.webPages.map(webPage => Project(webPage)).join('')}
                    </div>
                </section>
                <section class="project-section videogames">
                    <h1 class="title videogames__title project-section__title">Videogames</h1>
                    <div class="cards">
                        ${user.projects.videoGames.map(videoGame => Project(videoGame)).join('')}
                    </div>
                </section>
                <button class="projects-button">
                    <a class="btn" href="#home">Go Home</a>
                </button>
            </section>
        </main>
    `;

    return view;
}

export default Portfolio;