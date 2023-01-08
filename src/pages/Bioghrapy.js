import user from "@utils/userData";
import Header from "@templates/Header";

const Biography = () => {
    const view = `
        ${Header('My Biography')}
        <main>
            <section class="biography">
                <div class="biography__image">
                    <img src="${user.photo}" alt="${user.biography.firstName} ${user.biography.lastName}">
                </div>
                <div class="personal-info">
                    <ul>
                        <li>First Name: <span>${user.biography.firstName}</span></li>
                        <li>Last Name: <span>${user.biography.lastName}</span></li>
                        <li>Age: <span>${user.biography.age}</span></li>
                        <li>Nationality: <span>${user.biography.Nationality}</span></li>
                        <li>Gender: <span>${user.biography.gender}</span></li>
                        <li>Marital Status: <span>${user.biography.maritalStatus}</span></li>
                        <li>Date of birth: <span>${user.biography.dateOfBirth}</span></li>
                        <li>Email: <span>${user.biography.email}</span></li>
                    </ul>
                </div>
                <div class="history">
                    <p>${user.biography.history}</p>
                    <h3>More things i've done</h3>
                    <ul class="list">
                        ${user.biography.achieves.map(achieve => `
                            <li>${achieve}</li>
                        `).join('')}
                    </ul>
                </div>
                <a class="button-link biography__button" href="/JohanDev115/index.html">Go Home</a>
            </section>
        </main>
    `;

    return view;
}

export default Biography;