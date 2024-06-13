import { getData } from "../utils/api.js";

import PhotographerThumbnail from "../components/PhotographerThumbnail.js";

const displayPage = (photographers) => {
  if (!photographers) return;

  const app = document.querySelector("#app");

  app.innerHTML = `
        <header class="header">
            <a href="index.html" class="header__link">
                <img class="header__logo" src="assets/icon/logo.png" alt="FishEye Home page">
            </a>
            <h1 class="header__title">Nos photographes</h1>
        </header>
        <section class='main__grid'>
            ${photographers
              .map((photographer) => PhotographerThumbnail.render(photographer))
              .join("")}
        </section>
    `;
};

(async () => {
  const data = await getData();

  displayPage(data?.photographers);
})();
