const Project = ({
    title,
    description,
    image,
    link,
}) => {
    const view = `
        <div class="project-card">
            <h3 class="project-card__name">${title}</h3>
            <div class="project-card__image">
                <img src="${image}" alt="${title}">
            </div>
            <p class="project-card__description">${description}</p>
            <a class="button-link project-card__link" href="${link}" target="_blank">See Project</a>
        </div>
    `;

    return view;
}

export default Project;