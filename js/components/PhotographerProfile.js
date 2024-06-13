export const renderProfile = (photographer) => {
    const { name, city, country, tagline, portrait } = photographer ?? {};
    document.title = name + "'s - profile";
    return `
     <header class="header">
        <a href="index.html" class="header__link">
            <img class="header__logo" src="../assets/icon/logo.png" alt="FishEye Home page">
        </a>
    </header>
    <section class="photographer-main__profile" id="photographer-main__profile"> 
        <div class="photographer-main__profile__card">
            <h1 class="photographer-main__profile__card__name">${name}</h1>
            <div class="photographer-main__profile__card__info">
                <p class="photographer-main__profile__card__info__location">${city}, ${country}</p>
                <p class="photographer-main__profile__card__info__tagline">${tagline}</p>
            </div>
        </div>
        <button class="photographer-main__profile__contact button" alt="Contact me">Contactez-moi</button>
        <img class="photographer-main__profile__portrait" src="../assets/img/PhotographersID/${portrait}" alt="${name} profile's picture">
    </section>
    <div id="orderBy"></div>
    <div class="photographer-main__portfolio__gallery" id="photographer-media">
    </div>
    `;
};


export default {
    renderProfile
};