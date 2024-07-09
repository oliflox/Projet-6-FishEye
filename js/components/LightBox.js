let currentMediaIndex = 0;
let currentMedia = '';
let currentTitle = '';



export const render = (media) => {
    let images = media.map(item => item.image);
    currentMedia = images[2];
    currentTitle = media[2].title;
    return `
    <div class="hidden portfolio__lightbox">
        <i id="lightboxClose" class="fa-solid fa-times portfolio__lightbox__close"></i>
        <i id="previous-button" class="fa-solid fa-chevron-left portfolio__lightbox__arrow"></i>
        <div class="portfolio__lightbox__card">
            <img id="image-display" class="portfolio__lightbox__card__image" src="../assets/img/Mimi/${currentMedia}" alt="photo of ${currentTitle}">
            <h3 id="title-display" class="portfolio__lightbox__card__title">${currentTitle}</h3>
        </div>
        <i id="next-button" class="fa-solid fa-chevron-right portfolio__lightbox__arrow"></i>
    </div>
    `;
};

export const openLightbox = (media) => {
    const lightboxElements = document.querySelectorAll(".photographer-main__portfolio__gallery__card__preview");
    lightboxElements.forEach((element, index) => {
        element.addEventListener("click", (e) => {
            currentMediaIndex = index;
            document.querySelector(".portfolio__lightbox").classList.toggle("hidden");
            document.body.classList.add("no-scroll");
            changeMedia(media); // Mettre à jour les informations du média sélectionné
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

function changeMedia(media) {
    const imageDisplay = document.querySelector("#image-display"); 
    const titleDisplay = document.querySelector("#title-display"); 

    currentMedia = media[currentMediaIndex].image;
    currentTitle = media[currentMediaIndex].title;
    
    imageDisplay.src ='../assets/img/Mimi/'+ currentMedia;
    titleDisplay.textContent = currentTitle; 
}

export const previousMedia = (media) => {
    const previousButton = document.querySelector("#previous-button");
    previousButton.addEventListener("click", () => {
        if (currentMediaIndex > 0) {
            currentMediaIndex--;
        } else {
            currentMediaIndex = media.length - 1;
        }
        changeMedia(media);
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
        changeMedia(media);
    });
};

export const carousel = (media) => {
    previousMedia(media);
    nextMedia(media);
};

export const event = (media) => {
    openLightbox(media);
    closeLightbox();
    carousel(media);
    
};


export default {
    render,
    event
};