import { getWeather} from "./fetchAPI"
import { displayWeather } from "./displayWeather";
import "./style.css"

const townValue = document.getElementById("townForm");
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", async()=>{
    let getTown = townValue.value;
    let weatherData = await getWeather(getTown);
    townValue.value = "";
    displayWeather(weatherData);
})