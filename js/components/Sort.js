import {displayPage} from "../pages/photographers.js";

export const render = () => {
    return `
    <section class="photographer-main__portfolio">
        <h2 class="photographer-main__portfolio__filter-title">Trier par</h2>
        <div  id="dropdown" class="photographer-main__portfolio__filter__dropdown">
            <p id="currentFilterValue" class="photographer-main__portfolio__filter__dropdown__current" >Popularité</p>
            <div id="dropDownSortContainer" class="photographer-main__portfolio__filter__dropdown__container hidden">
                <p>Popularité</p>
                <p>Date</p>
                <p>Titre</p>
            </div>
        </div>
    </section>`;
};

const dropDownSort =(photographers, media) => {
    const currentFilterValue = document.querySelector("#currentFilterValue");
    const dropDownSortContainer = document.querySelector("#dropDownSortContainer");

    currentFilterValue.addEventListener("click", () => {
        dropDownSortContainer.classList.toggle("hidden");
    });

    dropDownSortContainer.addEventListener('click', (e) => {
        currentFilterValue.textContent = e.target.textContent;

        const url = new URL(window.location);
        url.searchParams.set('filter', e.target.textContent);
        window.history.pushState({}, '', url);

        displayPage(photographers, media);
    });
};

export const sortMedia = (media) => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterValue = urlParams.get('filter');

    if (filterValue === "Titre") {
        media.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterValue === "Popularité") {
        media.sort((a, b) => b.likes - a.likes);
    } else if (filterValue === "Date") {
        media.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
}


export const event = (photographers, media) => {
    dropDownSort(photographers, media);
}

export default {
    render,
    event,
    sortMedia
};