import { switchMetric } from "./switchMetric";

export function displayWeather(weather){
    const content = document.getElementById("content");
    content.innerHTML = ""

    const mainInfo = document.createElement("div");
    mainInfo.setAttribute("id", "mainInfo");

    console.log("lenght")
    console.log(content.children.length)    
    console.log("Inside display");
    console.log(weather);

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
    let feelsLikeC = weather.current.feelslike_c;
    let humidity = weather.current.humidity;
    let windKm = weather.current.wind_kph;
    const iconUrl = "http:" + weather.current.condition.icon;

    let weatherInfoDiv = document.createElement("div");
    weatherInfoDiv.setAttribute("id", "weatherInfo");

    let tempPara = document.createElement("p");
    tempPara.innerHTML = `Celsius: ` + tempC;

    let feelsLikePara = document.createElement("p");
    feelsLikePara.innerHTML = `Feels like :` + feelsLikeC;

    let conditionPara = document.createElement("p");
    conditionPara.innerHTML = condition;

    let iconImg = document.createElement("img");
    iconImg.src = iconUrl; 

    let humidityPara = document.createElement("p");
    humidityPara.innerHTML = `Huminidity: ` + humidity;

    let windPara = document.createElement("p");
    windPara.innerHTML = `Wind speed Km: ` + windKm;

    //forecast
    const forecastDiv = document.createElement("div");
    forecastDiv.setAttribute("id", "forecast");

        //day1
    let day1Date = weather.forecast.forecastday[1].date;
    let day1condition = weather.forecast.forecastday[1].day.condition.text;
    let day1Temp = weather.forecast.forecastday[1].day.avgtemp_c;
    let day1Icon = "http:" + weather.forecast.forecastday[1].day.condition.icon;

    let day1Div = document.createElement("div");
    day1Div.setAttribute("class", "day 1");

    let day1DatePara = document.createElement("p");
    day1DatePara.innerHTML = day1Date;

    let day1conditionPara = document.createElement("p");
    day1conditionPara.innerHTML = day1condition;

    let day1IconImg = document.createElement("img");
    day1IconImg.src = day1Icon;

    let day1TempPara = document.createElement("p");
    day1TempPara.innerHTML = day1Temp + " C";

        //day2
    let day2Date = weather.forecast.forecastday[2].date;
    let day2condition = weather.forecast.forecastday[2].day.condition.text;
    let day2Temp = weather.forecast.forecastday[2].day.avgtemp_c;
    let day2Icon = "http:" + weather.forecast.forecastday[2].day.condition.icon;


    let day2Div = document.createElement("div");
    day2Div.setAttribute("class", "day 2");

    let day2DatePara = document.createElement("p");
    day2DatePara.innerHTML = day2Date;

    let day2conditionPara = document.createElement("p");
    day2conditionPara.innerHTML = day2condition;

    let day2IconImg = document.createElement("img");
    day2IconImg.src = day2Icon;

    let day2TempPara = document.createElement("p");
    day2TempPara.innerHTML = day2Temp + " C";

        //day3
    let day3Date = weather.forecast.forecastday[3].date;
    let day3condition = weather.forecast.forecastday[3].day.condition.text;
    let day3Temp = weather.forecast.forecastday[3].day.avgtemp_c;
    let day3Icon = "http:" + weather.forecast.forecastday[3].day.condition.icon;


    let day3Div = document.createElement("div");
    day3Div.setAttribute("class", "day 3");

    let day3DatePara = document.createElement("p");
    day3DatePara.innerHTML = day3Date;

    let day3conditionPara = document.createElement("p");
    day3conditionPara.innerHTML = day3condition;

    let day3IconImg = document.createElement("img");
    day3IconImg.src = day3Icon;

    let day3TempPara = document.createElement("p");
    day3TempPara.innerHTML = day3Temp + " C";

    weatherInfoDiv.appendChild(conditionPara);
    weatherInfoDiv.appendChild(iconImg)
    weatherInfoDiv.appendChild(tempPara);
    weatherInfoDiv.appendChild(feelsLikePara);
    weatherInfoDiv.appendChild(humidityPara);
    weatherInfoDiv.appendChild(windPara);

    day1Div.appendChild(day1DatePara);
    day1Div.appendChild(day1conditionPara);
    day1Div.appendChild(day1IconImg);
    day1Div.appendChild(day1TempPara);

    day2Div.appendChild(day2DatePara);
    day2Div.appendChild(day2conditionPara);
    day2Div.appendChild(day2IconImg);
    day2Div.appendChild(day2TempPara);

    day3Div.appendChild(day3DatePara);
    day3Div.appendChild(day3conditionPara);
    day3Div.appendChild(day3IconImg);
    day3Div.appendChild(day3TempPara);

    forecastDiv.appendChild(day1Div);
    forecastDiv.appendChild(day2Div);
    forecastDiv.appendChild(day3Div);

    mainInfo.appendChild(locationDiv);
    mainInfo.appendChild(weatherInfoDiv);
    mainInfo.appendChild(forecastDiv);
    content.appendChild(mainInfo);

    switchMetric(weather,tempPara,feelsLikePara,windPara,day1TempPara,day2TempPara,day3TempPara);
}