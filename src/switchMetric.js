export function switchMetric(weather, tempPara,feelsLikePara,windPara,day1TempPara,day2TempPara,day3TempPara){
    const switchBtnDiv = document.getElementById("switchBtnDiv");
    let switched = false;

    const switchButton = document.createElement("button");
    switchButton.setAttribute("id", "switch");
    //switchButton.innerHTML = "Switch Metrics";
    switchButton.innerHTML = `<img src="./temp.svg" alt="search" width="30px">°C/°F</img>`;

    switchButton.addEventListener("click", ()=>{
        let tempC = weather.current.temp_c;
        let tempF = weather.current.temp_f;
        let feelsLikeC = weather.current.feelslike_c;
        let feelsLikeF = weather.current.feelslike_f;
        let windKm = weather.current.wind_kph;
        let windMp = weather.current.wind_mph;
        let day1TempC = weather.forecast.forecastday[1].day.avgtemp_c;
        let day1TempF = weather.forecast.forecastday[1].day.avgtemp_f;
        let day2TempC = weather.forecast.forecastday[2].day.avgtemp_c;
        let day2TempF = weather.forecast.forecastday[2].day.avgtemp_f;
        let day3TempC = weather.forecast.forecastday[3].day.avgtemp_c;
        let day3TempF = weather.forecast.forecastday[3].day.avgtemp_f;

        if(switched === false){
            tempPara.innerHTML = "Fahrenheit: " + tempF;
            feelsLikePara.innerHTML = "Feels like: "  + feelsLikeF + ` °F`;
            windPara.innerHTML = "Wind speed Km: " + windMp;
            day1TempPara.innerHTML = day1TempF + " °F";
            day2TempPara.innerHTML = day2TempF + " °F";
            day3TempPara.innerHTML = day3TempF + " °F";
            switched = true;
        }else if(switched === true){
            tempPara.innerHTML = "Celsius: " + tempC;
            feelsLikePara.innerHTML = "Feels like: "  + feelsLikeC + ` °C`;
            windPara.innerHTML = "Wind speed Km: " + windKm;
            day1TempPara.innerHTML = day1TempC + " °C";
            day2TempPara.innerHTML = day2TempC + " °C";
            day3TempPara.innerHTML = day3TempC + " °C";
            switched = false;
        }
    })
    switchBtnDiv.appendChild(switchButton)
}