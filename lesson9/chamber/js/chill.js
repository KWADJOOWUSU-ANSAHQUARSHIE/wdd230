
const temperature =  document.getElementById("temp").textContent;
const tempNumber =parseFloat(document.getElementById("temp").textContent);

const speedNumber =parseFloat(document.getElementById("speed").textContent);

let windchill = 35.74 + (0.625 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16))
+ (0.4275 * tempNumber * Math.pow(speedNumber,0.16))
windchill = Math.round(windchill);

if (tempNumber<=50 && speedNumber>3){
    document.getElementById("chill").textContent = "wind chill is "+windchill+"\xB0F";

} else{
document.getElementById("chill").textContent = "Windchill: N/A"
}

const apiURL = "//api.openweathermap.org/data/2.5/weather?q=accra&units=imperial&appid=44af6e0267e626fb09390194949d7a28" ;

 fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = jsObject.main.temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    const sped = jsObject.wind.speed;
    document.querySelector('#speed').textContent = sped;
  });

