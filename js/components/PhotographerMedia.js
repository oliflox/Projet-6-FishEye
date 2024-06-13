
export const renderMedia = (media, photographer) => {
    const { title, likes, image } = media ?? {};
    const name = photographer ?? {};
    const firstName = name.split(' ')[0];

    
    return `<div class="photographer-main__portfolio__gallery__card">
        <img class="photographer-main__portfolio__gallery__card__preview" src="../assets/img/${firstName}/${image}" alt="${title}, image by ${name}">
        <div class="photographer-main__portfolio__gallery__card__info">
            <p class="photographer-main__portfolio__gallery__card__info__title">${title}</p>
            <p class="photographer-main__portfolio__gallery__card__info__likes">${likes} <i class="fa-solid fa-heart"></i></p>
        </div>
    </div>
    `;
}

export const events = () => {};

export default {
    renderMedia,
    events,
};