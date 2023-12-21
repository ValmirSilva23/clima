// variàveis e seleção de elementos
const apikey = "3c365977d62f5f962488e0a2ee5c559b";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");


// funções 

const getweatherdata = async (city) => {
const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_BR`;

const res = await fetch(apiweatherURL);
const data = await res.json();

return data;
};


const showWeatherData = async (city) => {
 const data = await getweatherdata (city);

 cityElement.innerText = data.name;
 tempElement.innerText = parseInt(data.main.temp);
 descElement.innerText = data.weather[0].description;
 weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
 countryElement.setAttribute("src", apiCountryURL + data.sys.country );
 humidityElement.innerText = `${data.main.humidity}%`;
 windElement.innerText = `${data.wind.speed}km/h`;

 weatherContainer.classList.remove("hide");

};

//funções

// eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});
cityInput.addEventListener("keyup",(e)=> {
    const city = e.target.value
    showWeatherData(city);
});


