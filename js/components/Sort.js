import {displayPage} from "../pages/photographers.js";

export const render = (filterValue = "Popularité") => {
    return `
    <section class="photographer-main__portfolio">
        <h2 class="photographer-main__portfolio__filter-title">Trier par</h2>
        <div  id="dropdown" class="photographer-main__portfolio__filter__dropdown">
            <div id="currentSortValue" class="photographer-main__portfolio__filter__dropdown__current">
                <p>${filterValue}</p>
                <i id="dropdownArrow" class="fa-solid fa-angle-down"></i>
            </div>
            <div id="dropDownSortContainer" class="photographer-main__portfolio__filter__dropdown__container hidden">
                <p>Popularité</p>
                <p>Date</p>
                <p>Titre</p>
            </div>
        </div>
    </section>`;
};
 
const dropDownSort = (photographers, media) => {
    const dropdown = document.querySelector("#dropdown");
    const currentSortValue = document.querySelector("#currentSortValue");
    const dropDownSortContainer = document.querySelector("#dropDownSortContainer");
    const sortOptions = dropDownSortContainer.querySelectorAll("p");

    const urlParams = new URLSearchParams(window.location.search);
    const sortValue = urlParams.get('sort') || "Popularité";

    currentSortValue.textContent = sortValue;

    sortOptions.forEach(option => {
        if (option.textContent === sortValue) {
            option.classList.add("hidden");
        } else {
            option.classList.remove("hidden");
        }
    });

    currentSortValue.setAttribute('tabindex', '0');
    currentSortValue.addEventListener("keydown", (event) => {
        if (event.key === 13) {
            dropDownSortContainer.classList.toggle("hidden");
        }
    });

    dropdown.addEventListener("click", () => {
        dropDownSortContainer.classList.toggle("hidden");
        dropdown.classList.toggle("OpenDropdown");
    });

    dropDownSortContainer.addEventListener('click', (e) => {
        currentSortValue.textContent = e.target.textContent;

        const url = new URL(window.location);
        url.searchParams.set('sort', e.target.textContent);
        window.history.pushState({}, '', url);

        displayPage(photographers, media);
    });
};


export const sortMedia = (media) => {
    const urlParams = new URLSearchParams(window.location.search);
    let sortValue = urlParams.get('sort') || "Popularité"; 

    switch (sortValue) {
        case "Titre":
            sortByTitle(media);
            break;
        case "Popularité":
            sortByPopularity(media);
            break;
        case "Date":
            sortByDate(media);
            break;
        default:
            sortByPopularity(media); 
    }
}

function sortByTitle(media) {
    media.sort((a, b) => a.title.localeCompare(b.title));
}

function sortByPopularity(media) {
    media.sort((a, b) => b.likes - a.likes);
}

function sortByDate(media) {
    media.sort((a, b) => new Date(b.date) - new Date(a.date));
}


export const event = (photographers, media) => {
    dropDownSort(photographers, media);
}

export default {
    render,
    event,
    sortMedia
};