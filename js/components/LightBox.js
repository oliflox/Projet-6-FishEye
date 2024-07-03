export const render = () => {
    return `
    <div class="hidden portfolio__lightbox">
        <i class="fa-solid fa-chevron-left portfolio__lightbox__arrow"></i>
        <div class="portfolio__lightbox__card">
            <img class="portfolio__lightbox__card__image" src="/assets/img/Marcel/Architecture_Contrast.jpg"
                alt="dsqdsqd">
            <h3 class="portfolio__lightbox__card__title">Arc-en-ciel</h3>
        </div>
        <i class="fa-solid fa-chevron-right portfolio__lightbox__arrow"></i>
    </div>
    `
};

export const event = () => {
};

export default {
    render,
    event
};