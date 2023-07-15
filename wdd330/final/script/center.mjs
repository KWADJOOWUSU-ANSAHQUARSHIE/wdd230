//Import necessasry modules
import { getLocation } from "./seek.mjs";
import GetAPI from "./API.mjs";
import { getCurrentLocation } from "./location.mjs";

const searchForm = document.querySelector(".search-form");   
const getLocationBtn = document.getElementById("getLocationBtn");


getLocationBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getCurrentLocation().then(getApi); 
});   

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await getLocation().then(getApi);
})

function getApi(location) {
    const getAPI = new GetAPI(location);    
    getAPI.init();
}

