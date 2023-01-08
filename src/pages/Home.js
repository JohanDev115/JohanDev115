import user from "@utils/userData";
import nav from "@utils/nav";
import Project from "@components/Project";

const Home = () => {
    const view = `
        <header class="header header_home">
            <aside class="banner fadeInLeft">
                <a href="/JohanDev115/index.html" class="banner__logo fadeInLeft">
                    <img src="${user.logo}" alt="refresh page">
                </a>
                <h1 class="banner__title">${user.name}</h1>
                <h2 class="banner__subtitle">${user.profession}</h2>
            </aside>
            <nav class="nav-bar fadeInRight">
                ${nav.map(link => `
                    <a href="${link.hash}" class="icon-link nav-bar__link">
                        <img src="${link.iconUrl}" alt="${link.name}">
                        <span class="tooltip">${link.name}</span>
                    </a>
                `).join('')}
            </nav>
        </header>
        <main class="main_home">
            <section class="section intro">
                <h2 class="section__title appear">About Me</h2>
                <div class="intro-content">
                    <div class="intro-content__photo fadeInLeft">
                        <img src="${user.photo}" alt="${user.name}">
                    </div>
                    <p class="intro-content__description fadeInRight">${user.aboutme}</p>
                </div>
            </section>
            <section class="section skills">
                <h2 class="section__title">Skills</h2>
                <ul class="list skill-list">
                    ${user.skills.map(skill => `
                        <li>${skill}</li>  
                    `).join('')}
                </ul>
            </section>
            <section class="section education">
                <h2 class="section__title">Education</h2>
                <ul class="list education__list">
                    ${user.education.map(item => `
                        <li>${item}</li>  
                    `).join('')}
                </ul>
                <button class="button education__button" id="show-diplomas">See Diplomas</button>
            </section>
            <section class="modal" id="diplomas">
                <div class="diplomas">
                    <button class="diplomas__close-button" id="closeDiplomas">&times;</button></a>
                    <h2 class="section__title" id="modal-header" tabindex="0">Diplomas</h2>
                    <div class="diplomas__content">
                        ${user.diplomas.map(diploma => `
                            <div class="diploma" tabindex="0">
                                <img src="${diploma.image}" alt="diploma de ${diploma.name}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            <section class="section work-experience">
                <h2 class="section__title">Work Experience</h2>
                <ul class="list work-experiences">
                    ${user.workExperience.map(job => `
                        <li class="job">
                            <h4 class="job__title">${job.name}</h4>
                            <p class="job__date">${job.date}</p>
                            <ul class="list">
                                ${job.obligations.map(obligation => `
                                    <li>${obligation}</li>
                                `).join('')}
                            </ul>
                        </li>
                    `).join('')}
                </ul>
            </section>
            <section class="section qualities">
                <h1 class="section__title"><span class="title--strengths">Strengths</span> and <span class="title--weaknesses">Weaknesses</span></h1>
                <div class="qualities__content">
                    <ul class="qualities__list strengths">
                        ${user.quality.strengths.map(quality => `
                            <li>${quality}</li>
                        `).join('')}
                    </ul>
                    <ul class="qualities__list weaknesses">
                        ${user.quality.weaknesess.map(quality => `
                            <li>${quality}</li>
                        `).join('')}
                    </ul>
                </div>
            </section>
            <section class="section knowledge">
                <h2 class="section__title">Knowledge</h2>
                <h3 class="knowledge__subtitle">Languages</h3>
                <aside class="knowledge__section languages">
                    ${user.knowledge.languages.map(language => `
                        <p class="language"><span>${language.level} </span>${language.name}</p>
                    `).join('')}
                </aside><hr>
                <h3 class="knowledge__subtitle">Programming Languages</h3>
                <aside class="knowledge__section program-languages">
                    ${user.knowledge.programLanguages.map(language => `
                        <div class="program-language">
                            <label for="${language.id}">${language.name}</label>
                            <meter id="${language.name}" min="0" max="100" value="${language.level}"></meter>
                        </div>
                    `).join('')}
                </aside><hr>
                <!--<h3 class="knowledge__subtitle">Methodologies</h3>
                <ul class="knowledge__section methodologies">
                    ${user.knowledge.methodologies.map(methodology => `
                        <li>${methodology}</li>
                    `).join('')}
                </ul><hr>-->
                <h3 class="knowledge__subtitle">Frameworks</h3>
                <aside class="knowledge__section technologies">
                    ${user.knowledge.technologies.frameworks.map(framework => `
                        <div class="technology">
                            <div class="technology__icon">
                                <img src="${framework.icon}" alt="">
                            </div>
                            <p class="technology__name">${framework.name}</p>
                        </div>
                    `).join('')}
                </aside>
                <h3 class="knowledge__subtitle">Design</h3>
                <aside class="knowledge__section technologies">
                    ${user.knowledge.technologies.design.map(design => `
                        <div class="technology">
                            <div class="technology__icon">
                                <img src="${design.icon}" alt="">
                            </div>
                            <p class="technology__name">${design.name}</p>
                        </div>
                    `).join('')}
                </aside>
                <h3 class="knowledge__subtitle">Others</h3>
                <aside class="knowledge__section technologies">
                    ${user.knowledge.technologies.others.map(other => `
                        <div class="technology">
                            <div class="technology__icon">
                                <img src="${other.icon}" alt="">
                            </div>
                            <p class="technology__name">${other.name}</p>
                        </div>
                    `).join('')}
                </aside>
            </section>
            <section class="hobbies">
                <h2 class="section__title">My Hobbies</h2>
                <aside class="hobbies__content">
                    ${user.hobbies.map(hobbie => `
                        <div class="hobbie">
                            <div class="hobbie__icon">
                                <img src=${hobbie.icon} alt=""/>
                            </div>
                            <p class="hobbie__name">${hobbie.name}</p>
                        </div>
                    `).join('')}
                </aside>
            </section>
            <section class="section projects" id="projects">
                <h2 class="section__title">Projects</h2>
                <aside class="projects__content projects_home">
                    ${Project(user.projects.webPages[0])}
                    ${Project(user.projects.webPages[1])}
                    ${Project(user.projects.webPages[2])}
                </aside>
                <a class="button-link projects__link" href="#portfolio">Show More</a>
            </section>
        </main>
    `;

    return view;
}

export default Home;