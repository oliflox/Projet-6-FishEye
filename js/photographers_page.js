const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

function photographerProfile(photographer) {
    const photographerProfile =
        `<div class="photographer-main__profile__card">
        <h1 class="photographer-main__profile__card__name">${photographer.name}</h1>
        <div class="photographer-main__profile__card__info">
            <p class="photographer-main__profile__card__info__location">${photographer.city}, ${photographer.country}</p>
            <p class="photographer-main__profile__card__info__tagline">${photographer.tagline}</p>
        </div>
    </div>
    <button class="photographer-main__profile__contact button" alt="Contact me">Contactez-moi</button>
    <img class="photographer-main__profile__portrait" src="../assets/img/PhotographersID/${photographer.portrait}" alt="${photographer.name} profile's picture">
    `;

    return ` 
    <section class="photographer-main__profile">
        ${photographerProfile}
    </section>
    `;
}

function mediaCard(media, photographer) {
    const firstName = photographer.name.split(' ')[0];
    return `<div class="photographer-main__portfolio__gallery__card">
        <img class="photographer-main__portfolio__gallery__card__preview" src="../assets/img/${firstName}/${media.image}" alt="${media.title}, image by ${photographer.name}">
        <div class="photographer-main__portfolio__gallery__card__info">
            <p class="photographer-main__portfolio__gallery__card__info__title">${media.title}</p>
            <p class="photographer-main__portfolio__gallery__card__info__likes">${media.likes} <i class="fa-solid fa-heart"></i></p>
        </div>
    </div>
    `;
}

fetch("../data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
        const photographer = data.photographers.find(p => p.id == photographerId);
        if (photographer) {
            const photographerMain = document.querySelector(".photographer-main");
            photographerMain.insertAdjacentHTML('afterbegin', photographerProfile(photographer));

            const media = data.media.filter(m => m.photographerId == photographerId);
            let mediaCards = '';
            media.forEach(m => {
                mediaCards += mediaCard(m, photographer);
            });

            const mediaContainer = document.querySelector(".photographer-main__portfolio__gallery");
            mediaContainer.innerHTML = mediaCards;
        } else {
            console.error("Photographer not found");
        }
    })
    .catch((error) => console.error("Error:", error));