import LightBox from "../components/LightBox.js";
import GlobalLikes from "../components/GlobalLikes.js";

export const render = (media, photographer,index) => {
    const { title, likes, image, video } = media;
    const { name } = photographer;
    const firstName = name.split(" ")[0];
    
    const mediaContent = image 
        ? `<img class="photographer-main__portfolio__gallery__card__preview pointer" src="../assets/img/${firstName}/${image}" alt="${title}, image by ${name}">`
        : `<video class="photographer-main__portfolio__gallery__card__preview pointer" src="../assets/img/${firstName}/${video}" onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;" alt="${title}, video by ${name}"></video>`;

    return `
    <div tabindex="0" class="photographer-main__portfolio__gallery__card">
        ${mediaContent}
        <div class="photographer-main__portfolio__gallery__card__info">
            <p class="photographer-main__portfolio__gallery__card__info__title">${title}</p>
            <div class="photographer-main__portfolio__gallery__card__info__likes">
                <p id="like-${index}">${likes}</p>
                <i id="heart-${index}" tabindex="0" class="pointer fa-regular fa-heart"></i>
            </div>
        </div>
    </div>
    `;
};

export const event = (photographers, media) => {
    LightBox.event(media);
    GlobalLikes.event(photographers, media);
};

export default {
    render,
    event
};