export const render = () => {
    return `
    <section class="photographer-main__portfolio">
        <label class="photographer-main__portfolio__label" for="filter">Trier par</label>
        <div class="dropdown">
        <h3 class="dropdown-button button">Filter</h3>
            <div class="dropdown-content hidden">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
            </div>
        </div>
    </section>`;
};

export const event = () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    dropdownButton.addEventListener("click", () => {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("hidden");
    dropdownContent.addEventListener("click", (e) => {
        dropdownContent.classList.add("hidden");
    });
});
};

export default {
    render,
    event
};