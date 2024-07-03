import LightBox from "../components/LightBox.js";

export const render = (media, photographer) => {
    const { title, likes, image, video } = media;
    const {name} = photographer;
    const firstName = name.split(" ")[0];

    const mediaContent = image 
    ? `<img class="photographer-main__portfolio__gallery__card__preview" src="../assets/img/${firstName}/${image}" alt="${title}, image by ${name}">`
    : `<video class="photographer-main__portfolio__gallery__card__preview" src="../assets/img/${firstName}/${video}" onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;" alt="${title}, video by ${name}"></video>`;

    return `
    ${LightBox.render()}
    <div class="photographer-main__portfolio__gallery__card">
         ${mediaContent}
        <div class="photographer-main__portfolio__gallery__card__info">
            <p class="photographer-main__portfolio__gallery__card__info__title">${title}</p>
            <p class="photographer-main__portfolio__gallery__card__info__likes">${likes} <i class="fa-solid fa-heart"></i></p>
        </div>
    </div>
    `;
};

export const event = () => {
    LightBox.event();
};

export default {
    render
};