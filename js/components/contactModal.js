
export const contactPopUp = (photographer) => {
    const { name } = photographer;
    return `
    <section id="contact-modal" class="contact__modal hidden"> 
        <div id="popup-form" class="contact__modal__popup">
            <h1 class="contact__modal__popup__title">Contactez-moi</h1>
            <h2 class="contact__modal__popup__subtitle">${name}</h2>

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
                <span tabindex="0" id="close-modal" class="close"></span>
            </form>
        </div>
    </section>
`;
};


export const event = () => {
    const contactButton = document.querySelector("#contact-button");
    const popUp = document.querySelector("#contact-modal");

    contactButton.addEventListener("click", () => {
        popUp.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
    });

    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        popUp.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
    });

    const close = document.querySelector("#close-modal");
    close.addEventListener("click", () => {
        popUp.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !popUp.classList.contains("hidden")) {
            popUp.classList.toggle("hidden");
            document.body.classList.toggle("no-scroll");
        }
    });

    close.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            popUp.classList.toggle("hidden");
            document.body.classList.toggle("no-scroll");
        }
    });

};


export default {
    event,
    contactPopUp
};