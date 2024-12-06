export const render = (photographer) => {
  const { id, portrait, name, city, country, tagline, price } =
    photographer ?? {};

  return `
        <a class="main__grid__link" href="photographer.html?id=${id}">
            <div class="main__grid__card">
                <div class="main__grid__card__profile">
                    <img class="main__grid__card__profile__portrait" src="assets/img/PhotographersID/${portrait}" alt="${name} profile's picture" />
                    <h2 class="main__grid__card__profile__name">${name}</h2>
                </div>
                <div class="main__grid__card__info">
                    <p class="main__grid__card__info__location">${city}, ${country}</p>
                    <p class="main__grid__card__info__tagline">${tagline}</p>
                    <p class="main__grid__card__info__price">${price}€/jour</p>
                </div>
            </div>
        </a>
    `;
};

export const events = () => { };

export default {
  render,
  events,
};
