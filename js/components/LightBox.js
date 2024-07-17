let currentMediaIndex = 0;
let currentMedia = '';
let currentTitle = '';

function photographerName(photographers) {
    let { name } = photographers;
    let firstName = name.split(" ")[0];
    return firstName;
}

export const render = (media, photographers) => {
    let firstName = photographerName(photographers); 
    let images = media.map(item => item.image);
    currentMedia = images[1];
    currentTitle = media[1].title;
    return `
    <div class="hidden portfolio__lightbox">
        <i id="previous-button" class="fa-solid fa-chevron-left portfolio__lightbox__arrow"></i>
        <div class="portfolio__lightbox__card">
            <img id="image-display" class="portfolio__lightbox__card__media" src="../assets/img/${firstName}/${currentMedia}" alt="photo of ${currentTitle}">
            <h3 id="title-display" class="portfolio__lightbox__card__title">${currentTitle}</h3>
        </div>
        <div class="portfolio__lightbox__right-container">
            <i id="lightboxClose" class="fa-solid fa-times portfolio__lightbox__close"></i>
            <i id="next-button" class="fa-solid fa-chevron-right portfolio__lightbox__arrow"></i>
            <span></span>
        </div>
    </div>
    `;
};

export const openLightbox = (media, photographers) => {
    const lightboxElements = document.querySelectorAll(".photographer-main__portfolio__gallery__card__preview");
    lightboxElements.forEach((element, index) => {
        element.addEventListener("click", () => {
            openLightboxAction(index, media, photographers);
        });

        element.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                openLightboxAction(index, media, photographers);
            }
        });
    });
};

const openLightboxAction = (index, media, photographers) => {
    currentMediaIndex = index;
    document.querySelector(".portfolio__lightbox").classList.toggle("hidden");
    document.body.classList.add("no-scroll");
    changeMedia(media, photographers);
};

export const closeLightbox = () => {
    const close = document.querySelector("#lightboxClose");
    const lightbox = document.querySelector(".portfolio__lightbox");

    const closeLightboxFunction = () => {
        document.body.classList.remove("no-scroll");
        lightbox.classList.add("hidden");
    };

    close.addEventListener("click", closeLightboxFunction);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightboxFunction();
        }
    });
};

function changeMedia(media, photographers) {
    let firstName = photographerName(photographers); 
    const mediaContainer = document.querySelector(".portfolio__lightbox__card");
    currentMedia = media[currentMediaIndex].image || media[currentMediaIndex].video;
    currentTitle = media[currentMediaIndex].title;

    let mediaElement;
    if (currentMedia.endsWith('.mp4')) {
        mediaElement = `<video id="media-display" class="portfolio__lightbox__card__media" controls src="../assets/img/${firstName}/${currentMedia}" alt="video of ${currentTitle}"></video>`;
    } else {
        mediaElement = `<img id="media-display" class="portfolio__lightbox__card__media" src="../assets/img/${firstName}/${currentMedia}" alt="photo of ${currentTitle}">`;
    }

    mediaContainer.innerHTML = mediaElement + `<h3 id="title-display" class="portfolio__lightbox__card__title">${currentTitle}</h3>`;
}



export const previousMedia = (media, photographers) => {
    const previousButton = document.querySelector("#previous-button");

    const goToPreviousMedia = () => {
        if (currentMediaIndex > 0) {
            currentMediaIndex--;
        } else {
            currentMediaIndex = media.length - 1;
        }
        changeMedia(media, photographers);
    };

    previousButton.addEventListener("click", goToPreviousMedia);

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            goToPreviousMedia();
        }
    });
};


export const nextMedia = (media, photographers) => {
    const nextButton = document.querySelector("#next-button");

    const goToNextMedia = () => {
        if (currentMediaIndex < media.length - 1) {
            currentMediaIndex++; 
        } else {
            currentMediaIndex = 0;
        }
        changeMedia(media, photographers);
    };

    nextButton.addEventListener("click", goToNextMedia);

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            goToNextMedia();
        }
    });
};


export const carousel = (media, photographers) => {
    previousMedia(media, photographers);
    nextMedia(media, photographers);
};

export const event = (media, photographers) => {
    openLightbox(media, photographers);
    closeLightbox();
    carousel(media, photographers);
};


export default {
    render,
    event
};