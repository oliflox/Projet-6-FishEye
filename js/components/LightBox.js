let currentMediaIndex = 0;
let currentImage = '';

export const render = (media) => {
    let images = media.map(item => item.image);
    currentImage = images[2];
    return `
    <div class="hidden portfolio__lightbox">
        <i id="lightboxClose" class="fa-solid fa-times portfolio__lightbox__close"></i>
        <i id="previous-button" class="fa-solid fa-chevron-left portfolio__lightbox__arrow"></i>
        <div class="portfolio__lightbox__card">
            <img class="portfolio__lightbox__card__image" src="../assets/img/Mimi/${currentImage}">
            <h3 class="portfolio__lightbox__card__title">Arc-en-ciel</h3>
        </div>
        <i id="next-button" class="fa-solid fa-chevron-right portfolio__lightbox__arrow"></i>
    </div>
    `
};

export const openLightbox = () => {
    const lightboxElements = document.querySelectorAll(".photographer-main__portfolio__gallery__card__preview");
    lightboxElements.forEach((element, index) => {
        element.addEventListener("click", (e) => {
            currentMediaIndex = index;
            document.querySelector(".portfolio__lightbox").classList.toggle("hidden");
            document.body.classList.add("no-scroll");
            console.log("currentMedia " + currentMediaIndex);
        });
    });
};

export const closeLightbox = () => {
    const close = document.querySelector("#lightboxClose");
    const lightbox = document.querySelector(".portfolio__lightbox");
    close.addEventListener("click", () => {
        document.body.classList.remove("no-scroll"); 
        lightbox.classList.toggle("hidden");
    });
};

export const previousMedia = (media) => {
    const previousButton = document.querySelector("#previous-button");
    previousButton.addEventListener("click", () => {
        if (currentMediaIndex > 0) {
            currentMediaIndex--;
        } else {
            currentMediaIndex = media.length - 1; 
        }
        console.log("currentMedia " + currentMediaIndex);
    });
};

export const nextMedia = (media) => {
    const nextButton = document.querySelector("#next-button");
    nextButton.addEventListener("click", () => {
        if (currentMediaIndex < media.length - 1) {
            currentMediaIndex++;
        } else {
            currentMediaIndex = 0;
        }
        console.log("currentMedia " + currentMediaIndex);
    });
}

export const carousel = (media) => {
    previousMedia(media);
    nextMedia(media);
};

export const event = (media) => {
    openLightbox();
    closeLightbox();
    carousel(media);
};


export default {
    render,
    event
};