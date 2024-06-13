export const renderOrderBy = () => {
    return `
    <section class="photographer-main__portfolio">
        <label class="photographer-main__portfolio__label" for="orderBy">Trier par</label>
        <select class="photographer-main__portfolio__orderBy" name="orderBy" id="orderBy">
            <option value="popularity">Popularité</option>
            <option value="date">Date</option>
            <option value="title">Titre</option>
        </select>
    </section>`;
};

export const OrderBy = () => {}

export default {
    renderOrderBy,
    OrderBy
};