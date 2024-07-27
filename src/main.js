

import searchImegesByQuery from "./js/pixabay-apy"
import renderFunction from "./js/render-functions"

const form = document.querySelector('.search-img-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', heandlyClickBtnSearch);
loader.style.display = 'none';

function heandlyClickBtnSearch(event){
    event.preventDefault();
    loader.style.display = 'block';

    const inputName = event.currentTarget.elements.name.value.trim().toLowerCase();

    searchImegesByQuery(inputName)
    .then(renderFunction.renderImg)
    .catch(renderFunction.onFetchError)
    .finally(() => form.reset());
}