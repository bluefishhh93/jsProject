const apikey =   "711db346aa0cbb95617bc7a91501a498";

const weatherDataEl = document.getElementById("weather-data");

const cityInputElement = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = cityInputElement.value;
    getWeatherData(cityValue);
});

//get data weather of the city
async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)

        if(!response.ok){ //if response is error
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // console.log(data);
        // console.log(data.weather[0].icon);
        const temperature = Math.round(data.main.temp);

        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Windspeed: ${data.wind.speed} m/s`
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;
        weatherDataEl.querySelector(".temperature").textContent=`${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent=`${description}`;
        weatherDataEl.querySelector(".details").innerHTML = details.map(
            (detail)  => `<div>${detail}</div>`
            ).join(""); //neu ko co cai nay thi no se hien dau , moi cai div
    } catch (error) {
        
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent="";
        weatherDataEl.querySelector(".description").textContent="An error occurred, please try again!";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}