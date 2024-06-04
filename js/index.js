// Créer un objet JavaScript avec le HTML du header
const headerObj = {
    html: `
        <header class="header">
            <a href="index.html" class="header__link">
                <img class="header__logo" src="../assets/icon/logo.png" alt="FishEye Home page">
            </a>
            <h1 class="header__title">Nos photographes</h1>
        </header>
    `
};

document.body.insertAdjacentHTML('afterbegin', headerObj.html);

function createPhotographerCard(photographer) {
    const photographersProfile =
        `<img class="main__grid__card__profile__picture" src="../assets/img/PhotographersID/${photographer.portrait}"
        alt="Profile picture ${photographer.name}">
        <h2 class="main__grid__card__profile__name">${photographer.name}</h2>`;

    const photographersInfo =
        `<p class="main__grid__card__info__location">${photographer.city}, ${photographer.country}</p>
        <p class="main__grid__card__info__tagline">${photographer.tagline}</p>
        <p class="main__grid__card__info__price">${photographer.price}€/jour</p>`;

    return `<a class="main__grid__link" href="photographers/${photographer.id}">
            <div class="main__grid__card">
                <div class="main__grid__card__profile">
                    ${photographersProfile}
                </div>
                <div class="main__grid__card__info">
                    ${photographersInfo}
                </div>
            </div>
        </a>`;
}

fetch("../data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
        const mainGrid = document.querySelector(".main__grid");
        data.photographers.forEach((photographer) => {
            const photographerCard = createPhotographerCard(photographer);
            mainGrid.insertAdjacentHTML('beforeend', photographerCard);
        });
    })
    .catch((error) => console.error("Error:", error));