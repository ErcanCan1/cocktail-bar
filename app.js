import presentDrinks from "./coımponents/presentDrinks.js";
import  './coımponents/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
