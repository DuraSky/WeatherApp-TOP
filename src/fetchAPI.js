export async function getWeather(town) {
    try {
        const apiKey = "http://api.weatherapi.com/v1/forecast.json?key=59b30c4f89b04cea93794629241901&q=";
        let apiFetch = apiKey + town + "&days=4&aqi=no";
        console.log(apiFetch);

        let weather = await fetch(apiFetch, { mode: 'cors' });

        if (!weather.ok) {
            // Handle HTTP error response
            const errorResponse = await weather.json();
            throw new Error(`Bad request`);
        }
        let toJson = await weather.json();
        return toJson;
    } catch (err) {
        alert("Your search was not processed, either the location you are searching for is not in the database, or WeatherAPI is not working, please retry.")
    }
}