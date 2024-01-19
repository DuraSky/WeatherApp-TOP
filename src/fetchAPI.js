export async function getWeather(town){
    try{
        const apiKey = "http://api.weatherapi.com/v1/current.json?key=59b30c4f89b04cea93794629241901&q=";
        let apiFetch = apiKey+town+"&aqi=no";
        console.log(apiFetch)
        
        let weather = await fetch(apiFetch, {mode: 'cors'});
        let toJson = await weather.json();
        return toJson;
    } catch(err){
        alert(err)
    }
}