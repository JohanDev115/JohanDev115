const Project = ({
    title,
    description,
    image,
    link,
}) => {
    const view = `
        <div class="card">
            <h2 class="subtitle subtitle--card">${title}</h2>
            <div class="card-image">
                <img src="${image}" alt="${title}">
            </div>
            <p>${description}</p>
            <button class="card-button">
                <a class="btn card_btn" href="${link}" target="_blank">See Project</a>
            </button>
        </div>
    `;

    return view;
}

export default Project;