//Import all Classes
import {getLocalStorage} from "./common.mjs";
import WeatherSummary from "./weather.mjs";
import Forecast from "./cast.mjs";
import Maps from "./map.mjs";
import { degreeType } from "./type.mjs";
import { displayElement } from "./common.mjs";

const todaySummary = document.querySelector("#today-summary");
const fiveDayForcast = document.querySelector("#five-day-forecast");


export default class GetAPI {
      constructor(city) {
      this.city = city;
      this.latitude = getLocalStorage("lat");
      this.longitude = getLocalStorage("lon");
      this.degreeType = degreeType();
    }

    init() {
     
        this.getCurrentWeather();
        this.getForecast();
        this.getMaps();
        displayElement(todaySummary, "block");
        displayElement(fiveDayForcast, "flex");
    }
  
    //A function that creates an instance of the WeatherSummary Class
    async getCurrentWeather() {
      // const weatherSummary = new WeatherSummary(this.latitude, this.longitude, this.degreeType);
      const weatherSummary = new WeatherSummary(this.latitude, this.longitude, this.degreeType);
      weatherSummary.init();
    }
  
    //A function that creates an instance of the Forecast Class
    async getForecast() {
      const forecast = new Forecast(this.latitude, this.longitude, this.degreeType);
      forecast.init();

    }

    //A function that creates an instance of the Maps Class
    async getMaps() {
      const map = new Maps(this.latitude, this.longitude);
      map.init();
    }
  }


  