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

export const event = (photographers, media) => {
    const updateTotalLikes = () => {
        const totalLikes = media.reduce((acc, curr) => acc + curr.likes, 0);
        const totalLikesElement = document.querySelector(".photographer-main__pricetag__like");
        if (totalLikesElement) {
            totalLikesElement.textContent = totalLikes;
        }
    };

    const toggleLike = (index) => {
        const heartIcon = document.getElementById(`heart-${index}`);
        if (heartIcon.classList.contains('fa-solid')) {
            media[index].likes--;
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        } else {
            media[index].likes++;
            heartIcon.classList.add('fa-solid');
            heartIcon.classList.remove('fa-regular');
        }
        const likesElement = document.getElementById(`like-${index}`);
        likesElement.textContent = media[index].likes;

        updateTotalLikes();
    };

    media.forEach((_, index) => {
        const heartIcon = document.getElementById(`heart-${index}`);
        heartIcon.addEventListener('click', () => toggleLike(index));
        heartIcon.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                toggleLike(index);
            }
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