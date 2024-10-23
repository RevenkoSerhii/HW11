function fetchBreeds(){
    const API_KEY = 'live_DPoEn7ODxFWtOuCuArwxp1OQLssTX1nqeQH867cwI0O0dOL6IoCfgFJ6Sz3604vd';
    const BASE_URL = 'https://api.thecatapi.com/v1/';

return fetch('https://api.thecatapi.com/v1/breeds?x-api-key=live_DPoEn7ODxFWtOuCuArwxp1OQLssTX1nqeQH867cwI0O0dOL6IoCfgFJ6Sz3604vd')
 .then(response => response.json())
 .then(posts => posts.map((post) => console.log(createMarcap(post.name))).join(""))
 .catch(error => console.log(error));

}
// fetchBreeds()
const createMarcap = function (name){
  // return <select name="" id="">${name}</select>
}
// selectCat.innerHTML = markup;
export default  fetchBreeds;
