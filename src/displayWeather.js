export function displayWeather(weather){
    const content = document.getElementById("content");

    const mainInfo = document.createElement("div");
    mainInfo.setAttribute("id", "mainInfo");

    console.log("lenght")
    console.log(content.children.length)    
    console.log("Inside display");
    console.log(weather);

    if (content.children.length > 1) {
        content.removeChild(content.lastChild);
    }

    //Location Info
    let town = weather.location.name;
    let region = weather.location.region;
    let country = weather.location.country;
    let localTime = weather.location.localtime;

    let locationDiv = document.createElement("div");
    locationDiv.setAttribute("id", "locationDiv");

    let townPara = document.createElement("p");
    townPara.innerHTML = town;

    let regionPara = document.createElement("p");
    regionPara.innerHTML = region;

    let countryPara = document.createElement("p");
    countryPara.innerHTML = country;

    let localTimePara = document.createElement("p");
    localTimePara.innerHTML = `Local time: `+localTime;

    locationDiv.appendChild(townPara);
    locationDiv.appendChild(regionPara);
    locationDiv.appendChild(countryPara);
    locationDiv.appendChild(localTimePara);

    //weather Info
    let condition = weather.current.condition.text;
    let tempC = weather.current.temp_c;
    let tempF = weather.current.temp_f;
    let feelsLikeC = weather.current.feelslike_c;
    let feelsLikeF = weather.current.feelslike_f;
    let humidity = weather.current.humidity;
    let windKm = weather.current.wind_kph;
    let windMp = weather.current.wind_mph;

    let weatherInfoDiv = document.createElement("div");
    weatherInfoDiv.setAttribute("id", "weatherInfo");

    let tempCPara = document.createElement("p");
    tempCPara.innerHTML = `Celsius: ` + tempC;

    let feelsLikeCPara = document.createElement("p");
    feelsLikeCPara.innerHTML = `FeelsLikeInC :` + feelsLikeC;

    let feelsLikeFPara = document.createElement("p");
    feelsLikeFPara.innerHTML = `FeelsLikeInF :` + feelsLikeF;

    let tempFPara = document.createElement("p");
    tempFPara.innerHTML = `Farenheit: ` + tempF;

    let conditionPara = document.createElement("p");
    conditionPara.innerHTML = condition;

    let humidityPara = document.createElement("p");
    humidityPara.innerHTML = `Huminidity: ` + humidity;

    let windKmPara = document.createElement("p");
    windKmPara.innerHTML = `Wind speed Km: ` + windKm;

    let windMpPara = document.createElement("p");
    windMpPara.innerHTML = `Wind speed Mp: ` + windMp;

    weatherInfoDiv.appendChild(conditionPara);
    weatherInfoDiv.appendChild(tempCPara);
    weatherInfoDiv.appendChild(feelsLikeCPara);
    weatherInfoDiv.appendChild(tempFPara);
    weatherInfoDiv.appendChild(feelsLikeFPara);
    weatherInfoDiv.appendChild(humidityPara);
    weatherInfoDiv.appendChild(windKmPara);
    weatherInfoDiv.appendChild(windMpPara);

    mainInfo.appendChild(locationDiv);
    mainInfo.appendChild(weatherInfoDiv);
    content.appendChild(mainInfo);
}