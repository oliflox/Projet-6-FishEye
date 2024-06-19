export const render = (photographer) => {
    const { name, city, country, tagline, portrait } = photographer ?? {};
    document.title = name + "'s profile";
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
        <button id="contact-button" class="photographer-main__profile__contact button" alt="Contact me ${name}">Contactez-moi</button>
        <img class="photographer-main__profile__portrait" src="../assets/img/PhotographersID/${portrait}" alt="${name} profile's picture">
    </section>
    <div class="photographer-main__portfolio__gallery" id="photographer-media">
    </div>
    `;
};

export const contactPopUp = (photographer) => {
    const { name } = photographer;
    return `
    <section id="contact-modal" class="contact__modal hidden"> 
        <div id="popup-form" class="contact__modal__popup">
            <h1 class="contact__modal__popup__title">Contactez-moi</h1>
            <h2 class="contact__modal__popup__subtitle">${name}</h2>
            <span id="close-modal" class="close"></span>
            <form id="contact-form" class="contact__modal__popup__form" method="get">
                <div class="contact__modal__popup__form-Data">
                    <label class="contact__modal__popup__form-Data__labels">Prénom</label>
                    <input class="contact__modal__popup__form-Data__inputs" type="text" id="firstName" name="First name" />
                    <p id="firstError" class="error hidden">Veuillez saisir un prénom supérieur à 2 caractères</p>
                </div>
                <div class="contact__modal__popup__form-Data">
                    <label class="contact__modal__popup__form-Data__labels">Nom</label>
                    <input class="contact__modal__popup__form-Data__inputs" type="text" id="lastName" name="Last name" />
                    <p id="lastError" class="error hidden">Veuillez saisir un nom supérieur à 2 caractères</p>
                </div>
                <div class="contact__modal__popup__form-Data">
                    <label class="contact__modal__popup__form-Data__labels">E-mail</label>
                    <input class="contact__modal__popup__form-Data__inputs" type="email" id="email" name="email" />
                    <p id="emailError" class="error hidden">Veuillez saisir une adresse mail valide</p>
                </div>
                <div class="contact__modal__popup__form-Data">
                    <label class="contact__modal__popup__form-Data__labels">Votre Message</label>
                    <textarea class="contact__modal__popup__form-Data__inputs textarea" rows="6" name="textarea">
                    </textarea>
                    <p id="emailError" class="error hidden">Veuillez saisir une adresse mail valide</p>
                </div>
                <input class="button submit-button" type="submit" value="Envoyer" />
            </form>
        </div>
    </section>
`;};


export const event = () => {
    const contactButton = document.querySelector("#contact-button");
    const popUp = document.querySelector("#contact-modal");

    contactButton.addEventListener("click", () => {
        popUp.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
    });

    const close = document.querySelector("#close-modal");
    close.addEventListener("click", () => {
        popUp.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
    });

    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        popUp.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
    });

};


export default {
    render,
    event,
    contactPopUp
};