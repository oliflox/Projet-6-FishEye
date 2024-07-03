export const render = (photographer, media) => {
    const { price } = photographer ?? {};
    
    const totalLikes = Array.isArray(media) ? media.reduce((acc, curr) => acc + curr.likes, 0) : 0;

    return`
    <div class="photographer-main__pricetag">
        <div class="photographer-main__pricetag__container">
            <p class="photographer-main__pricetag__like">${totalLikes}</p>
            <i class="fa-solid fa-heart"></i>
        </div>    
        <p class="photographer-main__pricetag__price">${price}€ / jour</p>
    </div>
    `
}; 

export const event = (media) => {
    let hearts = document.querySelectorAll('.fa-heart');

    hearts.forEach((heart, index) => {
        heart.addEventListener('click', (e) => {
            e.target.classList.toggle('fa-solid');
            e.target.classList.toggle('fa-regular');

            const isLiked = e.target.classList.contains('fa-solid');

            if (isLiked) {
                media[index].likes += 1;
            } else {
                media[index].likes = Math.max(0, media[index].likes - 1);
            }

            const totalLikes = media.reduce((acc, curr) => acc + curr.likes, 0);
            document.querySelector(".photographer-main__pricetag__like").textContent = `${totalLikes}`;
        });
    });
};


export default {
    render,
    event
};







/*  
- chaque media a une valeur qui peut changer, leurs valeurs initial sont celles du fichier donc la variable likes
- chaque media a un bouton like qui permet d'ajouter un like
*/