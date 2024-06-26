export const render = () => {
    return `
    <section class="photographer-main__portfolio">
        <h2 class="photographer-main__portfolio__filter-title">Trier par</h2>
        <div id="dropdown" class="photographer-main__portfolio__filter__dropdown">
            <p class="photographer-main__portfolio__filter__dropdown__current" id="currentFilterValue">Popularité</p>
            <div id="dropdownFilterContainer" class="photographer-main__portfolio__filter__dropdown__container hidden">
                <p class="hidden">Popularité</p>
                <p>Date</p>
                <p>Titre</p>
            </div>
        </div>
    </section>`;
};

const dropDownFilter =(media) => {
    const currentFilterValue = document.querySelector("#currentFilterValue");
    const dropdownFilterContainer = document.querySelector("#dropdownFilterContainer");

    currentFilterValue.addEventListener("click", () => {
        dropdownFilterContainer.classList.toggle("hidden");
    });

    dropdownFilterContainer.addEventListener('click', (e) => {
        currentFilterValue.textContent = e.target.textContent;
        dropdownFilterContainer.classList.toggle("hidden");
        e.target.classList.add("hidden");
        for (let i = 0; i < dropdownFilterContainer.children.length; i++) {
            if (dropdownFilterContainer.children[i].textContent !== e.target.textContent) {
                dropdownFilterContainer.children[i].classList.remove("hidden");
            }
        }
        const url = new URL(window.location);
        url.searchParams.set('filter', e.target.textContent);
        window.history.pushState({}, '', url);
    });
    
};

const filterMedia = (media) => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterValue = urlParams.get('filter');
    if (!filterValue) return;
    if (filterValue === "Titre") {
        media.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterValue === "Popularité") {
        media.sort((a, b) => b.likes - a.likes);
    } else if (filterValue === "Date") {
        media.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
};

export const event = (media) => {
    dropDownFilter();
    filterMedia(media);
    
}

export default {
    render,
    event,
};