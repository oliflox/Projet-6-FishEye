import { getData } from "../utils/api.js";
import photographerProfile from "../components/PhotographerProfile.js";
import PhotographerMedia from "../components/PhotographerMedia.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

const displayPage = (photographers) => {
    if (!photographers) return;
    
    const profile = document.querySelector("#photographer-profile");
    profile.innerHTML = photographers
    .filter((photographer) => { return photographer.id == photographerId})
    .map((photographer) => photographerProfile.renderProfile(photographer))
    .join("");
};

(async () => {
    const data = await getData();
    
    displayPage(data?.photographers);
    console.log(media);
})();