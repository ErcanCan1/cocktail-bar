aimport get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({drinks}) => {
    const section = get(".section-center");
    const title = get(".title");

    if (drinks){
        hideLoading();
        title.textContent ="sorry, there is no drinks yo want";
        section.textContent=null;
        return;
    }

    const newDrinks = drinks.map((drink) => {
        const{
            idDrink:id, strDrink:name, strDrinkThumb:image
        } = drink;

        return `
        <a href="drink.html>
        <article class="coctail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
         </article></a>`;
    })
    .join("");
    hideLoading();
    title.textContent = "";
    section.textContent = newDrinks;
    return section;
}

export default displayDrinks;