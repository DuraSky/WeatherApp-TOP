export function displayWeather(weather){
    console.log("Inside display");
    console.log(weather)
    console.log("Town");
    console.log(weather.location.name);
    console.log("Current conditions:");
    console.log(weather.current.condition.text)
}