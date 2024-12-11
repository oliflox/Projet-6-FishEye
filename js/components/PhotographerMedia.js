import GlobalLikes from "../components/GlobalLikes.js";

// Classe pour le rendu des images
class ImageRenderer {
    constructor(media, photographer) {
        this.media = media;
        this.photographer = photographer;
    }

    render() {
        const { title, image } = this.media;
        const firstName = this.photographer.name.split(" ")[0];
        return `
        <img tabindex="0" 
             class="photographer-main__portfolio__gallery__card__preview pointer" 
             src="assets/img/${firstName}/${image}" 
             alt="${title}, closeup view">`;
    }
}

// Classe pour le rendu des vidéos
class VideoRenderer {
    constructor(media, photographer) {
        this.media = media;
        this.photographer = photographer;
    }

    render() {
        const { title, video } = this.media;
        const firstName = this.photographer.name.split(" ")[0];
        return `
        <video tabindex="0" 
               class="photographer-main__portfolio__gallery__card__preview pointer" 
               src="assets/img/${firstName}/${video}" 
               onmouseover="this.play()" 
               onmouseout="this.pause();this.currentTime=0;" 
               alt="${title}, video by ${this.photographer.name}">
        </video>`;
    }
}

class MediaFactory {
    static createMediaRenderer(media, photographer) {
        if (media.image) {
            return new ImageRenderer(media, photographer);
        } else if (media.video) {
            return new VideoRenderer(media, photographer);
        } else {
            throw new Error("Type de média inconnu");
        }
    }
}

export const render = (media, photographer, index) => {
    const { title, likes } = media;

    const renderer = MediaFactory.createMediaRenderer(media, photographer);
    const mediaContent = renderer.render();

    return `
    <article class="photographer-main__portfolio__gallery__card">
        ${mediaContent}
        <div class="photographer-main__portfolio__gallery__card__info">
            <p class="photographer-main__portfolio__gallery__card__info__title">${title}</p>
            <div class="photographer-main__portfolio__gallery__card__info__likes">
                <p id="like-${index}">${likes}</p>
                <i aria-label="Like ${title}" id="heart-${index}" tabindex="0" class="pointer fa-regular fa-heart"></i>
            </div>
        </div>
    </article>
    `;
};

export const event = (photographers, media) => {
    GlobalLikes.event(photographers, media);
};

export default {
    render,
    event
};