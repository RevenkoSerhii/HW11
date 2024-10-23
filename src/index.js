import fetchBreeds from "./cat-api.js";
const selectCat = document.querySelector('.breed-select');
console.dir(selectCat)
const API_KEY = 'live_DPoEn7ODxFWtOuCuArwxp1OQLssTX1nqeQH867cwI0O0dOL6IoCfgFJ6Sz3604vd';
const BASE_URL = 'api.thecatapi.com/v1/breeds';
console.log(BASE_URL)

fetchBreeds();
