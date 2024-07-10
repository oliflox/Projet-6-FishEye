import { getData } from "../utils/api.js";
import PhotographerProfile from "../components/PhotographerProfile.js";
import PhotographerMedia from "../components/PhotographerMedia.js";
import Sort from "../components/Sort.js";
import GlobalLikes from "../components/GlobalLikes.js";
import LightBox from "../components/LightBox.js";

export const displayPage = (photographers, media) => {
    if (!photographers || !media) return;

    const app = document.querySelector("#app");

    Sort.sortMedia(media);

    app.innerHTML = `
        ${LightBox.render(media, photographers)}
        ${PhotographerProfile.render(photographers)} 
        ${Sort.render(photographers, media)} 
        <section class="photographer-main__portfolio__gallery">
            ${media.map((mediaItem, index) => PhotographerMedia.render(mediaItem, photographers, index)).join("")}  
        </section>
        ${GlobalLikes.render(photographers, media)}
    `;

    PhotographerProfile.event();
    Sort.event(photographers, media);
    LightBox.event(media, photographers);
    PhotographerMedia.event(photographers, media);
};

(async () => {
    const data = await getData();

    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get('id');

    const photographer = data?.photographers.find(photographer => photographer.id === parseInt(photographerId));
    const media = data?.media.filter(media => media.photographerId === parseInt(photographerId));

    displayPage(photographer, media);
})();