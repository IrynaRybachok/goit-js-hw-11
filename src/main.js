// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import searchImegesByQuery from "./js/pixabay-apy"
import renderFunction from "./js/render-functions"

const form = document.querySelector('.search-img-form');

form.addEventListener('submit', heandlyClickBtnSearch);

function heandlyClickBtnSearch(event){
    event.preventDefault();

    const inputName = event.currentTarget.elements.name.value.trim().toLowerCase();

    searchImegesByQuery(inputName)
    .then(renderFunction.renderImg)
    .catch(renderFunction.onFetchError)
    .finally(() => form.reset());
}