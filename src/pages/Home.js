import user from "@utils/userData";
import nav from "@utils/nav";
import Project from "@templates/Project";

const Home = () => {
    const view = `
        <header class="main-header">
            <a href="#home" class="logo fadeInLeft">
                <img src="${user.logo}" alt="JohanDev">
                <h1 class="logo__title">${user.name}</h1>
                <h3 class="logo__subtitle">${user.profession}</h3>
            </a>
            <nav class="nav-bar fadeInRight">
                ${nav.map(link => `
                    <a href="${link.hash}" class="nav-bar_link">
                        <img src="${link.iconUrl}" alt="${link.name}">
                        <span class="tooltip">${link.name}</span>
                    </a>
                `).join('')}
            </nav>
        </header>
        <main class="home-main">
            <section class="introdution">
                <h1 class="title appear">¿Who am I?</h1>
                <div class="intro-profile">
                    <div class="intro-profile__photo fadeInLeft">
                        <img src="${user.photo}" alt="${user.name}">
                    </div>
                    <p class="intro-profile__aboutme fadeInRight">${user.aboutme}</p>
                </div>
            </section>
            <section class="skills hidden">
                <h1 class="title">Skills</h1>
                <ul class="skill-list">
                    ${user.skills.map(skill => `
                        <li>${skill}</li>  
                    `).join('')}
                </ul>
            </section>
            <section class="education hidden">
                <h1 class="title">Education</h1>
                <ul class="education-list">
                    ${user.education.map(item => `
                        <li>${item}</li>  
                    `).join('')}
                </ul>
                <button id="show-diplomas">See Diplomas</button>
            </section>
            <section class="modal" id="diplomas">
                <div class="diplomas">
                    <span class="close-btn" id="closeDiplomas">&times;</span>
                    <h1 class="title">Diplomas</h1>
                    <div class="diplomas__container">
                        ${user.diplomas.map(diploma => `
                            <div class="diploma">
                                <img src="${diploma.image}" alt="${diploma.name}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            <section class="work-experience hidden">
                <h1 class="title">Work Experience</h1>
                <div class="work-experience-list">
                    ${user.workExperience.map(job => `
                        <aside class="work-experience">
                            <h3>${job.name}</h3>
                            <p>${job.date}</p>
                            <ul>
                                ${job.obligations.map(obligation => `
                                    <li>${obligation}</li>
                                `).join('')}
                            </ul>
                        </aside>
                    `).join('')}
                </div>
            </section>
            <section class="qualities hidden">
                <h1 class="title"><span class="title--strengths">Strengths</span> and <span class="title--weaknesses">Weaknesses</span></h1>
                <div class="qualities-container">
                    <div class="qualities-list strengths">
                        <ul>
                            ${user.quality.strengths.map(quality => `
                                <li>${quality}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="qualities-list weaknesses">
                        <ul>
                            ${user.quality.weaknesess.map(quality => `
                                <li>${quality}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </section>
            <section class="knowledge hidden">
                <h1 class="title">Knowledge</h1>
                <h2 class="subtitle">Languages</h2>
                <aside class="languages">
                    ${user.knowledge.languages.map(language => `
                        <p><span>${language.level} </span>${language.name}</p>
                    `).join('')}
                </aside>
                <h2 class="subtitle">Programming Languages</h2>
                <aside class="program-languages">
                    ${user.knowledge.programLanguages.map(language => `
                        <div class="program-language">
                            <label for="${language.id}">${language.name}</label>
                            <meter id="html" min="0" max="100" value="${language.level}"></meter>
                        </div>
                    `).join('')}
                </aside>
                <h2 class="subtitle">IDE'S</h2>
                <aside class="ides">
                    ${user.knowledge.ides.map(ide => `
                        <div class="ide">
                            <div class="ide-image">
                                <img src="${ide.icon}" alt="${ide.name}">
                            </div>
                            <h4>${ide.name}</h4>
                        </div>
                    `).join('')}
                </aside>
                <h2 class="subtitle">OTHERS</h2>
                <aside class="others">
                    ${user.knowledge.others.map(other => `
                        <div class="other">
                            <div class="other-image">
                                <img src="${other.icon}" alt="${other.name}">
                            </div>
                            <h4>${other.name}</h4>
                        </div>
                    `).join('')}
                </aside>
            </section>
            <section class="hobbies hidden">
                <h1 class="title">My Hobbies</h1>
                <div class="hobbies-container">
                    ${user.hobbies.map(hobbie => `
                        <div class="hobbie">
                            <div class="hobbie-image">
                                <img src=${hobbie.icon} alt="${hobbie.name}"/>
                            </div>
                            <h4>${hobbie.name}</h4>
                        </div>
                    `).join('')}
                </div>
            </section>
            <section class="projects hidden" id="projects">
                <h1 class="title">Projects</h1>
                <div class="cards main--cards">
                    ${Project(user.projects.webPages[0])}
                    ${Project(user.projects.webPages[1])}
                    ${Project(user.projects.webPages[2])}
                </div>
                <button class="projects-button">
                    <a href="#portfolio">Show More</a>
                </button>
            </section>
        </main>
    `;

    return view;
}

export default Home;