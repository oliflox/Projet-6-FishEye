import { getData } from "../utils/api.js";
import photographerProfile from "../components/PhotographerProfile.js";
import PhotographerMedia from "../components/PhotographerMedia.js";
import renderOrderBy from "../components/OrderBy.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

const displayPage = (photographers, media) => {
    if (!photographers || !media) return;
    
    const profile = document.querySelector("#photographer-profile");
    profile.innerHTML += photographers
    .filter((photographer) => { return photographer.id == photographerId})
    .map((photographer) => photographerProfile.renderProfile(photographer))
    .join("");

    const orderByContainer = document.querySelector("#orderBy");
    orderByContainer.innerHTML += renderOrderBy.renderOrderBy();

    const medias = document.querySelector("#photographer-media");
    medias.innerHTML += media
    .filter((media) => { return media.photographerId == photographerId})
    .map((media) => PhotographerMedia.renderMedia(media))
    .join("");
};

(async () => {
    const data = await getData();
    
    displayPage(data?.photographers, data?.media);
    console.log(media);
})();