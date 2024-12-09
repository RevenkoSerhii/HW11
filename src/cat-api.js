const selectCat = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const notiError = document.querySelector('.error');
const BASE_URL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common["x-api-key"] = "live_DPoEn7ODxFWtOuCuArwxp1OQLssTX1nqeQH867cwI0O0dOL6IoCfgFJ6Sz3604vd";

// console.log(error)
export  {fetchBreeds, fetchCatByBreed};
import axios from "axios";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';


loader.hidden = false;
selectCat.hidden = true;
// notiError.hidden = true;

function fetchBreeds(){
    return axios.get(`${BASE_URL}breeds/`)
 .then((response) => response.data)
.catch(error => {
    console.log('Дані отримано1:', error)
    Notiflix.Notify.failure(`${notiError.textContent}`)
    })
}


fetchBreeds()
.then(data => {
    console.log('Дані отримано2:', data);
    loader.hidden = true;
    selectCat.hidden = false;
    (selectCat.innerHTML = createMarcap(data));
    new SlimSelect({
        select: '#single'
      })
})
.catch(err => {
    console.log('Дані отримано3:', err)
    // notiError.hidden = false;
    loader.hidden = true;
    Notiflix.Notify.failure(`${notiError.textContent}`)});

function createMarcap(arr){
   
return arr.map(({id, name}) =>
    `<option value="${id}">${name}</option>`).join("")
}

selectCat.addEventListener('change', onSearch)
function onSearch(evt){
    loader.hidden = false; 
fetchCatByBreed(evt.currentTarget.value)
.then(data => {
    data;
    loader.hidden = true;
}
    
)
.catch(err => {
    console.log('Дані отримано:', err)
    Notiflix.Notify.failure(`${notiError.textContent}`)});
}

  

function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}images/search?breed_ids=${breedId}`)
     .then((response) => {
        
        catMarcap(response.data[0])
        }
    )
    .catch(error => Notiflix.Notify.failure(`${notiError.textContent}`));      
}

function catMarcap(cat){ 
const  {temperament, name, description} = cat.breeds[0];
 const catMarcap = `<img src="${cat.url}" alt="${name}" width="400">
                <p>${name}</p>
                <p>${description}</p>
                <p>${temperament}</p>` 
    return catInfo.innerHTML = catMarcap;
    }






