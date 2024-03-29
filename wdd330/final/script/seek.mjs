//Import all Classes
import { getLocalStorage, setLocalStorage } from "./common.mjs";

// AUTOSUGGESTS LOCATIONS AS YOU TYPE IN THE SEARCH BAR

const searchInput = document.getElementById("search-input");
const suggestList = document.getElementById("suggest-list");
// When a user is typing in the search bar...
searchInput.addEventListener("input", async (event) => {
    const value = event.target.value;

    if (!value) {
        suggestList.innerHTML = "";
        return;
    }

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=44af6e0267e626fb09390194949d7a28&units=metric`
        
        );
    const data = await response.json();

    // When the location being typed by the user does not exist, it throws an error
    if (data.cod === "404") {
        suggestList.innerHTML = "City not found";
        return;
    }

    // Makes every suggested location in the format of "city, country"
    const suggestions = [`${data.name}, ${data.sys.country}`];
    suggestList.innerHTML = suggestions
        .map(
            (suggestion) =>
                `<li class="suggestion">${suggestion}</li>`
        )
        .join("");

    // Makes every suggested location clickable so it's copied and pasted into the search bar
    const suggestionElements = document.querySelectorAll(".suggestion");
    suggestionElements.forEach((suggestionElement) => {
        suggestionElement.addEventListener("click", (event) => {
            searchInput.value = event.target.innerText;
            suggestList.innerHTML = "";
        });
    });
    document.querySelector("#city").innerHTML = "";
});

// Enters the first suggested location when enter key is pressed
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const firstSuggestion = document.querySelector(".suggestion");
        if (firstSuggestion) {
            searchInput.value = firstSuggestion.innerText;
            suggestList.innerHTML = "";
            searchInput.value = "";

        }
    }
});



// FUNCTION TO RETRIEVE THE LOCATION ENTERED BY THE USER
export async function getLocation() {
    const location = searchInput.value.split(',')[0];
    


    // Confirm the city is in a compatible format
    if (!location.match(/^[a-zA-Z\s]+$/)) {
        throw new Error(`Invalid city format: ${location}`);
    }
    else {
        // Fetch city longitude and latitude and save to local storage
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=44af6e0267e626fb09390194949d7a28`);
        const data = await response.json();
        setLocalStorage("lon", data.coord.lon)
        setLocalStorage("lat", data.coord.lat)
        setLocalStorage("city", location);
    }
    return location;
}

  


