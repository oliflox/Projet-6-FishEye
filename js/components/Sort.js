import { displayPage } from "../pages/photographers.js";

export const render = (filterValue = "Popularité") => {
    return `
    <section class="photographer-main__portfolio">
        <h2 class="photographer-main__portfolio__filter-title">Trier par</h2>
        <div id="dropdown" class="photographer-main__portfolio__filter__dropdown" tabindex="0">
            <div id="currentSortValue" class="photographer-main__portfolio__filter__dropdown__current" >
                <p>${filterValue}</p>
                <i id="dropdownArrow" class="fa-solid fa-angle-down"></i>
            </div>
            <ul id="dropDownSortContainer" class="photographer-main__portfolio__filter__dropdown__container hidden">
                <li class="dropdown-item" data-value="Popularité">Popularité</li>
                <li class="dropdown-item" data-value="Date">Date</li>
                <li class="dropdown-item" data-value="Titre">Titre</li>
            </ul>
        </div>
    </section>`;
};
const dropDownSort = (photographers, media) => {
    const dropdown = document.querySelector("#dropdown");
    const currentSortValue = document.querySelector("#currentSortValue");
    const dropDownSortContainer = document.querySelector("#dropDownSortContainer");
    const sortOptions = dropDownSortContainer.querySelectorAll(".dropdown-item");
    const chevronIcon = document.querySelector("#dropdownArrow");
    let currentFocus = -1;

    const urlParams = new URLSearchParams(window.location.search);
    const sortValue = urlParams.get('sort') || "Popularité";

    // Set the initial value
    currentSortValue.querySelector("p").textContent = sortValue;

    const updateDropdownMenu = () => {
        sortOptions.forEach(option => {
            if (option.getAttribute('data-value') === sortValue) {
                option.classList.add("hidden");
            } else {
                option.classList.remove("hidden");
            }
        });
    };

    const toggleDropdown = () => {
        const isOpen = dropDownSortContainer.classList.contains("hidden");
        dropDownSortContainer.classList.toggle("hidden");
        chevronIcon.classList.toggle('fa-angle-down', isOpen);
        chevronIcon.classList.toggle('fa-angle-up', !isOpen);

        if (!isOpen) {
            currentFocus = -1;
            updateDropdownMenu();
        }
    };

    const selectOption = (item) => {
        const value = item.getAttribute('data-value');
        currentSortValue.querySelector("p").textContent = value;

        const url = new URL(window.location);
        url.searchParams.set('sort', value);
        window.history.pushState({}, '', url);

        displayPage(photographers, media);
        dropDownSortContainer.classList.add("hidden");
        chevronIcon.classList.add('fa-angle-down');
        chevronIcon.classList.remove('fa-angle-up');
    };

    const removeFocus = () => {
        sortOptions.forEach(item => item.classList.remove('focused'));
    };

    dropdown.addEventListener("click", () => {
        toggleDropdown();
    });

    dropdown.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            toggleDropdown();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (dropDownSortContainer.classList.contains("hidden")) return;

        if (event.key === 'ArrowDown') {
            currentFocus = (currentFocus + 1) % sortOptions.length;
            removeFocus();
            sortOptions[currentFocus].classList.add('focused');
            sortOptions[currentFocus].focus();
            event.preventDefault();
        }
        if (event.key === 'ArrowUp') {
            currentFocus = (currentFocus - 1 + sortOptions.length) % sortOptions.length;
            removeFocus();
            sortOptions[currentFocus].classList.add('focused');
            sortOptions[currentFocus].focus();
            event.preventDefault();
        }
        if (event.key === 'ArrowRight' && currentFocus >= 0) {
            selectOption(sortOptions[currentFocus]);
            currentSortValue.focus();
            event.preventDefault();
        }
        if (event.key === 'Escape') {
            toggleDropdown();
            currentSortValue.focus();
            event.preventDefault();
        }
    });

    dropDownSortContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropdown-item')) {
            selectOption(e.target);
        }
    });

    updateDropdownMenu();
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
};

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
};

export default {
    render,
    event,
    sortMedia
};
