import get from "./getElement.js";
import presentDrinks from "./presentDrink.js";

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get(".search-form");
const input = get('[name="drink"]');

form.addEventListener("kayup", function (e) {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    presentDrinks(`${baseUrl}${value}`);
});