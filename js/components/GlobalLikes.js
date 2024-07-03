export const render = (photographer, media) => {
    const { price } = photographer ?? {};
    
    const totalLikes = Array.isArray(media) ? media.reduce((acc, curr) => acc + curr.likes, 0) : 0;

    return`
    <div class="photographer-main__pricetag">
        <p class="photographer-main__pricetag__like">${totalLikes} <i class="fa-solid fa-heart"></i></p>
        <p class="photographer-main__pricetag__price">${price}€ / jour</p>
    </div>
    `
}; 

export const event = () => {
    
};


export default {
    render,
    event
};